import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { Agent } from "@prisma/client";
import AgentActions from "./_/actions/AgentActions.svelte";

export type _Agent = Agent & {};
export const agentColumns: TableColumn<Agent>[] = [
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
	// {
	// 	key: "description",
	// 	label: "Description",
	// 	visible: true,
	// 	sortable: true
	// },
	{
		key: "id",
		label: "Action",
		visible: true,
		content: AgentActions
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

export function toAgentCSV(agent: Agent[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "agents " + date + ".csv";

	agent.forEach((p) => {
		const csv: CSVRow = {
			ID: p.id,
			name: p.name
			// description: p.description
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
