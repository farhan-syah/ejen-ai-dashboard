<script lang="ts">
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import { FormControl } from "../controller/form-control";
	export let type: HTMLInputTypeAttribute | undefined | null = "text";
	export let controller: FormControl = new FormControl<string>();
	export let label: string | undefined = undefined;
	export let showErrorCount: number = 1;
	export let onChange: (inputValue: string, input: HTMLInputElement, e: any) => any = (
		inputValue
	) => {
		if (type && ["string", "text", "email", "password"].includes(type)) {
			const trimmed = inputValue.trim();

			if (trimmed == "") {
				controller.writableValue.set(undefined);
			} else controller.writableValue.set(trimmed);
		}
	};
	let required = controller.required;
	let input: HTMLInputElement;

	// Class
	let componentClass = "";
	export { componentClass as class };
	let inputClass = "";
	let labelClass = "";

	$: isFocused = controller.isFocused;
	$: errors = controller.errors;
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

	function handleInput(e: any) {
		onChange(input.value, input, e);
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
	<div class="flex rounded outline {inputClass}">
		<input
			bind:this={input}
			name={controller.name}
			value={controller.writableValue.get() ?? ""}
			id={controller.id}
			class="p-2 text-sm w-full outline-none text-gray600"
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
