import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const babel = require('@babel/core');
const presetTs = require('@babel/preset-typescript');

export async function resolve(specifier, context, nextResolve) {
	if (specifier === 'svelte/store') {
		return {
			url: 'virtual:svelte-store',
			shortCircuit: true,
		};
	}
	try {
		return await nextResolve(specifier, context);
	} catch (err) {
		if (/^\.\.?\//.test(specifier) && !/\.[cm]?[jt]s$/.test(specifier)) {
			return await nextResolve(`${specifier}.ts`, context);
		}
		throw err;
	}
}

export async function load(url, context, nextLoad) {
	if (url === 'virtual:svelte-store') {
		return {
			format: 'module',
			shortCircuit: true,
			source: `
export function writable(val) {
	const subs = new Set();
	function set(next) {
		val = next;
		for (const s of subs) s(val);
	}
	function update(fn) {
		set(fn(val));
	}
	function subscribe(fn) {
		subs.add(fn);
		fn(val);
		return () => subs.delete(fn);
	}
	return { set, update, subscribe };
}
export function get(store) {
	let v;
	store.subscribe((val) => { v = val; })();
	return v;
}
export function derived(stores, fn) {
	const isArr = Array.isArray(stores);
	const list = isArr ? stores : [stores];
	const out = writable(undefined);
	function recompute() {
		const vals = list.map((s) => get(s));
		out.set(fn(isArr ? vals : vals[0]));
	}
	recompute();
	for (const s of list) s.subscribe(recompute);
	return { subscribe: out.subscribe };
}
`,
		};
	}
	if (url.endsWith('.ts')) {
		const filename = fileURLToPath(url);
		const source = fs.readFileSync(filename, 'utf8');
		const result = babel.transformSync(source, {
			filename,
			presets: [presetTs],
			sourceMaps: 'inline',
		});
		return {
			format: 'module',
			shortCircuit: true,
			source: result.code,
		};
	}
	return nextLoad(url, context);
}
