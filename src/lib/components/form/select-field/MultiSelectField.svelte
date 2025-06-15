<script lang="ts">
	import { Popper } from "$lib/components";
	import type { FieldOption } from "$types";

	import type { ModifierPhases } from "@popperjs/core";
	import { atom } from "nanostores";
	import type { PopperOptions } from "svelte-popperjs";
	import { FormControl } from "../controller/form-control";

	type T = $$Generic;

	export let controller: FormControl<FieldOption<T>[]> = new FormControl<FieldOption<T>[]>();
	export let label: string | undefined = undefined;
	export let options: readonly FieldOption<T>[] = [];
	export let placeholder: string = "Select";

	export let valueTransform: (value?: readonly FieldOption<T>[] | null) => string | undefined = (
		value
	) => undefined;

	let required = controller.required;
	let inputClass = "";
	let labelClass = "";

	$: values = controller.writableValue;
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

	function handleSelect(option: FieldOption<T>) {
		const currentValues: FieldOption<T>[] = controller.writableValue.get() ?? [];

		const index = currentValues.findIndex(
			(v) => v.value == option.value && v.label == option.label
		);

		currentValues[index].selected = !currentValues[index].selected;
		controller.writableValue.set([...currentValues]);
	}

	$: isSelected = (index: number) => {
		const selected = $values ? $values[index].selected : false;
		return selected;
	};

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

	const isOpen = atom(false);
	const focusIndex = atom<number | undefined>(undefined);
</script>

<div class=" text-gray-400 {$$props.class ?? ''}">
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
		class=" outline-none"
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
		on:keydown={(e) => {
			if (!$isOpen) {
				if (e.key === "Enter") {
					isOpen.set(true);
				}
			} else if ($isOpen) {
				if (e.key === "Tab") {
					e.preventDefault();
				}
				if (e.key === "ArrowDown") {
					if ($focusIndex === undefined) {
						focusIndex.set(0);
					} else if ($focusIndex < options.length - 1) {
						focusIndex.set($focusIndex + 1);
					}
				}
				if (e.key === "ArrowUp") {
					if ($focusIndex === undefined) {
						focusIndex.set(options.length - 1);
					} else if ($focusIndex > 0) {
						focusIndex.set($focusIndex - 1);
					}
				}
				if (e.key === "Enter") {
					if ($focusIndex != undefined) {
						const option = options[$focusIndex];
						handleSelect(option);
					}
				}
			} else {
			}
		}}
	>
		<Popper bind:isOpen={$isOpen} {popperOptions}>
			<!-- Main Component -->
			<div slot="main" class="flex rounded outline p-2 cursor-pointer {inputClass}">
				<div>{valueTransform($values) ?? placeholder}</div>
			</div>
			<!-- Popper Component -->

			<div slot="content" class="cursor-pointer mt-1.5" role="dialog">
				<div class=" shadow-lg border">
					{#each options as option, i}
						<div
							class="flex px-2 py-1.5 w-full items-center {$focusIndex === i
								? 'outline outline-2 outline-blue-300 rounded bg-blue-50 text-blue-500'
								: 'border-b outline-0 bg-white text-gray-400'} "
							on:click={() => handleSelect(option)}
							on:mouseover={() => {
								focusIndex.set(i);
							}}
							on:focus={() => {}}
							on:keydown={() => {}}
							role="option"
							aria-selected={$values == option.value}
							tabindex="-1"
						>
							<div class="flex-grow">
								{option.label ?? option.value}
							</div>
							{#if isSelected(i)}
								<div class="text-lg -m-1 text-green-500">
									<iconify-icon icon="bx:check"></iconify-icon>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</Popper>
	</div>
</div>
