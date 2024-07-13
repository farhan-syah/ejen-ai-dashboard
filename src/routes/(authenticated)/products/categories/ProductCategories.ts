import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { ProductCategory } from "@prisma/client";
import ProductCategoryActions from "./_/actions/ProductCategoryActions.svelte";

export type _ProductCategory = ProductCategory;

export const productCategoryColumns: TableColumn<_ProductCategory>[] = [
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
		content: ProductCategoryActions
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

export function toProductCategoryCSV(productCategory: _ProductCategory[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "product-categories " + date + ".csv";

	productCategory.forEach((p) => {
		const csv: CSVRow = {
			ID: p.id,
			name: p.name,
			description: p.description
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
