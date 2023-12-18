<script lang="ts">
	import { tryParseInt } from "$lib/utils";
	import { FormControl } from "../controller/form-control";
	export let controller: FormControl<number> = new FormControl<number>();
	export let label: string | undefined = undefined;
	export let showErrorCount: number = 1;
	export let onChange: (inputValue: string, input: HTMLInputElement, e: any) => any = (
		inputValue
	) => {
		const value = tryParseInt(inputValue) ?? 0;
		controller.writableValue.set(value);
	};
	export let onKeydown: ((e: KeyboardEvent, input: HTMLInputElement) => any) | undefined =
		undefined;
	let required = controller.required;
	export let input: HTMLInputElement | undefined = undefined;

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let inputClass = "";
	let outlineClass = "";

	let labelClass = "";

	$: isFocused = controller.isFocused;
	$: errors = controller.errors;
	$: hasError = controller.hasError;
	$: touched = controller.touched;
	$: dirty = controller.dirty;
	$: {
		if ($isFocused) {
			outlineClass = "outline-2";
			if ($hasError) {
				outlineClass += " outline-red-500";
			} else {
				outlineClass += " outline-blue-500";
			}
		} else {
			outlineClass = "outline-1";
			if ($hasError) {
				outlineClass += " outline-red-500";
			} else {
				outlineClass += " outline-gray-300";
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

	function handleInput(e: any) {
		if (input) onChange(input.value, input, e);
	}

	function handleKeydown(e: any) {
		if (input)
			if (onKeydown) {
				onKeydown(e, input);
			}
	}
</script>

<div class="text-gray-400 {componentClass}">
	{#if label}
		<div class="mb-1">
			<label for={controller.id} class="flex {labelClass}">
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
	<div class="flex rounded outline {outlineClass}">
		<input
			bind:this={input}
			type="number"
			name={controller.name}
			value={controller.writableValue.get()?.toString() ?? ""}
			id={controller.id}
			class="p-2 text-sm w-full outline-none {inputClass}"
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
			on:input={handleInput}
			on:keydown={handleKeydown}
		/>
	</div>
	<div class="text-red-500 text-xs">
		{#each $errors as error, index}
			{#if index < showErrorCount}
				<div class="mt-1">
					{error}
				</div>
			{/if}
		{/each}
	</div>
</div>
