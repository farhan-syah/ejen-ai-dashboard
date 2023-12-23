<script lang="ts">
	import { getAppState } from "$applications";
	import { createSidebarState } from "$applications/sidebar.state";
	import { atom } from "nanostores";
	import RoleSelector from "./RoleSelector.svelte";
	import SidebarButton from "./SidebarButton.svelte";
	import { commonSidebarItems } from "./sidebar.config";

	const appState = getAppState();
	const isSidebarOpen = appState.isSidebarOpen;
	const layout = appState.layout;
	const showOverlay = appState.showOverlay;
	const sidebarClass = atom("");
	const lockedSidebarPosition = appState.lockedSidebarPosition;

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
			if ($lockedSidebarPosition == "close") {
				if ($isSidebarOpen) {
					sidebarClass.set("absolute w-52 sidemenu-shadow");
				} else {
					sidebarClass.set("w-8");
				}
			} else {
				if ($isSidebarOpen) {
					sidebarClass.set(" w-52");
				} else {
					sidebarClass.set("w-8");
				}
			}
		}
	}
	const sidebarState = createSidebarState();
	const sidebarItems = sidebarState.sidebarItems;

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
	<div class=" bg-indigo-950 h-screen overflow-x-hidden sidebar z-60 text-white/80">
		<RoleSelector />
		{#key $sidebarItems}
			{#each $sidebarItems as sidebarItem}
				<SidebarButton {sidebarItem}></SidebarButton>
			{/each}
		{/key}

		<div class=" px-2">
			<div class="my-2 w-full h-0.25 bg-white/20"></div>
		</div>
		{#each commonSidebarItems as sidebarItem}
			<SidebarButton {sidebarItem}></SidebarButton>
		{/each}
	</div>
</div>

<style>
	/* Hiding scrollbar for Chrome, Safari and Opera */

	.sidebar {
		background-color: rgb(9, 0, 50);
	}
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
		box-shadow: 2px 0px 6px 0px rgba(40, 36, 88, 0.5);
	}
</style>
