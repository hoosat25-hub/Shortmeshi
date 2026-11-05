// The static entry (static/index-latest-ui.html) is the app that is actually
// served at "/". `vite build` + adapter-static overwrite build/index.html with
// the SvelteKit fallback, so copy the real entry back afterwards.
//
// Also drop the precompressed variants for these files: they would otherwise be
// stale copies of the fallback page and could be served by a static host that
// prefers .gz/.br files.
import { copyFile, rm } from 'node:fs/promises';

const source = 'static/index-latest-ui.html';
const targets = ['index.html', '200.html', '404.html'];

for (const target of targets) {
	await copyFile(source, `build/${target}`);
	await rm(`build/${target}.gz`, { force: true });
	await rm(`build/${target}.br`, { force: true });
}

console.log(`[static-entry] restored ${targets.join(', ')} from ${source}`);
