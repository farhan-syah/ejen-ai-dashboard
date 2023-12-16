<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { BreadcrumbItem } from ".";

	export let title: string;
	export let breadcrumbs: BreadcrumbItem[] = [];
</script>

<div class="flex text-gray-800 items-center">
	<h1 class="flex-grow text-base font-bold">{title}</h1>

	{#if breadcrumbs.length > 0}
		<div class="flex items-center -ml-1.5 mt-1 text-sm">
			{#each breadcrumbs as breadcrumb, i}
				<div class="cursor-default {breadcrumb.currentPage ? 'font-semibold ' : ''}">
					{#if breadcrumb.path}
						<a class="pointer px-1.5 py-0.5 hover:text-blue-600" href={breadcrumb.path}>
							{breadcrumb.label}
						</a>
					{:else}
						<div class="px-1.5 py-0.5">{breadcrumb.label}</div>
					{/if}
				</div>

				{#if i < breadcrumbs.length - 1}
					<Icon icon="tabler:chevron-right" class="text-base mb-0.5 "></Icon>
				{/if}
			{/each}
		</div>
	{/if}
</div>
