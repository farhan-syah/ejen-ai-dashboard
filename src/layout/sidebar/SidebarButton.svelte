<script lang="ts">
	import { page } from "$app/stores";
	import { getAppState } from "$applications";
	import { writable } from "svelte/store";
	import SidebarChildButton from "./SidebarChildButton.svelte";
	import type { SidebarItem } from "./sidebar.config";
	export let sidebarItem: SidebarItem;
	const childItems = sidebarItem.items;
	const pattern = RegExp(`^${sidebarItem.link}`);
	const active = writable<boolean>(false);
	const isOpen = sidebarItem.isOpen;

	page.subscribe(({ url }) => {
		active.set(pattern.test(url.pathname));
	});

	if (isOpen && $active) {
		isOpen.set(true);
	}

	function handleClick() {
		if (isOpen != null) {
			isOpen.set(!$isOpen);
		}
	}
	const appState = getAppState();
	const isSidebarOpen = appState.isSidebarOpen;
	const layout = appState.layout;
</script>

{#if $layout === "desktop" && !$isSidebarOpen}
	{#if sidebarItem.icon}
		<div class=" px-2 py-1.5">
			<iconify-icon icon={sidebarItem.icon} class="text-base"></iconify-icon>
		</div>
	{/if}
{:else if childItems && childItems.length > 0}
	<div
		class="pointer-lighter w-full px-2 py-1.5 flex items-center gap-1.5 hover:text-white {$active
			? 'text-white bg-indigo-200/10'
			: ''}"
		on:click={handleClick}
		on:keydown={handleClick}
		role="menu"
		tabindex="-1"
	>
		{#if sidebarItem.icon}
			<iconify-icon icon={sidebarItem.icon} class="text-base {$active ? 'text-white' : ''}"
			></iconify-icon>
		{/if}
		<div class="pt-0.5 flex-grow">
			{sidebarItem.title}
		</div>
		{#if childItems && childItems.length > 0 && isOpen}
			<iconify-icon icon="bx:chevron-right" class="transition text-xl {$isOpen ? 'rotate-90' : ''}"
			></iconify-icon>
		{/if}
	</div>

	{#if isOpen && $isOpen}
		{#each childItems as sidebarItem}
			<SidebarChildButton {sidebarItem}></SidebarChildButton>
		{/each}
	{/if}
{:else}
	<a
		href={sidebarItem.link}
		class="pointer-lighter w-full px-2 py-1.5 flex items-center gap-1.5 hover:text-white {$active
			? 'text-white bg-indigo-200/10'
			: 'text-white/80'}"
		tabindex="-1"
	>
		{#if sidebarItem.icon}
			<iconify-icon
				icon={sidebarItem.icon}
				class="text-base group-hover:text-white {$active ? 'text-white' : ''}"
			></iconify-icon>
		{/if}
		<div class="pt-0.5 flex-grow">
			{sidebarItem.title}
		</div>
	</a>
{/if}
