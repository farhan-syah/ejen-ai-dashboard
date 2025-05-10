<script lang="ts">
	import { Button, getStepperContext } from "$lib/components";
	import { AgentTypeIntegrationRepository, IntegrationRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { getAddAgentContext, type _AgentTypeIntegration } from "./AddAgentSteps";
	import { onMount } from "svelte";
	import { logger } from "$lib/utils/logger";

	const addAgentContext = getAddAgentContext();

	const selectedAgentType = addAgentContext.selectedAgentType;
	const selectedAgentTypeIntegration = addAgentContext.selectedAgentTypeIntegration;

	const agentTypeIntegrations: WritableAtom<_AgentTypeIntegration[]> = atom();

	async function fetchAgentTypeIntegrations() {
		const result = (await AgentTypeIntegrationRepository.search({
			where: { agentTypeKey: selectedAgentType.get()?.key },
			query: {
				additionalFields: {
					integration: { select: { name: true, description: true, icon: true, priority: true } }
				}
			}
		})) as _AgentTypeIntegration[];

		// Sort the result array by integration.priority in ascending order
		result.sort((a, b) => a.integration.priority - b.integration.priority);

		agentTypeIntegrations.set(result);
	}

	onMount(() => {
		fetchAgentTypeIntegrations();
	});
</script>

<div class="flex flex-col gap-2 items-center mt-4 px-8">
	<h2 class="text-xl">Integration Choice</h2>
	<div class="text-base">Select Where Your Agent Will Communicate</div>
	<div class="grid gap-4 mt-8 items-center justify-center">
		{#each $agentTypeIntegrations as agentTypeIntegration}
			{@const { selected } = {
				selected: $selectedAgentTypeIntegration?.id === agentTypeIntegration.id
			}}
			<button
				class="border p-4 h-26 rounded flex gap-4 items-center justify-center cursor-pointer hover:border-blue-500 {selected
					? 'text-blue-500 border-blue-500'
					: ''} hover:text-blue-500"
				on:click={() => {
					addAgentContext.selectedAgentTypeIntegration.set(agentTypeIntegration);
				}}
			>
				<div class="w-14 flex items-center justify-center">
					<iconify-icon
						icon={agentTypeIntegration.integration.icon ?? "uil:channel"}
						height="36"
						width="36"
					></iconify-icon>
				</div>
				<div class="grid w-full text-start gap-1">
					<div class="font-bold">
						{agentTypeIntegration.integration.name}
					</div>
					{agentTypeIntegration.integration.description}
				</div>
			</button>
		{/each}
	</div>
</div>
