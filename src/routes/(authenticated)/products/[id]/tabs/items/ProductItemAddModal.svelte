<script lang="ts">
	import type { ProductItemCreateInput } from "$api/routes/product-item/product-item.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Modal,
		PriceField,
		TextField
	} from "$lib/components";
	import { ProductItemRepository } from "$repositories";
	import { getProductItemsContext } from "./ProductItemsTab";

	// Context

	const productItemsContext = getProductItemsContext();

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const isModalOpen = productItemsContext.isAddItemOpen;

	//  Forms

	const productIdController = new FormControl({
		name: "productId",
		required: true,
		value: productItemsContext.product.id
	});

	const nameController = new FormControl({
		name: "name",
		required: true
	});

	const skuController = new FormControl({
		name: "sku",
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "price",
		required: true
	});

	const form = new FormGroup<ProductItemCreateInput>([
		productIdController,
		nameController,
		skuController,
		retailPriceController
	]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();

			await ProductItemRepository.create({
				data: data
			});

			productItemsContext.isAddItemOpen.set(false);
			productItemsContext.table.search();

			toastState.success({
				message: "Product item has been created"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<Modal isOpen={isModalOpen}>
	<div class="modal-body grid grid-cols-6 gap-3">
		<div class="col-span-full grid grid-cols-subgrid gap-3">
			<TextField
				controller={productIdController}
				class="col-span-full sm:col-span-3"
				label="Product ID"
				disabled
			/>
		</div>
		<TextField controller={nameController} label="Product Item Name" class="col-modal-1/2" />
		<TextField controller={skuController} label="Unique SKU" class="col-modal-1/2" />
		<PriceField
			controller={retailPriceController}
			label="Recommended Retail Price"
			class="col-modal-1/2"
			decimalPlaces={2}
		/>
		<div class="col-span-full">
			<Button valid={$valid} onClick={handleSaveForm} />
		</div>
		<div class="col-span-full">
			<FormDebugger formGroup={form} />
		</div>
	</div>
</Modal>
