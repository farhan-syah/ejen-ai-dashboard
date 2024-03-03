import type { TableColumn } from "$lib/components";
import type Prisma from "../../../$api/types/prisma-client";

export type Currency = Prisma.Currency;
export const currencyColumns: TableColumn<Currency>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true
	},
	{
		key: "code",
		label: "ID",
		visible: true,
		sortable: true
	},
	{
		key: "name",
		label: "ID",
		visible: true,
		sortable: true
	},
	{
		key: "symbol",
		label: "ID",
		visible: true,
		sortable: true
	},
	{
		key: "isBaseCurrency",
		label: "Is Base Currency",
		visible: true,
		sortable: true
	}
];
