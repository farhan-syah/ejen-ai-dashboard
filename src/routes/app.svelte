<script lang="ts">
	import { createAppState } from "$applications";
	import { createToastState } from "$applications/toast.state";
	import { ErrorOverlay, Toast } from "$lib/components";
	import ConfirmationDialog from "$lib/components/dialog/ConfirmationDialog.svelte";
	import LoadingOverlay from "$lib/components/overlay/LoadingOverlay.svelte";
	import { AuthService } from "$services";
	import { onMount } from "svelte";
	import { flip } from "svelte/animate";

	const appState = createAppState();
	const loading = appState.loading;
	const error = appState.error;
	const toastState = createToastState();
	const toasts = toastState.items;

	onMount(() => {
		appState.width.set(window.innerWidth);
		appState.height.set(window.innerHeight);

		// document.onfullscreenchange = (_e) => {
		// 	console.log(document.fullscreenElement);
		// 	appState.fullScreenElement.set(document.fullscreenElement);
		// };
	});

	function handleResize(_e: any) {
		appState.width.set(window.innerWidth);
		appState.height.set(window.innerHeight);
	}
</script>

<svelte:window
	on:resize={handleResize}
	on:focus={() => {
		AuthService.checkTokenExpiry();
	}}
	on:keydown={(e) => {
		if (e.key === "F11") {
			e.preventDefault();
		}
	}}
	on:fullscreenchange={(e) => {
		appState.fullScreenElement.set(document.fullscreenElement);
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

<ConfirmationDialog />

<div class="fixed bottom-4 right-4 z-10 flex flex-col gap-2">
	{#each Object.values($toasts) as toast, index (toast.key)}
		<div animate:flip={{ duration: 250 }}>
			<Toast {toast} />
		</div>
	{/each}
</div>
