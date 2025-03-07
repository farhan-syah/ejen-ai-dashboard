<script lang="ts">
	import { atom } from "nanostores";
	import { FormControl } from "../controller/form-control";
	export let controller: FormControl<boolean> = new FormControl<boolean>();
	export let label: string | undefined = undefined;
	export let disabled: boolean = false;
	const required = controller.required;
	const selected = controller.writableValue;

	let componentClass = "";
	export { componentClass as class };
	const labelClass = atom("");

	function handleToggle() {
		if (!disabled) {
			controller.writableValue.set(!$selected);
		}
	}
</script>

<div class="text-gray-400 {componentClass}">
	{#if label}
		<div class="mb-1">
			<label for={controller.id} class="flex {$labelClass}">
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
	<button
		role="switch"
		id={controller.id}
		class="toggle-container"
		on:click={handleToggle}
		aria-checked={$selected}
		tabindex="0"
		aria-label="toggle"
	>
		<span
			class="toggle-bg w-full h-full {$selected ? 'bg-blue-500' : 'bg-gray-200'} {disabled
				? 'bg-opacity-50'
				: ''}"
		></span>
		<span class="toggle-circle bg-white left-0.5 {$selected ? 'translate-x-[19px]' : ''}"></span>
	</button>
</div>

<style lang="postcss">
	.toggle-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 44px;
		height: 24px;
	}
	.toggle-bg {
		width: 100%;
		height: 100%;
		cursor: pointer;
		border-radius: 22px;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	.toggle-circle {
		position: absolute;
		width: 21px;
		height: 20px;
		border-radius: 22px;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
</style>
