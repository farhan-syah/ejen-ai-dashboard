import type Prisma from "$api/types/prisma-client";
import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";

export type ProductCategory = Prisma.ProductCategory;

export const productCategoryColumns: TableColumn<ProductCategory>[] = [
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

export function toProductCategoryCSV(productCategory: ProductCategory[]) {
	const data: CSVRow[] = [];
	const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
	const fileName = "Admin " + date + ".csv";

	productCategory.forEach((p) => {
		const csv: CSVRow = {
			ID: p.id,
			name: p.name,
			description: p.description
		};
		data.push(csv);
	});
	console.log(data);

	return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
