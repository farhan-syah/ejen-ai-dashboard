<script lang="ts">
	import Icon from "@iconify/svelte";

	import { delay } from "$lib/utils";

	import { Popper } from "$lib/components";
	import type { ModifierPhases } from "@popperjs/core";
	import { atom } from "nanostores";
	import type { PopperOptions } from "svelte-popperjs";
	import { FormControl } from "../controller/form-control";

	type T = $$Generic;

	export let controller: FormControl<Array<T>> = new FormControl<Array<T>>();
	export let label: string | undefined = undefined;
	export let placeholder: string = "Select";
	export let searchPlaceholder: string = "Search";
	export let inputMinCharLength: number = -1;
	export let showSearchPlaceholder = false;
	export let searchDelay: number = showSearchPlaceholder ? 200 : 0;
	export let onSearch: (input: string) => Promise<Array<T>> = async () => {
		return [];
	};
	export let transformResult: ((result: T) => string) | undefined = undefined;
	export let transformSelectedItem: ((selectedItem: T) => string) | undefined = undefined;
	// Bindings
	let filterString = "";
	// Class
	let componentClass = "";
	export { componentClass as class };
	let required = controller.required;
	let inputClass = "";
	let labelClass = "";

	// State

	const searchResults = atom<T[]>([]);
	const isSearching = atom(false);
	const searchError = atom<string | undefined>();
	const selectedItems = controller.writableValue;

	$: isFocused = controller.isFocused;
	$: hasError = controller.hasError;
	$: touched = controller.touched;
	$: dirty = controller.dirty;
	$: {
		if ($isFocused) {
			inputClass = "outline-2";
			if ($hasError) {
				inputClass += " outline-red-500";
			} else {
				inputClass += " outline-blue-500";
			}
		} else {
			inputClass = "outline-1";
			if ($hasError) {
				inputClass += " outline-red-500";
			} else {
				inputClass += " outline-gray-300";
			}
		}
	}

	$: {
		if ($isFocused) {
			labelClass = "";
			if ($hasError) {
				labelClass += " text-red-500";
			} else {
				labelClass += " text-blue-500";
			}
		} else {
			labelClass = "";
			if ($hasError) {
				labelClass += " text-red-500";
			} else {
				labelClass += " text-gray-500";
			}
		}
	}

	//  Popper

	const popperOptions: PopperOptions<any> = {
		modifiers: [
			{
				name: "widthModifier",
				enabled: true,
				phase: "beforeWrite" as ModifierPhases,
				requires: ["computeStyles"],
				fn: ({ state }: any) => {
					state.styles.popper.width = `${state.rects.reference.width}px`;
				}
			}
		]
	};

	const isOpen = atom(true);
	isOpen.subscribe((value) => {
		if (value) {
			handleInput();
		}
	});

	// Handlers

	function handleSelect(result: T) {
		const currentValue = controller.writableValue.get() ?? [];
		const newValue = [...currentValue, result];
		controller.writableValue.set(newValue);
		handleReset();
	}

	function handleReset() {
		isOpen.set(false);
	}

	async function handleInput() {
		if (filterString.length > inputMinCharLength) {
			if (!$isSearching) {
				isSearching.set(true);
				let result: T[];
				[result] = await Promise.all([
					onSearch(filterString)
						.then((res) => {
							searchError.set(undefined);
							return res;
						})
						.catch((e) => {
							searchError.set(e.data.message ?? e.data.error ?? "Error");
							return [];
						}),
					delay(searchDelay)
				]);
				searchResults.set(result);

				isSearching.set(false);
			}
		}
	}

	function handleRemoveSelectedItem(index: number) {
		const currentValue = controller.writableValue.get() ?? [];
		currentValue.splice(index, 1);
		const newValue = [...currentValue];
		controller.writableValue.set(newValue);
	}
</script>

<div class=" text-gray-400 {componentClass}">
	{#if label}
		<div class="mb-1">
			<label class="flex {labelClass}">
				<div class="flex-grow">
					{label}
					{#if required}
						<span class="text-red-500">*</span>
					{/if}
				</div>

				{#if $$slots.labelPostfix}
					<slot name="labelPostfix" />
				{/if}
			</label>
		</div>
	{/if}
	<div
		id={controller.id}
		role="listbox"
		tabindex="0"
		class="outline-none"
		on:focus={() => {
			isFocused.set(true);
			if (!$touched) {
				touched.set(true);
			}
		}}
		on:blur={() => {
			isFocused.set(false);
			if ($touched && !$dirty) {
				dirty.set(true);
			}
			controller.validate();
		}}
	>
		<Popper bind:isOpen={$isOpen} {popperOptions}>
			<!-- Main Component -->
			<div
				slot="main"
				class="flex flex-wrap gap-2 items-center rounded outline p-2 cursor-pointer {inputClass}"
			>
				{#if $selectedItems && $selectedItems.length > 0}
					<div class="flex flex-wrap gap-2">
						{#each $selectedItems as selectedItem, index}
							{#if $$slots.selectedItem}
								<slot name="selectedItem" {selectedItem} />
							{:else}
								<div class="flex gap-1 rounded items-center bg-slate-100 px-1 py-0.5 -m-0.5">
									<div class="text-slate-700">
										{transformSelectedItem ? transformSelectedItem(selectedItem) : selectedItem}
									</div>
									<div
										class=" bg-slate-300 hover:bg-slate-500 text-white rounded text-base"
										role="none"
										on:click={(e) => {
											e.stopPropagation();
											handleRemoveSelectedItem(index);
										}}
									>
										<Icon icon="bx:x"></Icon>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{:else}
					{placeholder}
				{/if}
			</div>
			<!-- Popper Component -->
			<div slot="content" class="cursor-pointer bg-white mt-1.5" role="dialog">
				<div class=" shadow-lg rounded border">
					<!-- Search Box -->
					<input
						placeholder={searchPlaceholder}
						bind:value={filterString}
						class="text-blue-700/70 text-sm w-full px-1.5 py-1 rounded-t focus:outline-none border-b-2 border-blue-100 {inputClass}"
						on:input={handleInput}
					/>
					<!-- Search Results -->
					{#each $searchResults as result}
						<div
							role="option"
							aria-selected="false"
							class="px-1.5 py-1 hover:bg-blue-50 hover:text-blue-500"
							on:click={() => {
								handleSelect(result);
							}}
							on:keydown={(e) => {
								if (e.key === "Enter") {
									handleSelect(result);
								}
							}}
							tabindex="0"
						>
							{#if $$slots.result}
								<slot name="result" {result} />
							{:else}
								{transformResult ? transformResult(result) : result}
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</Popper>
	</div>
</div>

<style lang="postcss">
	::placeholder {
		@apply text-blue-700/30;
	}

	::-ms-input-placeholder {
		/* Edge 12 -18 */
		color: red;
	}
</style>
