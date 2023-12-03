<script lang="ts">
	import { goto } from "$app/navigation";
	import { UserState } from "$applications";
	import { onMount } from "svelte";
	import "../app.postcss";
	import App from "./app.svelte";
	const user = UserState.user;
	let loading = true;

	onMount(() => {
		if ($user) {
			goto("/dashboard");
		} else {
			goto("/login");
		}
	});
</script>

<App>
	<slot />
</App>
