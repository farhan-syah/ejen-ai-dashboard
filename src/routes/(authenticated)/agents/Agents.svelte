<script lang="ts">
	import type { AgentSearch } from "$api/routes/agent/agent.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { AgentRepository } from "$repositories";
	import { agentColumns, toAgentCSV, type _Agent } from "./Agents";

	const tableContext = createTableContext<_Agent, AgentSearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: agentColumns,
		limit: 20,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return AgentRepository.search(f);
			return [];
		},
		onCount: async (f) => {
			if (f) return AgentRepository.count(f);
			return 0;
		},
		onGetSelected: async (selected) => {
			return AgentRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toAgentCSV,
		bulkActions: {
			"Bulk Action A": async (selected) => {
				await delay(3000);
			},
			"Bulk Action B": async () => {
				await delay(3000);
				throw "Bulk Action Error";
			}
		}
	});
</script>

<PageTitle title="Agents" breadcrumbs={[{ label: "Agents", path: "/agents", currentPage: true }]}>
	<div slot="action" class="mt-0.5">
		<Button
			link="/agents/add"
			label="Add Agent"
			onClick={() => {
				goto("/agents/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>
