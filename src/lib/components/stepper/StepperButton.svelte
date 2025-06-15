<script lang="ts">
	import { getStepperContext, type StepperComponent } from ".";

	const context = getStepperContext();

	const { step, index, length }: { step: StepperComponent; index: number; length: number } =
		$props();

	const completed = step.completed;
	const currentStep = context.currentStep;

	const isActive = $derived($currentStep === index);
	const canClick = $derived(!isActive && $completed);
</script>

<div class="flex flex-col items-center relative w-full mb-2">
	<button
		class="w-10 h-10 rounded-full flex items-center justify-center border-[3px] {canClick
			? 'cursor-pointer'
			: 'cursor-default'} {isActive
			? 'border-blue-500'
			: $completed
				? 'border-green-500'
				: 'border-gray-200'}"
		onclick={() => {
			if (canClick) context.handleButtonClick(index);
		}}
	>
		{#if step.icon}
			<iconify-icon
				icon={step.icon}
				width="24"
				class={isActive ? "text-blue-500" : $completed ? "text-green-500" : "text-gray-200"}
			></iconify-icon>
		{:else}
			<div
				class="w-4 h-4 rounded-full {isActive
					? 'bg-blue-500'
					: $completed
						? 'bg-green-500'
						: 'bg-gray-200'}"
			></div>
		{/if}
	</button>

	<!-- label -->
	{#if step.label}
		<div
			class="text-center pt-2 text-sm {isActive
				? 'font-semibold text-blue-600'
				: ' font-light text-gray-400'}"
		>
			{step.label}
		</div>
	{/if}
	{#if index < length - 1}
		<div class=" h-1 w-full absolute start-1/2 top-[17px] flex px-7">
			<div class="w-full {$completed ? 'bg-green-500' : 'bg-gray-200'}"></div>
		</div>
	{/if}
</div>
