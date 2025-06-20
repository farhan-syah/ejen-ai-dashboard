<script lang="ts">
	import { Popover } from "bits-ui";

	import { asyncDebounce, deepEqual } from "$lib/utils";

	import { atom } from "nanostores";
	import { FormControl } from "../controller/form-control";

	type T = $$Generic;

	export let controller: FormControl<Array<T>> = new FormControl<Array<T>>();
	export let label: string | undefined = undefined;
	export let placeholder: string = "Select";
	export let searchPlaceholder: string = "Search";
	export let inputMinCharLength: number = -1;
	export let disabled = false;
	export let onSearch: (input?: string) => Promise<Array<T>> = async () => {
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

	const isOpen = atom(false);
	isOpen.subscribe(async (value) => {
		if (value) {
			const result = await onSearch(filterString);
			if (result) {
				searchResults.set(result);
			}
		}
	});

	// Handlers

	function handleSelect(result: T) {
		const currentValue = controller.writableValue.get() ?? [];

		if (
			!currentValue.some((value) => {
				return deepEqual(value, result);
			})
		) {
			const newValue = [...currentValue, result];
			controller.writableValue.set(newValue);
			filterString = "";
		}
		isOpen.set(false);
	}

	const debounceSearch = asyncDebounce(onSearch, 500);

	async function handleInput() {
		if (filterString.length > inputMinCharLength) {
			const result = await debounceSearch(filterString);
			if (result) {
				searchResults.set(result);
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
		class="outline-hidden"
		on:focus={() => {
			if (!disabled) {
				isFocused.set(true);
				if (!$touched) {
					touched.set(true);
				}
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
		<Popover.Root bind:open={$isOpen}>
			<Popover.Trigger {disabled} class="w-full">
				<div
					class="flex flex-wrap gap-2 items-center rounded outline p-2 {disabled
						? 'bg-gray-50'
						: ''} {inputClass}"
				>
					{#if $selectedItems && $selectedItems.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each $selectedItems as selectedItem, index}
								{#if $$slots.selectedItem}
									<slot name="selectedItem" {selectedItem} />
								{:else}
									<div class="flex gap-1 rounded items-center bg-slate-100 px-1 py-0.5 -m-0.5">
										<div class={disabled ? "text-gray-400" : "text-slate-700"}>
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
											{#if !disabled}
												<iconify-icon icon="bx:x"></iconify-icon>
											{/if}
										</div>
									</div>
								{/if}
							{/each}
						</div>
					{:else}
						{placeholder}
					{/if}
				</div>
			</Popover.Trigger>
			<!-- <Popover.Content
				transition={fly}
				transitionConfig={{ duration: 100, delay: 0 }}
				sameWidth
				class="cursor-pointer bg-white mt-1.5 w-full"
			> -->
			<Popover.Content class="cursor-pointer bg-white mt-1.5 w-full">
				<div class="w-full shadow-lg rounded border">
					<input
						placeholder={searchPlaceholder}
						bind:value={filterString}
						class="text-blue-700/70 text-sm w-full px-1.5 py-1 rounded-t focus:outline-hidden border-b-2 border-blue-100 {inputClass}"
						on:input={handleInput}
					/>
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
			</Popover.Content>
		</Popover.Root>
	</div>
</div>

<style lang="postcss">
	::placeholder {
		/* @apply text-blue-700/30; */
	}

	::-ms-input-placeholder {
		/* Edge 12 -18 */
		color: red;
	}
</style>
