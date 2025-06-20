<script lang="ts">
	import { PageTitle } from "$lib/components";
	import { AgentTypeIntegrationRepository } from "$repositories";
	import { onMount } from "svelte";
	import type { _AgentType } from "../AgentType";
	import type { AgentTypeIntegration, Integration } from "@prisma/client";
	import { toCurrencyFromCent } from "$lib/utils";
	import Icon from "$lib/components/icons/Icon.svelte";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";

	interface Props {
		agentType: _AgentType;
	}

	type _AgentTypeIntegration = AgentTypeIntegration & { integration: Integration };

	const { agentType }: Props = $props();

	const appState = getAppState();
	const toastState = getToastState();

	let agentTypeIntegrations = $state<_AgentTypeIntegration[]>([]);

	async function fetchAgentTypeIntegrations() {
		agentTypeIntegrations = (await AgentTypeIntegrationRepository.search({
			where: { agentTypeKey: agentType.key },
			query: {
				additionalFields: {
					integration: true
				}
			}
		})) as _AgentTypeIntegration[];
	}

	async function refreshAgentTypeIntegration(id: string) {
		try {
			appState.loading.set(true);
			await AgentTypeIntegrationRepository.update(id, { data: {} });
			toastState.success({
				message: "AgentType has been refreshed"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
			fetchAgentTypeIntegrations();
		}
	}

	onMount(() => {
		fetchAgentTypeIntegrations();
	});
</script>

<PageTitle title="Integrations" showCopyLink={false} />

<table class="w-full">
	<thead>
		<tr>
			<th class="text-start">Name</th>
			<th>Monthly Price</th>
			<th>Price per Message</th>
			<th>Stripe Product ID</th>
		</tr>
	</thead>
	<tbody>
		{#each agentTypeIntegrations as integration}
			<tr>
				<td>
					<div>{integration.integration.name}</div>
				</td>
				<td class="text-center">
					<div>{toCurrencyFromCent(integration.price)}</div>
					<div>{integration.stripeFixedPriceId}</div>
				</td>
				<td class="text-center">
					<div>{toCurrencyFromCent(integration.pricePerUsage)}</div>
					<div>{integration.stripeUsagePriceId}</div>
				</td>
				<td class="text-center">{integration.stripeProductId}</td>
				<td>
					<Icon
						icon="bx:refresh"
						iconClass="text-lg text-green-500"
						onClick={() => {
							refreshAgentTypeIntegration(integration.id);
						}}
					/>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	table,
	th,
	td {
		/* @apply border; */
		/* @apply p-1 px-2; */
	}
</style>
