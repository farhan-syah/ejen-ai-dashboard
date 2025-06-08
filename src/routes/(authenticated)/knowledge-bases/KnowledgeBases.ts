import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { KnowledgeBase } from "@prisma/client";
import KnowledgeBaseActions from "./_/actions/KnowledgeBaseActions.svelte";

export type _KnowledgeBase = KnowledgeBase & {};

export const knowledgeBaseColumns: TableColumn<KnowledgeBase>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true
	},

	{
		key: "name",
		label: "Name",
		visible: true,
		sortable: true
	},
	{
		key: "description",
		label: "Description",
		visible: true,
		sortable: true
	},
	{
		key: "id",
		label: "Action",
		visible: true,
		content: KnowledgeBaseActions
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

export function toKnowledgeBaseCSV(knowledgeBases: KnowledgeBase[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "knowledgeBases " + date + ".csv";

	knowledgeBases.forEach((kb) => {
		const csv: CSVRow = {
			ID: kb.id,
			name: kb.name,
			description: kb.description
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
