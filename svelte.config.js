import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: sveltePreprocess({ postcss: true }),
	preprocess: vitePreprocess({ postcss: true }),
	kit: {
		adapter: adapter({}),
		alias: {
			$services: "src/services",
			$repositories: "src/repositories",
			$applications: "src/applications",
			$api: "imports/api",
			$types: "src/types"
		}
	},
	onwarn: (
		/** @type {{ code: string; }} */ warning,
		/** @type {(arg0: any) => void} */ handler
	) => {
		if (warning.code.startsWith("a11y-")) {
			return;
		}
		handler(warning);
	}
};

export default config;
