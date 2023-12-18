<script lang="ts">
	import { getAppState } from "$applications";
	import Icon from "@iconify/svelte";
	const appState = getAppState();
	const isSidebarOpen = appState.isSidebarOpen;
	const layout = appState.layout;
	const lockedSidebarPosition = appState.lockedSidebarPosition;

	function handleDrawerClick() {
		if ($layout == "desktop") {
			if ($isSidebarOpen) {
				lockedSidebarPosition.set("close");
			} else {
				lockedSidebarPosition.set("open");
			}
		}
		isSidebarOpen.set(!$isSidebarOpen);
	}
</script>

<div
	class="p-1.5 pointer"
	on:click={handleDrawerClick}
	on:keydown={handleDrawerClick}
	role="button"
	tabindex="0"
>
	<Icon icon={$isSidebarOpen ? "bx:x" : "bx:menu"} class="text-2xl text-black "></Icon>
</div>
