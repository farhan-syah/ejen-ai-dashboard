import type Prisma from "$api/types/prisma-client";
import type { TableColumn } from "$lib/components";

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
