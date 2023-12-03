import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { tryParseInt } from './src/lib/utils';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: tryParseInt(process.env.PORT)
	}
});
