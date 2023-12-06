<script lang="ts">
	import { AppState } from "$applications";
	import { ErrorOverlay } from "$lib/components";
	import LoadingOverlay from "$lib/components/overlay/LoadingOverlay.svelte";
	import { onMount } from "svelte";

	const app = AppState;
	const loading = app.loading;
	const error = app.error;

	onMount(() => {
		app.width.set(window.innerWidth);
		app.height.set(window.innerHeight);
		// document.onfullscreenchange = (_e) => {
		// 	console.log(document.fullscreenElement);
		// 	AppState.fullScreenElement.set(document.fullscreenElement);
		// };
	});

	function handleResize(_e: any) {
		app.width.set(window.innerWidth);
		app.height.set(window.innerHeight);
	}
</script>

<svelte:window
	on:resize={handleResize}
	on:keydown={(e) => {
		console.log(e.key);
		if (e.key === "F11") {
			e.preventDefault();
		}
	}}
	on:fullscreenchange={(e) => {
		AppState.fullScreenElement.set(document.fullscreenElement);
	}}
/>

<div class="flex h-screen">
	<slot />
</div>

{#if $loading}
	<LoadingOverlay />
{/if}

{#if $error}
	<ErrorOverlay />
{/if}
