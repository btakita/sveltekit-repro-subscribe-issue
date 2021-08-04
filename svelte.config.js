import preprocess from 'svelte-preprocess';
import { readFile } from 'fs/promises'

const pkg = JSON.parse((await readFile('./package.json')).toString())
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			optimizeDeps: {
				// exclude: ['@ctx-core/object'],
				exclude: ['node-fetch'].concat([...Object.keys(pkg.devDependencies)]),
			},
			ssr: {
				// noExternal: ['@ctx-core/object']
				noExternal: ['node-fetch'].concat([...Object.keys(pkg.devDependencies)])
			},
			plugins: [
			]
		}
	}
};

export default config;
