import type Prisma from "$api/types/prisma-client";
import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import ProductActions from "./_/actions/ProductActions.svelte";

export type Product = Prisma.Product;
export type ProductCategory = Prisma.ProductCategory;
export const productColumns: TableColumn<Product>[] = [
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
		content: ProductActions
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

export function toProductCSV(product: Product[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "product-categories " + date + ".csv";

	product.forEach((p) => {
		const csv: CSVRow = {
			ID: p.id,
			name: p.name
			// description: p.description
		};
		data.push(csv);
	});

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
