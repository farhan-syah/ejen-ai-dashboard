<script lang="ts">
	import { Link } from "$lib/components";

	import type { ProfileMenuItem } from "./profile-menu";

	export let item: ProfileMenuItem;
</script>

<Link link={item.link} class="flex gap-2 px-1.5 py-2 pointer " onClick={item.onclick}>
	{#if item.icon}
		<iconify-icon icon={item.icon} class="text-lg flex items-center ml-1"></iconify-icon>
	{/if}
	{item.label}
</Link>
