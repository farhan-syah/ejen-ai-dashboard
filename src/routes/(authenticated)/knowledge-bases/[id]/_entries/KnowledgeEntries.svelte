<script lang="ts">
	import type { KnowledgeEntrySearch } from "$api/routes/knowledge-entry/knowledge-entry.schema";
	import { Button, Dialog, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { KnowledgeEntryRepository } from "$repositories";
	import { atom } from "nanostores";
	import {
		knowledgeEntryColumns,
		toKnowledgeEntryCSV,
		type _KnowledgeEntry
	} from "./KnowledgeEntries";
	import KnowledgeEntryAddForm from "./add/KnowledgeEntryAddForm.svelte";

	const tableContext = createTableContext<_KnowledgeEntry, KnowledgeEntrySearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: knowledgeEntryColumns,
		limit: 20,
		// selectable: true,
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

	const isDialogOpen = atom(false);
</script>

<PageTitle title="Knowledge Entries" showCopyLink={false} class="my-4">
	<div slot="action" class="mt-0.5">
		<Button
			label="Add Knowledge Entry"
			onClick={() => {
				isDialogOpen.set(true);
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>

<Dialog isOpen={isDialogOpen}>
	<KnowledgeEntryAddForm />
</Dialog>
