<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { UserState } from "$applications";
	import { AuthService } from "$services";
	import { onMount } from "svelte";
	import "../app.postcss";
	import App from "./app.svelte";

	// Initialize browser stores
	const token = UserState.accessToken;
	if (token) {
		AuthService;
	}

	let loading = true;
	const reserved: string[] = ["/auth"];

	onMount(() => {
		token.subscribe(async (token) => {
			if (!browser) {
				loading = false;
				return;
			} else {
				await redirect(token);
				loading = false;
			}
		});
	});

	async function redirect(token?: string) {
		try {
			if (!token) {
				if (reserved.includes($page.url.pathname)) {
					return;
				}
				await goto("/auth/login", { replaceState: true });
			} else {
				if ($page.url.pathname == "/") await goto("/dashboard", { replaceState: true });
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<App>
	<slot />
</App>
