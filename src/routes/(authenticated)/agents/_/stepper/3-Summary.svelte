<script lang="ts">
	import { Button, getStepperContext } from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { toCurrencyFromCent } from "$lib/utils";
	import { getAddAgentContext } from "./AddAgentSteps";

	const context = getStepperContext();
	const agentContext = getAddAgentContext();
	const selectedAgentType = agentContext.selectedAgentType;
	const integrations = agentContext.selectedAgentTypeIntegrations;

	const getMonthlyTotal = $derived(() => {
		const totalAgentPrice = $selectedAgentType.price;
		const totalIntegrationPrice = $integrations.reduce((a, b) => a + b.price, 0);
		return totalAgentPrice + totalIntegrationPrice;
	});
</script>

<div class="flex flex-col gap-2 mt-4 mx-auto px-8 w-[800px]">
	<h2 class="text-xl">Summary</h2>
	<div class="text-base">Confirm your agent settings</div>

	<table class="w-full">
		<colgroup>
			<col class="w-1/4" />
			<col />
			<col class="w-1/4" />
		</colgroup>
		<thead>
			<tr>
				<th colspan="2"></th>
				<th>Monthly Fee</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Agent Type :</td>
				<td>
					{$selectedAgentType.name}
				</td>
				<td class="text-right">
					{toCurrencyFromCent($selectedAgentType.price)}
				</td>
			</tr>
			<tr>
				<td class="align-text-top">Integrations :</td>
				<td>
					{#each $integrations as integration}
						<div>
							{integration.integration.name}
						</div>
						<div class="text-gray-500 font-light">
							{#if integration.pricePerUsage != 0}
								<div>- {`Per Message : ${toCurrencyFromCent(integration.pricePerUsage)}`}</div>
							{:else}
								<div>- Unlimited message</div>
							{/if}
						</div>
					{/each}
				</td>
				<td class="text-right">
					{#each $integrations as integration}
						<div>
							{toCurrencyFromCent(integration.price)}
						</div>
						<br />
					{/each}
				</td>
			</tr>
			<tr class="font-bold">
				<td colspan="2">Total</td>
				<td class="text-right">
					{toCurrencyFromCent(getMonthlyTotal())}
				</td>
			</tr>
		</tbody>
	</table>
	<div></div>
	<hr />
	<TextField label="Agent Name" class="w-96" />
</div>

<style lang="postcss">
	table,
	th,
	td {
		/* @apply border; */
		/* @apply p-1 px-2; */
	}
</style>
