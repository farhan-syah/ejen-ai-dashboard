<script lang="ts">
	import { AppState } from "$applications";
	import LoadingOverlay from "$lib/components/overlay/LoadingOverlay.svelte";

	const app = AppState;
	const loading = app.loading;
</script>

<div class="flex h-screen">
	<slot />
</div>

{#if $loading}
	<LoadingOverlay />
{/if}
