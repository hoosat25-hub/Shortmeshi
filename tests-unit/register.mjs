import { registerHooks } from 'node:module';

// The sources are written for a bundler, which resolves extensionless imports.
// Node needs the extension spelled out, so add it when the first attempt fails.
registerHooks({
	resolve(specifier, context, next) {
		try {
			return next(specifier, context);
		} catch (error) {
			if (/^\.\.?\//.test(specifier) && !/\.[cm]?[jt]s$/.test(specifier)) {
				return next(`${specifier}.ts`, context);
			}
			throw error;
		}
	},
});
