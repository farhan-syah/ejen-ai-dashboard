<script lang="ts">
	import { AppState } from "$applications";
	import { ErrorOverlay } from "$lib/components";
	import LoadingOverlay from "$lib/components/overlay/LoadingOverlay.svelte";

	const app = AppState;
	const loading = app.loading;
	const error = app.error;
</script>

<div class="flex h-screen">
	<slot />
</div>

{#if $loading}
	<LoadingOverlay />
{/if}

{#if $error}
	<ErrorOverlay />
{/if}
