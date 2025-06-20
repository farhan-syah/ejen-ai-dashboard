<script lang="ts">
	import { tryParseNum } from "$lib/utils";
	import { FormControl } from "../controller/form-control";

	export let controller: FormControl<number> = new FormControl<number>();

	export let label: string | undefined = undefined;
	export let showErrorCount: number = 1;
	export let disabled: boolean = false;
	export let decimalPlaces: number = 0;
	export let allowNegativeValue: boolean = false;
	export let onChange: (value: string, input: HTMLInputElement, event: any) => any = (
		inputValue
	) => {
		const el = controller.el as HTMLInputElement;
		if (inputValue != "") {
			const regexPattern = allowNegativeValue
				? `^-?\\d*(\\.\\d{0,${decimalPlaces}})?$`
				: `^\\d*(\\.\\d{0,${decimalPlaces}})?$`;

			const regex: RegExp = new RegExp(regexPattern);
			const validInput = regex.test(inputValue);

			if (validInput) {
				controller.writableValue.set(tryParseNum(inputValue));
			} else {
				el.value = controller.value?.toString() ?? "";
			}
		} else {
			controller.writableValue.set(undefined);
		}
	};
	export let onKeydown: ((e: KeyboardEvent, controller: FormControl) => any) | undefined = (e) => {
		if (e.key === "e" || e.key === "+") e.preventDefault();
		const el = controller.el as HTMLInputElement;
		if (decimalPlaces < 1) {
			if (e.key === ".") e.preventDefault();
		}

		if (e.key === "-") {
			if (el.value.includes("-") || !allowNegativeValue) e.preventDefault();

			if (controller.value != undefined) {
				if (el.value == "") {
					e.preventDefault();
				}
			}
		}
	};
	let required = controller.required;

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
		const el = controller.el as HTMLInputElement;
		onChange(el.value, el, e);
	}

	function handleKeydown(e: any) {
		if (onKeydown) {
			onKeydown(e, controller);
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
			bind:this={controller.el}
			{disabled}
			type="number"
			name={controller.name}
			value={controller.writableValue.get()?.toString() ?? ""}
			id={controller.id}
			class="p-2 text-sm w-full outline-hidden {inputClass}"
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
