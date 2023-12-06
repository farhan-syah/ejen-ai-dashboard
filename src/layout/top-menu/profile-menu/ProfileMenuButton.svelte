<script lang="ts">
	import { Link } from "$lib/components";
	import Icon from "@iconify/svelte";
	import type { ProfileMenuItem } from "./profile-menu";

	export let item: ProfileMenuItem;
</script>

<Link link={item.link} class="flex gap-2 px-1.5 py-2 pointer ">
	{#if item.icon}
		<Icon icon={item.icon} class="text-lg flex items-center ml-1"></Icon>
	{/if}
	{item.label}
</Link>
