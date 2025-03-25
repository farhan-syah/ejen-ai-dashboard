<script lang="ts">
	import { Stepper, StepperComponent } from "$lib/components";
	import Step1 from "./1-ChooseAgentType.svelte";
	import Step2 from "./2-SelectIntegration.svelte";
	import Step3 from "./AddAgentStep3.svelte";
	import { createAddAgentContext } from "./AddAgentSteps";

	const stepperItems: StepperComponent[] = [
		new StepperComponent(Step1, {
			label: "Agent Selection",
			icon: "material-symbols:highlight-mouse-cursor"
		}),
		new StepperComponent(Step2, {
			label: "Integration",
			icon: "material-symbols:integration-instructions-outline"
		}),

		new StepperComponent(Step3)
	];

	createAddAgentContext();
</script>

<Stepper items={stepperItems} class="mt-4"></Stepper>
