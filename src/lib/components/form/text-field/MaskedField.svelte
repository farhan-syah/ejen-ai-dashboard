<script lang="ts">
	import { PUBLIC_ENV } from "$env/static/public";

	import { type FullAutoFill } from "svelte/elements";
	import { twMerge } from "tailwind-merge";
	import { FormControl } from "../controller/form-control";
	export let controller: FormControl<number> = new FormControl<number>();
	export let label: string | undefined = undefined;
	export let showErrorCount: number = 1;
	export let disabled: boolean = false;
	export let autocomplete: FullAutoFill | null | undefined = "off";
	export let onInput: (value: string, input: HTMLInputElement, event: any) => any;
	export let onKeydown: ((e: KeyboardEvent, controller: FormControl) => any) | undefined =
		undefined;
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
		onInput(el.value, el, e);
	}

	function handleKeydown(e: any) {
		if (onKeydown) {
			onKeydown(e, controller);
		}
	}

	function handleGenerateFakeData() {
		if (controller.faker != null) {
			const el = controller.el as HTMLInputElement;
			const fakeValue = controller.faker();
			controller.writableValue.set(fakeValue);
			if (controller.inputTransformer != null) {
				el.value = controller.inputTransformer(fakeValue);
			} else {
				el.value = fakeValue.toString();
			}
		}
	}

	function getInput(): string {
		if (controller.inputTransformer) {
			return controller.inputTransformer(controller.writableValue.get());
		} else return controller.writableValue.get()?.toString() ?? "";
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
			type="text"
			name={controller.name}
			{autocomplete}
			value={getInput()}
			id={controller.id}
			class={twMerge(["p-2 text-sm w-full outline-none"], inputClass)}
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
		{#if controller.faker != null && PUBLIC_ENV === "DEV"}
			<button
				aria-label="randomize"
				class="button button-inverse p-2 mr-1"
				on:click={handleGenerateFakeData}
			>
				<iconify-icon icon="fe:random"></iconify-icon>
			</button>
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
