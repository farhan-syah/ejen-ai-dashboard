<script lang="ts">
	import { AppState, UserState } from "$applications";
	import { SidebarState } from "$applications/sidebar.state";
	import { Overlay } from "$lib/components";
	import Sidebar from "../../layout/sidebar/Sidebar.svelte";
	import TopMenu from "../../layout/top-menu/TopMenu.svelte";
	const lockedSidebarPosition = AppState.lockedSidebarPosition;
	const isSidebarOpen = AppState.isSidebarOpen;
	const user = UserState.user;
	SidebarState;
</script>

{#if $user}
	<Sidebar />
	<div
		class="flex flex-col w-full overflow-hidden {$lockedSidebarPosition === 'close' &&
		$isSidebarOpen
			? 'ml-8'
			: ''}"
	>
		<TopMenu />
		<div class="flex-grow overflow-auto main">
			<slot />
		</div>
	</div>
{/if}

<Overlay />

<style>
	.main {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.main::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
