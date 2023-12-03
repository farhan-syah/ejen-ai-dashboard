<script lang="ts">
	import { nanoid } from "nanoid";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	export let type: HTMLInputTypeAttribute | undefined | null = "text";
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let disabled: boolean = false;
	export let error: string | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let required: boolean = false;
	let input: HTMLInputElement;
	let focus = false;
	let touched = false;
	export let onChange: (inputValue: string, input: HTMLInputElement, e: any) => any = (
		inputValue
	) => {
		if (type && ["string", "text", "email", "password"].includes(type)) {
			const trimmed = inputValue.trim();

			if (trimmed == "") {
				value = undefined;
			} else value = trimmed;
		}
	};

	function handleInput(e: any) {
		onChange(input.value, input, e);
	}
	let id = nanoid(4);
</script>

{#if label}
	<div class="mb-1">
		<label
			for={id}
			class="text-xs w-full font-medium text-gray-500 {focus && !error
				? 'text-blue-500'
				: ''} {focus && error ? 'text-red-500' : 'text-gray-500 '} {touched && error
				? '!text-red-500'
				: ''} {$$props.class ?? ''}"
		>
			{label}
			{#if required}
				<span class="text-red-500">*</span>
			{/if}
		</label>
	</div>
{/if}

<div
	class="flex rounded outline {focus
		? 'outline-2  outline-blue-500'
		: 'outline-1 outline-gray-200 '} mb-1.5 {touched && error
		? 'outline-red-500'
		: ''} {$$props.class ?? ''}"
>
	<input
		{id}
		bind:this={input}
		value={value ?? ""}
		{disabled}
		{type}
		{placeholder}
		class="p-2 text-sm w-full outline-none"
		{maxlength}
		{pattern}
		on:input={handleInput}
		on:focus={() => {
			focus = true;
			touched = true;
		}}
		on:blur={() => {
			focus = false;
		}}
	/>

	{#if $$slots.postfix}
		<slot name="postfix" />
	{/if}
</div>
{#if touched && error}
	<div class="text-xs text-red-500 mb-1.5">
		{error}
	</div>
{/if}
