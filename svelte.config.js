import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			$services: "src/services",
			$repositories: "src/repositories",
			$applications: "src/applications",
			$api: "imports/api",
			$types: "src/types"
		}
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) {
			return;
		}
		handler(warning);
	}
};

export default config;
