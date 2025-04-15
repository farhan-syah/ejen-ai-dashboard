<script lang="ts">
	import { PUBLIC_ENV } from "$env/static/public";

	import type { FullAutoFill, HTMLInputTypeAttribute } from "svelte/elements";
	import { FormControl } from "../controller/form-control";
	import { atom } from "nanostores";
	export let type: HTMLInputTypeAttribute | undefined | null = "text";
	export let controller: FormControl = new FormControl<string>();
	export let label: string | undefined = undefined;
	export let showErrorCount: number = 1;
	export let disabled: boolean = false;
	export let autocomplete: FullAutoFill = "off";
	export let allowKeys: RegExp | "lettersOnly" | "numbersOnly" | undefined = undefined;
	export let specialKeys: string[] = [
		"Tab",
		"ArrowUp",
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"Backspace",
		"Delete",
		"Home",
		"End",
		" "
	];
	export let preventKeys: string[] = [];
	export let onKeydown: ((e: KeyboardEvent, controller: FormControl) => any) | undefined =
		undefined;
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

	// Class
	let componentClass = "";
	export { componentClass as class };
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

	function handleKeydown(e: KeyboardEvent) {
		if (onKeydown) {
			onKeydown(e, controller);
		} else {
			if (preventKeys.includes(e.key)) {
				e.preventDefault();
				return;
			}

			if (specialKeys.includes(e.key)) {
				return;
			}

			if (allowKeys === "lettersOnly") {
				const alphabetsOnlyRegex = /^[A-Za-z]+$/;
				if (!alphabetsOnlyRegex.test(e.key)) {
					e.preventDefault();
				}
			} else if (allowKeys === "numbersOnly") {
				const numbersOnlyRegex = /^[0-9]+$/;
				if (!numbersOnlyRegex.test(e.key)) {
					e.preventDefault();
				}
			} else if (allowKeys instanceof RegExp) {
				if (!allowKeys.test(e.key)) {
					e.preventDefault();
				}
			}
		}
	}

	function handleGenerateFakeData() {
		if (controller.faker != null) {
			const el = controller.el as HTMLInputElement;
			const fakeValue = controller.faker();
			controller.writableValue.set(fakeValue);
			el.value = fakeValue;
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
	<div class="flex items-center relative rounded outline {outlineClass}">
		<input
			{type}
			bind:this={controller.el}
			{disabled}
			name={controller.name}
			value={controller.writableValue.get() ?? ""}
			id={controller.id}
			class="p-2 text-sm w-full outline-none text-gray-600"
			{autocomplete}
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

		{#if !disabled && controller.faker != null && PUBLIC_ENV === "DEV"}
			<button
				class="button button-inverse p-2 mr-1"
				on:click={handleGenerateFakeData}
				aria-label="Generate Random"
			>
				<iconify-icon icon="fe:random"></iconify-icon>
			</button>
		{/if}
		{#if $$slots.postfix}
			<div class="right-0 h-full">
				<slot name="postfix" />
			</div>
		{/if}
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
