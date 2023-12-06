<script lang="ts">
	import { AppState } from "$applications";
	import Icon from "@iconify/svelte";

	const isSidebarOpen = AppState.isSidebarOpen;
	const layout = AppState.layout;

	function handleDrawerClick() {
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
