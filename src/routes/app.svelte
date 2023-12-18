<script lang="ts">
	import { AppState } from "$applications";
	import { ToastState } from "$applications/toast.state";
	import { ErrorOverlay, Toast } from "$lib/components";
	import LoadingOverlay from "$lib/components/overlay/LoadingOverlay.svelte";
	import { onMount } from "svelte";
	import { flip } from "svelte/animate";

	const app = AppState;
	const loading = app.loading;
	const error = app.error;
	const toasts = ToastState.items;

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

<div class="fixed top-2 right-2 z-10 flex flex-col gap-2">
	{#each Object.values($toasts) as toast, index (toast.key)}
		<div animate:flip={{ duration: 250 }}>
			<Toast {toast} />
		</div>
	{/each}
</div>
