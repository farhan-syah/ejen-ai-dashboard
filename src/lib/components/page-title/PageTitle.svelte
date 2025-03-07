<script lang="ts">
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";

	import type { BreadcrumbItem } from ".";
	import { IconWithTooltip } from "../icons";
	let componentClass = "";
	export { componentClass as class };

	const toastState = getToastState();

	export let title: string;
	export let id: string | undefined = undefined;
	export let breadcrumbs: BreadcrumbItem[] = [];
</script>

<div class="flex flex-wrap items-center text-gray-800 mb-2 {componentClass}">
	<div class="hidden sm:flex flex-grow items-center gap-1">
		<h1 class="flex items-center gap-1 font-bold">
			{title}
		</h1>
		<div class="flex items-center">
			{#if id}
				<div class="flex items-center">
					<div class="hidden sm:block mr-1">|</div>
					<div class="text-slate-500">
						{id}
					</div>
				</div>
			{/if}
			<div class="flex items-center">
				<div class="ml-1">|</div>
				{#if id}
					<IconWithTooltip
						icon="bx:copy"
						iconClass="text-cyan-600 p-1 text-2xl"
						tooltip="Copy ID"
						onClick={async () => {
							if (id) {
								await navigator.clipboard.writeText(id);
								toastState.add({
									type: "info",
									key: "id",
									message: "ID has been copied"
								});
							}
						}}
					/>
				{/if}
				<IconWithTooltip
					icon="bx:link"
					iconClass="text-blue-600 p-1 text-2xl"
					tooltip="Copy URL"
					onClick={async () => {
						const url = $page.url.toString();
						await navigator.clipboard.writeText(url);
						toastState.add({
							type: "info",
							// key: url,
							message: "URL has been copied"
						});
					}}
				/>
			</div>
		</div>
		<slot name="action" />
	</div>

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
					<iconify-icon icon="tabler:chevron-right" class="text-base mb-0.5"></iconify-icon>
				{/if}
			{/each}
		</div>
	{/if}
</div>
