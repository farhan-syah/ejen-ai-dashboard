<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { UserState, type User } from "$applications";
	import { onMount } from "svelte";
	import "../app.postcss";
	import App from "./app.svelte";
	const user = UserState.user;
	let loading = true;
	const reserved: string[] = ["/auth"];

	onMount(() => {
		user.subscribe(async (user) => {
			if (!browser) {
				loading = false;
				return;
			}
			await redirect(user);
			loading = false;
		});
	});

	async function redirect(user?: User) {
		try {
			if (!user) {
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
