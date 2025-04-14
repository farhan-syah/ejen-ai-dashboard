<script>
	import { UserState } from "$applications";
	import { Loader } from "$lib/components";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	onMount(async () => {
		const token = UserState.accessToken.get();
		if (!token) {
			await goto("/login", { replaceState: true });
		}
	});
</script>

<!-- Main Page  -->

<Loader />
