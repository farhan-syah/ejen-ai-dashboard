<script lang="ts">
	import { getAppState, UserState } from "$applications";
	import { Overlay } from "$lib/components";
	import Sidebar from "../../layout/sidebar/Sidebar.svelte";
	import TopMenu from "../../layout/top-menu/TopMenu.svelte";
	const appState = getAppState();
	const lockedSidebarPosition = appState.lockedSidebarPosition;
	const isSidebarOpen = appState.isSidebarOpen;

	const user = UserState.user;
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
		<div class="flex-grow overflow-auto main relative w-full">
			<div class="absolute p-2 sm:p-4 w-full">
				<slot />
			</div>
			<!-- {#key $page.url.pathname}
				<div class="absolute p-2 sm:p-4 w-full" in:fly={{ duration: 0, easing: quartIn }}>
					<slot />
				</div>
			{/key} -->
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
