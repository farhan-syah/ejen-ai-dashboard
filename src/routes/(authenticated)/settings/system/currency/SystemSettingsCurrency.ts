import type { CurrencySearch } from "$api/routes/currency/currency.schema";
import { createTableContext, TableContext, type TableColumn } from "$lib/components";
import { CurrencyRepository } from "$repositories";
import { type Currency } from "@prisma/client";
import { atom } from "nanostores";
import { getContext, setContext } from "svelte";
import SystemSettingsCurrencyActions from "./actions/SystemSettingsCurrencyActions.svelte";

export type _Currency = Currency;
export const currencyColumns: TableColumn<_Currency>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true
	},
	{
		key: "code",
		label: "Code",
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
		key: "symbol",
		label: "Symbol",
		visible: true,
		sortable: true
	},
	{
		key: "isBaseCurrency",
		label: "Base Currency",
		visible: true,
		sortable: true
	},
	{
		key: "exchangeRate",
		label: "Exchange Rate",
		visible: true,
		sortable: true
	},
	{ key: "id", label: "Actions", visible: true, content: SystemSettingsCurrencyActions }
];

export class SystemSettingsCurrencyContext {
	table: TableContext<_Currency, CurrencySearch>;
	isAddCurrencyDialogOpen = atom(false);

	constructor() {
		this.table = createTableContext<_Currency, CurrencySearch>({
			filter: { where: {}, query: { orderBy: { id: "asc" } } },
			columns: currencyColumns,
			limit: 20,
			onSearch: async (f) => {
				if (f) return CurrencyRepository.search(f);
				return [];
			},
			onCount: async (f) => {
				if (f) return CurrencyRepository.count(f);
				return 0;
			}
		});
	}
}

export function createSystemSettingsCurrencyContext() {
	return setContext("systemSettingsCurrencyContext", new SystemSettingsCurrencyContext());
}

export function getSystemSettingsCurrencyContext() {
	return getContext<SystemSettingsCurrencyContext>("systemSettingsCurrencyContext");
}
