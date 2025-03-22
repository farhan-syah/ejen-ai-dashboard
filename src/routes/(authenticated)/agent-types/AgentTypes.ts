import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { AgentType } from "@prisma/client";
import AgentTypeActions from "./actions/AgentTypeActions.svelte";

export type _AgentType = AgentType & {};
export const agentTypeColumns: TableColumn<AgentType>[] = [
	{
		key: "id",
		label: "ID",
		// visible: true,
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
		content: AgentTypeActions
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

export function toAgentTypeCSV(agentType: AgentType[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "agentTypes " + date + ".csv";

	agentType.forEach((p) => {
		const csv: CSVRow = {
			ID: p.id,
			name: p.name
			// description: p.description
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
