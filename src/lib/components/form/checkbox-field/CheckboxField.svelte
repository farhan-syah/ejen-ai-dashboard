<script lang="ts">
	import { FormControl } from "../controller/form-control";

	export let controller: FormControl<boolean> = new FormControl<boolean>();
	export let label: string | undefined = undefined;
	export let disabled: boolean = false;
	export let showErrorCount: number = 1;
	export let position: "start" | "end" = "start";

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";

	const required = controller.required;

	$: isFocused = controller.isFocused;
	$: errors = controller.errors;
	$: hasError = controller.hasError;
	$: touched = controller.touched;
	$: dirty = controller.dirty;
	$: checked = controller.writableValue;

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

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		controller.writableValue.set(target.checked);

		if (!$touched) {
			touched.set(true);
		}
		if ($touched && !$dirty) {
			dirty.set(true);
		}
		controller.validate();
	}
</script>

<div class={componentClass}>
	{#if label}
		<div class="mb-1">
			<label for={controller.id} class="flex {labelClass}">
				{label}
				{#if required}
					<span class="text-red-500">*</span>
				{/if}
			</label>
		</div>
		{#if $$slots.labelPostfix}
			<slot name="labelPostfix" />
		{/if}
	{/if}

	<div class="flex gap-1.5">
		{#if position === "end"}
			<slot />
		{/if}
		<input
			bind:this={controller.el}
			type="checkbox"
			id={controller.id}
			name={controller.name}
			checked={$checked}
			{disabled}
			class="w-4 h-4 text-blue-600 accent-blue-500 rounded cursor-pointer mt-0.25"
			on:change={handleChange}
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
		/>
		{#if position === "start"}
			<slot />
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
