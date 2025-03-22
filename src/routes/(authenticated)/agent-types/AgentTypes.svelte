<script lang="ts">
	import type { AgentTypeSearch } from "$api/routes/agent-type/agent-type.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { AgentTypeRepository } from "$repositories";
	import { agentTypeColumns, toAgentTypeCSV, type _AgentType } from "./AgentTypes";

	const tableContext = createTableContext<_AgentType, AgentTypeSearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: agentTypeColumns,
		limit: 20,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return AgentTypeRepository.search(f);
			return [];
		},
		onCount: async (f) => {
			if (f) return AgentTypeRepository.count(f);
			return 0;
		},
		onGetSelected: async (selected) => {
			return AgentTypeRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toAgentTypeCSV,
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

<PageTitle
	title="Agent Types"
	breadcrumbs={[{ label: "Agent Types", path: "/agent-types", currentPage: true }]}
>
	<div slot="action" class="mt-0.5">
		<Button
			link="/agent-types/add"
			label="Add Agent Type"
			onClick={() => {
				goto("/agent-types/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>
