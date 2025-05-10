<script lang="ts">
	import { AgentTypeIntegrationRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";
	import { getAddAgentContext, type _AgentType, type _AgentTypeIntegration } from "./AddAgentSteps";
	import { toCurrencyFromCent } from "$lib/utils";

	const addAgentContext = getAddAgentContext();

	const selectedAgentType: WritableAtom<_AgentType> = addAgentContext.selectedAgentType;
	const selectedAgentTypeIntegration: WritableAtom<_AgentTypeIntegration[]> =
		addAgentContext.selectedAgentTypeIntegrations;

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

	function toggleIntegrationSelection(integrationToToggle: _AgentTypeIntegration) {
		const currentSelection = selectedAgentTypeIntegration.get();
		if (currentSelection.includes(integrationToToggle)) {
			// Remove the integration
			selectedAgentTypeIntegration.set(
				currentSelection.filter((item) => item !== integrationToToggle)
			);
		} else {
			// Add the integration
			selectedAgentTypeIntegration.set([...currentSelection, integrationToToggle]);
		}
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
				selected: $selectedAgentTypeIntegration.includes(agentTypeIntegration)
			}}
			<button
				class="group border-2 p-4 h-26 rounded flex gap-4 items-center justify-center cursor-pointer hover:border-blue-500 {selected
					? 'text-blue-500 border-blue-500'
					: ''} hover:text-blue-500 relative"
				on:click={() => {
					toggleIntegrationSelection(agentTypeIntegration);
				}}
			>
				<div class="w-14 flex items-center justify-center">
					<iconify-icon
						icon={agentTypeIntegration.integration.icon ?? "uil:channel"}
						height="42"
						width="42"
					></iconify-icon>
				</div>
				<div class="grid w-full text-start gap-0.5">
					<div class="font-bold">
						<div>
							{agentTypeIntegration.integration.name}
						</div>
					</div>
					<div>
						{agentTypeIntegration.integration.description}
					</div>
					<div class="text-xs opacity-80">
						<div>{`Base Price : ${toCurrencyFromCent(agentTypeIntegration.price)}`}</div>
						<div>{`Per Message : ${toCurrencyFromCent(agentTypeIntegration.pricePerUsage)}`}</div>
					</div>
				</div>
				<div class="w-12">
					{#if selected}
						<div class=" text-green-500">
							<iconify-icon icon="uil:check-circle" height="32" width="32"></iconify-icon>
						</div>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</div>
