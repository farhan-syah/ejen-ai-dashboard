<script lang="ts">
	import { AppState } from "$applications";
	import { SidebarState } from "$applications/sidebar.state";
	import { atom } from "nanostores";
	import SidebarButton from "./SidebarButton.svelte";

	const isSidebarOpen = AppState.isSidebarOpen;
	const layout = AppState.layout;
	const showOverlay = AppState.showOverlay;
	const sidebarClass = atom("");
	const lockedSidebarPosition = AppState.lockedSidebarPosition;

	$: {
		if ($layout != "desktop") {
			if ($isSidebarOpen) {
				sidebarClass.set("absolute w-52 sidemenu-shadow  translate-x-0");
				showOverlay.set(true);
			} else {
				sidebarClass.set("absolute w-52 -translate-x-52");
				showOverlay.set(false);
			}
		} else {
			showOverlay.set(false);
			if ($isSidebarOpen) {
				sidebarClass.set("w-52");
			} else {
				sidebarClass.set("w-8");
			}
		}
	}

	const sidebarItems = SidebarState.sidebarItems;

	function handleMouseOver() {
		if ($layout === "desktop" && !$isSidebarOpen) {
			isSidebarOpen.set(true);
		}
	}

	function handleMouseLeave() {
		if ($layout === "desktop" && $isSidebarOpen && $lockedSidebarPosition != "open") {
			isSidebarOpen.set(false);
		}
	}
</script>

<div
	role="none"
	class=" text-slate-50 text-sm z-50 sidemenu transition-all ease-in-out {$sidebarClass} "
	on:mouseover={handleMouseOver}
	on:mouseleave={handleMouseLeave}
	on:focus
>
	<div class=" bg-indigo-950 h-screen overflow-x-hidden sidebar z-60">
		{#each $sidebarItems as sidebarItem}
			<SidebarButton {sidebarItem}></SidebarButton>
		{/each}
	</div>
</div>

<style>
	/* Hiding scrollbar for Chrome, Safari and Opera */
	.sidebar::-webkit-scrollbar {
		display: none;
	}
	.sidebar:hover::-webkit-scrollbar {
		display: inherit;
		width: 6px;
		background-color: transparent;
	}
	.sidebar::-webkit-scrollbar-thumb {
		background-color: rgba(207, 202, 211, 0.5);
		border-radius: 24px;
	}
	.sidebar::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0.1);
	}
	.sidebar {
		scrollbar-width: thin;
		scrollbar-color: white;
		-ms-overflow-style: none;
	}
	.sidemenu-shadow {
		box-shadow: 2px 0px 6px 0px rgba(30, 27, 75, 0.5);
	}
</style>
