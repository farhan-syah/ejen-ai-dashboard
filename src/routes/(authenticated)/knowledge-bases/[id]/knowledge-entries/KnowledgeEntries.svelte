<script lang="ts">
	import type { KnowledgeEntrySearch } from "$api/routes/knowledge-entry/knowledge-entry.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { KnowledgeEntryRepository } from "$repositories";
	import {
		knowledgeEntryColumns,
		toKnowledgeEntryCSV,
		type _KnowledgeEntry
	} from "./KnowledgeEntries";

	const tableContext = createTableContext<_KnowledgeEntry, KnowledgeEntrySearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: knowledgeEntryColumns,
		limit: 20,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return KnowledgeEntryRepository.search(f);
			return [];
		},
		onCount: async (f) => {
			if (f) return KnowledgeEntryRepository.count(f);
			return 0;
		},
		onGetSelected: async (selected) => {
			return KnowledgeEntryRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toKnowledgeEntryCSV,
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
	title="Knowledge Entries"
	breadcrumbs={[{ label: "Knowledge Entries", path: "/knowledge-entrys", currentPage: true }]}
>
	<div slot="action" class="mt-0.5">
		<Button
			link="/knowledge-entrys/add"
			label="Add Knowledge Entry"
			onClick={() => {
				goto("/knowledge-entrys/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>
