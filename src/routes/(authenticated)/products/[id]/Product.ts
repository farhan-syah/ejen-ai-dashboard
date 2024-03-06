import { UserState } from "$applications";
import { validatePermissions, type TabItem } from "$lib/components";
import Prisma from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type Product = Prisma.Product & {
	categories?: ProductCategory[];
	images?: { path: string; id: string }[];
};
export type ProductCategory = Pick<Prisma.ProductCategory, "id" | "name">;

export const ProductTab = {
	info: "Info",
	items: "Items",
	inventory: "Inventory",
	shipping: "Shipping",
	promotions: "Promotions",
	analytics: "Analytics",
	orders: "Orders",
	logs: "Logs"
};

export type ProductTab = (typeof ProductTab)[keyof typeof ProductTab];

export const productTabs: TabItem[] = Object.entries(ProductTab).map((e) => {
	return {
		label: e[1],
		key: e[0]
	};
});

export const productKeys = Object.keys(ProductTab);

export type ProductContextOption = {
	fetchProductCallback: (context: ProductContext) => Promise<Product | void>;
	index?: number;
};

export class ProductContext {
	index: WritableAtom<number>;
	product: WritableAtom<Product> = atom(undefined);

	private readonly fetchProductCallback: (context: this) => Promise<Product | void>;

	constructor(obj: ProductContextOption) {
		this.index = atom(obj.index ?? 0);
		this.fetchProductCallback = obj.fetchProductCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["Product.manage", "Product.update"], permissions);
	});

	async fetchProduct() {
		this.fetchProductCallback(this);
	}
}

export function createProductContext(option: ProductContextOption) {
	return setContext("productContext", new ProductContext(option));
}

export function getProductContext() {
	return getContext<ProductContext>("productContext");
}
