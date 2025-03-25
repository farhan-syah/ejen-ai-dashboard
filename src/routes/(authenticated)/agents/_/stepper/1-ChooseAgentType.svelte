<script lang="ts">
	import { Button, getStepperContext } from "$lib/components";
	import { AgentTypeRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";
	import { getAddAgentContext, type _AgentType } from "./AddAgentSteps";

	const stepperContext = getStepperContext();
	const addAgentContext = getAddAgentContext();

	const agentTypes: WritableAtom<_AgentType[]> = atom();

	async function fetchAgentTyypes() {
		const result = (await AgentTypeRepository.search({
			where: {},
			query: {
				orderBy: { priority: "asc" }
			}
		})) as _AgentType[];

		agentTypes.set(result);
	}

	onMount(() => {
		fetchAgentTyypes();
	});

	const selectedAgentType = addAgentContext.selectedAgentType;
</script>

<div class="flex flex-col gap-2 items-center mt-4 px-8">
	<h2 class="text-xl">Choose Agent Type</h2>
	<div class="text-base">Select the type of agent you want to create</div>
	{#if $agentTypes}
		<div class="flex flex-wrap gap-4 mt-8 items-center justify-center">
			{#each $agentTypes as agentType}
				{@const { selected } = { selected: $selectedAgentType?.id === agentType.id }}
				<button
					class="border p-4 w-80 h-26 rounded flex gap-4 items-center justify-center cursor-pointer hover:border-blue-500 {selected
						? 'text-blue-500 border-blue-500'
						: ''} hover:text-blue-500"
					on:click={() => {
						addAgentContext.selectedAgentType.set(agentType);
					}}
				>
					<div class="w-14 flex items-center justify-center">
						<iconify-icon icon={agentType.icon} height="36" width="36"></iconify-icon>
					</div>
					<div class="w-full text-start">
						{agentType.name}
					</div>
				</button>
			{/each}
		</div>
	{/if}
	<Button
		label="Continue"
		class="my-8 w-full sm:w-48 py-2"
		valid={$selectedAgentType != null}
		onClick={() => {
			stepperContext.handleNextClick();
		}}
	/>
</div>
