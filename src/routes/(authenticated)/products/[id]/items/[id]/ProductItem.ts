import { UserState } from "$applications";
import { validatePermissions, type TabItem } from "$lib/components";
import type { ProductItem } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _ProductItem = ProductItem & {
	product: { id: string; name: string };
	images?: { path: string; id: string }[];
};

export type ProductItemContextOption = {
	fetchProductItemCallback: (context: ProductItemContext) => Promise<_ProductItem | void>;
	index?: number;
};

export class ProductItemContext {
	index: WritableAtom<number>;
	productItem: WritableAtom<_ProductItem> = atom(undefined);

	private readonly fetchProductItemCallback: (context: this) => Promise<_ProductItem | void>;

	constructor(obj: ProductItemContextOption) {
		this.fetchProductItemCallback = obj.fetchProductItemCallback;
		this.index = atom(obj.index ?? 0);
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["ProductItem.manage", "ProductItem.update"], permissions);
	});

	async fetchProductItem() {
		this.fetchProductItemCallback(this);
	}
}

export function createProductItemContext(option: ProductItemContextOption) {
	return setContext("productItemContext", new ProductItemContext(option));
}

export function getProductItemContext() {
	return getContext<ProductItemContext>("productItemContext");
}

export const ProductItemTab = {
	info: "Info",
	pricing: "Pricing"
};

export type ProductItemTab = (typeof ProductItemTab)[keyof typeof ProductItemTab];

export const productItemTabs: TabItem[] = Object.entries(ProductItemTab).map((e) => {
	return {
		label: e[1],
		key: e[0]
	};
});

export const productItemKeys = Object.keys(ProductItemTab);
