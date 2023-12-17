<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { writable } from "svelte/store";
	import type { SidebarItem } from "./sidebar.config";

	export let sidebarItem: SidebarItem;
	const pattern = sidebarItem.regexp ?? new RegExp(`^${sidebarItem.link}`);
	const isActive = writable<boolean>(false);

	page.subscribe(({ url }) => {
		const isValid = pattern.test(url.pathname);

		if (isValid != $isActive) {
			isActive.set(isValid);
		}
	});
</script>

<a
	href={sidebarItem.link}
	class="group pointer-lighter text-ss w-full px-2 py-1.5 flex items-center gap-1.5 pl-4 hover:text-white {$isActive
		? 'font-semibold text-white'
		: ' text-white/80'}"
	on:click={() => {
		// SidebarState.refresh();
	}}
>
	<Icon
		icon="bx:radio-circle"
		class="mb-0.25 text-3xs group-hover:text-white  {$isActive
			? 'text-white/80'
			: 'text-white/20 '} "
	></Icon>
	<div class="">
		{sidebarItem.title}
	</div>
</a>
