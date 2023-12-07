<script lang="ts">
	import { page } from "$app/stores";
	import { AppState } from "$applications";
	import Icon from "@iconify/svelte";
	import SidebarChildButton from "./SidebarChildButton.svelte";
	import type { SidebarItem } from "./sidebar.config";

	export let sidebarItem: SidebarItem;
	const childItems = sidebarItem.items;
	const pattern = new RegExp(`^${sidebarItem.link}`);
	const active = pattern.test($page.url.pathname);
	const activeClass = sidebarItem.isParent && active ? "bg-indigo-200/15" : "";
	const isOpen = sidebarItem.isOpen;

	if (isOpen && active) {
		isOpen.set(true);
	}

	function handleClick() {
		if (isOpen != null) {
			isOpen.set(!$isOpen);
		}
	}

	const isSidebarOpen = AppState.isSidebarOpen;
	const layout = AppState.layout;
</script>

{#if $layout === "desktop" && !$isSidebarOpen}
	{#if sidebarItem.icon}
		<div class=" px-2 py-1.5">
			<Icon icon={sidebarItem.icon}></Icon>
		</div>
	{/if}
{:else if childItems && childItems.length > 0}
	<div
		class="pointer-lighter w-full px-2 py-1.5 flex items-center gap-1.5 {activeClass}"
		on:click={handleClick}
		on:keydown={handleClick}
		role="menu"
		tabindex="-1"
	>
		{#if sidebarItem.icon}
			<Icon icon={sidebarItem.icon} class=""></Icon>
		{/if}
		<div class="pt-0.5 flex-grow">
			{sidebarItem.title}
		</div>
		{#if childItems && childItems.length > 0 && isOpen}
			<Icon icon="bx:chevron-right" class="transition text-xl {$isOpen ? 'rotate-90' : ''}" />
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
		class="pointer-lighter w-full px-2 py-1.5 flex items-center gap-1.5 {activeClass}"
		tabindex="-1"
	>
		{#if sidebarItem.icon}
			<Icon icon={sidebarItem.icon} class=""></Icon>
		{/if}
		<div class="pt-0.5 flex-grow">
			{sidebarItem.title}
		</div>
	</a>
{/if}
