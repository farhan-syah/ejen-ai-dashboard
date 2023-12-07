<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import type { SidebarItem } from "./sidebar.config";

	export let sidebarItem: SidebarItem;
	const pattern = new RegExp(`^${sidebarItem.link}`);
	const active = pattern.test($page.url.pathname);
</script>

<a
	href={sidebarItem.link}
	class="group pointer-lighter text-xs w-full px-2 py-1.5 flex items-center gap-1.5 pl-4 hover:text-white {active
		? 'font-semibold text-white'
		: ' text-white/80'}"
>
	{#if sidebarItem.icon}
		<Icon
			icon="bx:radio-circle"
			class="mb-0.25 text-3xs group-hover:text-white  {active
				? 'text-white/80'
				: 'text-white/20 '} "
		></Icon>
	{/if}
	<div class="">
		{sidebarItem.title}
	</div>
</a>
