import type { ProductItemSearch } from "$api/routes/product-item/product-item.schema";
import { TableContext, createTableContext, type TableColumn } from "$lib/components";
import { ProductItemRepository } from "$repositories";
import { type ProductItem } from "@prisma/client";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";
import type { _Product } from "../../../Products";
import ProductItemActions from "./_/actions/ProductItemActions.svelte";

export type _ProductItem = ProductItem & {};
export type ProductItemsContextOption = { product: _Product };

const ProductItemsColumns: TableColumn<_ProductItem>[] = [
	{
		key: "id",
		label: "ID",
		visible: true,
		sortable: true,
		shrink: true
	},
	{
		key: "name",
		label: "Name",
		visible: true,
		sortable: true
	},
	{
		key: "sku",
		label: "SKU",
		visible: true,
		sortable: true
	},
	{
		key: "price",
		label: "Price",
		visible: true,
		sortable: true
	},
	{
		key: "gtin8",
		label: "GTIN-8",
		visible: true,
		sortable: true
	},
	{
		key: "gtin12",
		label: "GTIN-12",
		visible: true,
		sortable: true
	},
	{
		key: "gtin13",
		label: "GTIN-13",
		visible: true,
		sortable: true
	},
	{
		key: "gtin14",
		label: "GTIN-14",
		visible: true,
		sortable: true
	},
	{
		key: "id",
		label: "Action",
		visible: true,
		content: ProductItemActions
	}
];

export class ProductItemsContext {
	product: _Product;
	table: TableContext<_ProductItem, ProductItemSearch>;
	isAddItemOpen: WritableAtom<boolean> = atom(false);

	constructor(obj: ProductItemsContextOption) {
		this.product = obj.product;
		this.table = createTableContext<_ProductItem, ProductItemSearch>({
			filter: { where: { productId: obj.product.id }, query: { limit: 20 } },
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
			},
			showColumnFilter: true
		});
	}

	// Functions

	openProductItemAddDialog() {
		if (this.isAddItemOpen.get() == false) this.isAddItemOpen.set(true);
	}
}

export function createProductItemContext(option: ProductItemsContextOption) {
	return setContext("productItemsContext", new ProductItemsContext(option));
}

export function getProductItemsContext() {
	return getContext<ProductItemsContext>("productItemsContext");
}
