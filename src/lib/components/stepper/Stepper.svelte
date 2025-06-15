<script lang="ts">
	import { cubicInOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import { createStepperContext, type StepperComponent } from ".";
	import StepperButton from "./StepperButton.svelte";

	const {
		items,
		animate = true,
		class: componentClass
	}: { items: StepperComponent[]; animate?: boolean; class?: string } = $props();
	const context = createStepperContext({ items: items });

	const steps = context.items;
	const currentStep = context.currentStep;
	const prevStep = context.prevStep;
</script>

<div class={componentClass}>
	{#if steps}
		<!-- Header -->
		<div class="flex justify-between">
			{#each steps as step, index}
				<StepperButton {step} {index} length={steps.length}></StepperButton>
			{/each}
		</div>
		<!-- Content -->
		{@const Component = steps[$currentStep].component}
		<div
			class="w-full"
			in:fly={{
				x: prevStep < currentStep ? 1000 : -1000,
				duration: animate ? 500 : 0,
				easing: cubicInOut
			}}
			out:fly={{
				x: prevStep < currentStep ? -1000 : 1000,
				duration: animate ? 500 : 0,
				easing: cubicInOut
			}}
		>
			<Component />
		</div>
	{/if}
</div>
