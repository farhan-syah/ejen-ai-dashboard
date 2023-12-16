<script lang="ts">
	import Icon from "@iconify/svelte";
	import { getTableContext } from ".";
	import { FormControl } from "../form";
	import TextField from "../form/text-field/TextField.svelte";

	const context = getTableContext();

	let start = context.start;
	let end = context.end;
	let currentPage = context.currentPage;
	let maxPage = context.maxPage;
	let total = context.total;

	let active = "";
	let inactive = "waves-light text-gray-200";

	const pageController = new FormControl<number>({ name: "page", value: 1 });

	function handleKeyup(e: KeyboardEvent) {
		if (e.key === "Enter" && typeof pageController.value === "number") {
			let newPage = context.goToPage(pageController.value);
			pageController.writableValue.set(newPage);
		}
	}
</script>

{#if $total > 0}
	<div class="flex items-center mt-3 text-gray-500">
		<div class="flex-auto inline-flex">
			Showing {$start} to {$end}
			{#if total}
				<div class="ml-2">of {$total} entries</div>
			{/if}
		</div>
		<div class="mr-2">Page</div>
		<div class="mr-2 w-10 text-center">
			<TextField control={pageController} onKeyup={handleKeyup} inputClass="p-0.5 text-center" />
		</div>
		<div class="mr-5">of {$maxPage}</div>
		<div class="flex items-center text-2xl">
			<div
				role="button"
				tabindex="-1"
				class=" waves-effect"
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
