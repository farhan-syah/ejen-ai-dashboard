<script lang="ts">
	import Icon from "@iconify/svelte";
	import { getTableContext } from ".";
	import { FormControl, NumField } from "..";

	const context = getTableContext();

	let start = context.start;
	let end = context.end;
	let currentPage = context.currentPage;
	let maxPage = context.maxPage;
	let total = context.total;

	let active = "";
	let inactive = "waves-light text-gray-200";

	const pageController = new FormControl<number>({ name: "page", value: 1 });

	function handleKeydown(e: KeyboardEvent, input: HTMLInputElement) {
		if (e.key === ".") e.preventDefault();
		if (e.key === "Enter" && typeof pageController.value === "number") {
			let newPage = context.goToPage(pageController.value);
			input.value = newPage.toString();
		}
	}
	let input: HTMLInputElement | undefined;

	currentPage.subscribe((currentPage) => {
		if (input) {
			input.value = currentPage.toString();
		}
	});
</script>

{#if $total > 0}
	<div class="flex items-center mt-3 text-gray-500">
		<div class="flex-auto inline-flex">
			Showing {$start} to {$end}
			{#if total}
				<div class="ml-1">of {$total} entries</div>
			{/if}
		</div>
		<div class="mr-2">Page</div>
		<div class="mr-2 w-10 text-center">
			<NumField
				controller={pageController}
				bind:input
				onKeydown={handleKeydown}
				inputClass=" text-xs py-0.5 px-0.5 text-center "
			/>
		</div>
		<div class="mr-3">of {$maxPage}</div>
		<div class="flex items-center text-2xl">
			<div
				role="button"
				tabindex="-1"
				class="pointer"
				on:click={() => {
					context.goToFirstPage();
				}}
				on:keypress={() => {
					context.goToFirstPage();
				}}
			>
				<Icon icon="mdi:page-first" />
			</div>
			<div
				role="button"
				tabindex="-1"
				class=" pointer {$currentPage > 1 ? active : inactive} "
				on:click={() => {
					context.goToPreviousPage();
				}}
				on:keypress={() => {
					context.goToPreviousPage();
				}}
			>
				<Icon icon="mdi:chevron-left" />
			</div>
			<div
				role="button"
				tabindex="-1"
				class=" pointer {$currentPage < $maxPage ? active : inactive} "
				on:click={() => {
					context.goToNextPage();
				}}
				on:keypress={() => {
					context.goToNextPage();
				}}
			>
				<Icon icon="mdi:chevron-right" />
			</div>
			<div
				role="button"
				tabindex="-1"
				class="pointer"
				on:click={() => {
					context.goToLastPage();
				}}
				on:keypress={() => {
					context.goToLastPage();
				}}
			>
				<Icon icon="mdi:page-last" />
			</div>
		</div>
	</div>
{/if}
