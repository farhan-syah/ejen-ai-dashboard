import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { ProductItem } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _ProductItem = ProductItem & { product: { id: string; name: string } };

export type ProductItemContextOption = {
	fetchProductItemCallback: (context: ProductItemContext) => Promise<_ProductItem | void>;
};

export class ProductItemContext {
	productItem: WritableAtom<_ProductItem> = atom(undefined);

	private readonly fetchProductCallback: (context: this) => Promise<_ProductItem | void>;

	constructor(obj: ProductItemContextOption) {
		this.fetchProductCallback = obj.fetchProductItemCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["ProductItem.manage", "ProductItem.update"], permissions);
	});

	async fetchProduct() {
		this.fetchProductCallback(this);
	}
}

export function createProductItemContext(option: ProductItemContextOption) {
	return setContext("productItemContext", new ProductItemContext(option));
}

export function getProductItemContext() {
	return getContext<ProductItemContext>("productItemContext");
}
