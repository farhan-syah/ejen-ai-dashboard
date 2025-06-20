import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { KnowledgeEntry } from "@prisma/client";
import { atom } from "nanostores";
import { getContext, setContext } from "svelte";
import KnowledgeEntryActions from "./actions/KnowledgeEntryActions.svelte";
import KnowledgeEntryMetadata from "./KnowledgeEntryMetadata.svelte";
import KnowledgeEntryStatus from "./KnowledgeEntryStatus.svelte";

export type _KnowledgeEntry = KnowledgeEntry & {};

export const knowledgeEntryColumns: TableColumn<KnowledgeEntry>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true,
		shrink: true
	},
	{
		key: "title",
		label: "Title",
		visible: true,
		contentClass: "w-80"
	},
	{
		key: "status",
		label: "Status",
		visible: true,
		content: KnowledgeEntryStatus,
		contentClass: "w-20"
	},
	{
		key: "metadata",
		label: "Metadata",
		visible: true,
		content: KnowledgeEntryMetadata
	},
	{
		key: "id",
		label: "Action",
		visible: true,
		content: KnowledgeEntryActions
	}
];

type CSVRow = {
	ID: string;
	name: string;
	description?: string | null;
};

const row: CSVRow = {
	ID: "",
	name: "",
	description: ""
};

const rowHeaders = Object.keys(row);

export function toKnowledgeEntryCSV(knowledgeEntries: KnowledgeEntry[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "knowledgeEntries " + date + ".csv";

	knowledgeEntries.forEach((kb) => {
		const csv: CSVRow = {
			ID: kb.id,
			name: kb.id
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}

export class KnowledgeEntriesContext {
	isDialogOpen = atom(false);
}

export function createKnowledgeEntriesContext() {
	return setContext("knowledgeEntriesContext", new KnowledgeEntriesContext());
}

export function getKnowledgeEntriesContext() {
	return getContext<KnowledgeEntriesContext>("knowledgeEntriesContext");
}
