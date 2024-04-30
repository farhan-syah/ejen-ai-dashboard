<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Table } from "$lib/components";
	import { atom } from "nanostores";
	import type { _Product } from "../../../Products";
	import { getProductContext } from "../../Product";
	import ProductItemAddModal from "./ProductItemAddModal.svelte";
	import { createProductItemContext, type _ProductItem } from "./ProductItemsTab";

	// Context

	const productContext = getProductContext();
	const product = productContext.product;
	const hasEditPermission = productContext.hasEditPermission;
	const productItemsContext = createProductItemContext({ product: $product as _Product });

	// States

	const appState = getAppState();
	const toastState = getToastState();

	// Stores

	const productItems = atom<_ProductItem[]>([]);
</script>

<div class="flex flex-col gap-2">
	<div class=" font-semibold">Guideline</div>
	<div>
		<li>Product item are product variation with different SKUs.</li>
		<li>
			It is recommended to have a separate SKU for each of product variation such as color, size and
			packaging.
		</li>
	</div>
	<hr class="my-2" />
	<div class="flex gap-3 items-center">
		<div class="font-semibold">Product Items</div>
		<div>
			<Button
				class="button-cyan p-1.5 text-2xs"
				onClick={() => productItemsContext.openProductItemModal()}
			>
				<div slot="label">
					<div>Add Product Item</div>
				</div>
			</Button>
		</div>
	</div>
	<Table context={productItemsContext.table} />
</div>

<ProductItemAddModal />
