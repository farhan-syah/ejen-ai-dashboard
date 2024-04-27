import type { ProductItemSearch } from "$api/routes/product-item/product-item.schema";
import { TableContext, createTableContext, type TableColumn } from "$lib/components";
import { ProductItemRepository } from "$repositories";
import type { ProductItem } from "@prisma/client";
import { getContext, setContext } from "svelte";

export type _ProductItem = ProductItem & {};

export type ProductItemsContextOption = { productId: string };

const ProductItemsColumns: TableColumn<_ProductItem>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true
	}
];

export class ProductItemsContext {
	table: TableContext<_ProductItem, ProductItemSearch>;
	constructor(obj: ProductItemsContextOption) {
		this.table = createTableContext<_ProductItem, ProductItemSearch>({
			filter: { where: { productId: obj.productId }, query: { limit: 20 } },
			columns: ProductItemsColumns,
			limit: 20,
			selectable: true,
			selectByKey: "id",
			onSearch: async (f) => {
				if (f) return ProductItemRepository.search(f);
				return [];
			},
			onCount: async (f) => {
				if (f) return ProductItemRepository.count(f);
				return 0;
			}
		});
	}
}

export function createProductItemContext(option: ProductItemsContextOption) {
	return setContext("productItemsContext", new ProductItemsContext(option));
}

export function getProductContext() {
	return getContext<ProductItemsContext>("productItemsContext");
}
