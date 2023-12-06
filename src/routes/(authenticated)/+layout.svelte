<script lang="ts">
	import { AppState, UserState } from "$applications";
	import { Overlay } from "$lib/components";
	import Sidebar from "../../layout/sidebar/Sidebar.svelte";
	import TopMenu from "../../layout/top-menu/TopMenu.svelte";
	const layout = AppState.layout;
	const user = UserState.user;
</script>

{#if $user}
	<Sidebar />
	<div class="flex flex-col w-full overflow-hidden">
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
