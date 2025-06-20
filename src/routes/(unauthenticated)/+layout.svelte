<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { UserState } from "$applications";
	import { onMount } from "svelte";

	const user = UserState.user;

	onMount(() => {
		user.subscribe((user) => {
			if (browser) {
				if (user) goto("/dashboard", { replaceState: true });
			}
		});
	});
</script>

<div class="m-auto">
	<slot />
</div>
