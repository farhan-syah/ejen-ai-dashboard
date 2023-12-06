<script lang="ts">
	import { AppState } from "$applications";
	import { atom } from "nanostores";

	const isSidebarOpen = AppState.isSidebarOpen;
	const layout = AppState.layout;
	const showOverlay = AppState.showOverlay;
	const sidebarClass = atom("");

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
				sidebarClass.set("w-12");
			}
		}
	}
</script>

<div class=" text-slate-50 text-xs z-50 sidemenu transition-all ease-in-out {$sidebarClass}">
	<div class=" bg-indigo-950 h-screen overflow-x-hidden overflow-y-scroll sidebar z-60"></div>
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
		scrollbar-gutter: stable;
	}
	.sidemenu-shadow {
		box-shadow: 2px 0px 6px 0px rgba(30, 27, 75, 0.5);
	}
</style>
