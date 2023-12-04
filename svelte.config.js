import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			$services: "src/services",
			$repositories: "src/repositories",
			$applications: "src/applications",
			$api: "imports/api"
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
