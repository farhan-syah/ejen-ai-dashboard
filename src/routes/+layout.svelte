<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { UserState } from "$applications";
	import { logger } from "$lib/utils/logger";
	import { AuthService } from "$services";
	import { onMount } from "svelte";
	import "../app.postcss";
	import App from "./app.svelte";
	// Initialize browser stores
	const userState = UserState;
	const token = userState.accessToken;

	if (token) {
		AuthService;
	}

	const reserved: string[] = ["/login", "/register", "/forgot-password", "/verify-email"];

	onMount(() => {
		token.subscribe(async (token) => {
			if (!browser) {
				return;
			} else {
				await redirect(token);
			}
		});
	});

	async function redirect(token?: string) {
		try {
			if (!token) {
				if (reserved.includes($page.url.pathname)) {
					return;
				}
				await goto("/login", { replaceState: true });
			} else {
				if ($page.url.pathname == "/") {
					await goto("/dashboard", { replaceState: true });
				}
			}
		} catch (e) {
			logger.error(e);
		}
	}
</script>

<App>
	<slot />
</App>
