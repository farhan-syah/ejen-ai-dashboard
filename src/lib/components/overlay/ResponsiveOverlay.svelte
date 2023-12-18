<script lang="ts">
	import { getAppState } from "$applications";

	const appState = getAppState();
	const showOverlay = appState.showOverlay;
	const isSidebarOpen = appState.isSidebarOpen;

	function handleClick() {
		isSidebarOpen.set(false);
		showOverlay.set(false);
	}
</script>

{#if $showOverlay}
	<div
		class="fixed overlay top-0 left-0 h-full flex w-full z-40"
		on:click={handleClick}
		on:keydown
		role="none"
	>
		<div class="m-auto"></div>
	</div>
{/if}

<style>
	.overlay {
		background-color: rgb(7, 7, 77, 0.25);
	}
</style>
