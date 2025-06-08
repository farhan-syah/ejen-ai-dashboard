<script lang="ts">
	import type { KnowledgeBaseSearch } from "$api/routes/knowledge-base/knowledge-base.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { KnowledgeBaseRepository } from "$repositories";
	import { knowledgeBaseColumns, toKnowledgeBaseCSV, type _KnowledgeBase } from "./KnowledgeBases";

	const tableContext = createTableContext<_KnowledgeBase, KnowledgeBaseSearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: knowledgeBaseColumns,
		limit: 20,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return KnowledgeBaseRepository.search(f);
			return [];
		},
		onCount: async (f) => {
			if (f) return KnowledgeBaseRepository.count(f);
			return 0;
		},
		onGetSelected: async (selected) => {
			return KnowledgeBaseRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toKnowledgeBaseCSV,
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
	title="Knowledge Bases"
	breadcrumbs={[{ label: "Knowledge Bases", path: "/knowledge-bases", currentPage: true }]}
>
	<div slot="action" class="mt-0.5">
		<Button
			link="/knowledge-bases/add"
			label="Add Knowledge Base"
			onClick={() => {
				goto("/knowledge-bases/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>