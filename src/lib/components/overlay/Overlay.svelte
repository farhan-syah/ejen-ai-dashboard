<script lang="ts">
	import { AppState } from "$applications";

	const showOverlay = AppState.showOverlay;
	const device = AppState.layout;
	const isSidebarOpen = AppState.isSidebarOpen;

	function handleClick() {
		isSidebarOpen.set(false);
		showOverlay.set(false);
	}
</script>

{#if $showOverlay}
	<div class="fixed overlay top-0 left-0 h-full flex w-full z-40" on:click|self={handleClick}>
		<div class="m-auto"></div>
	</div>

	<style>
		.overlay {
			background-color: rgb(7, 7, 77);
			opacity: 0.25;
		}
	</style>
{/if}
