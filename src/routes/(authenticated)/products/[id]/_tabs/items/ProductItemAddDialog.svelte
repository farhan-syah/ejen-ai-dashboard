<script lang="ts">
	import type { ProductItemCreateInput } from "$api/routes/product-item/product-item.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		Dialog,
		FormControl,
		FormDebugger,
		FormGroup,
		PriceField,
		TextField
	} from "$lib/components";
	import { FormValidator } from "$lib/components/form/controller/form-validator";
	import { ProductItemRepository } from "$repositories";
	import { faker } from "@faker-js/faker";
	import { getProductItemsContext } from "./ProductItemsTab";
	// Context

	const productItemsContext = getProductItemsContext();

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const isDialogOpen = productItemsContext.isAddItemOpen;

	//  Forms

	const productIdController = new FormControl({
		name: "productId",
		required: true,
		value: productItemsContext.product.id
	});

	const nameController = new FormControl<string>({
		name: "name",
		required: true,
		faker: faker.commerce.productName
	});

	const skuController = new FormControl<string>({
		name: "sku",
		required: true,
		faker: () => faker.string.alphanumeric(10)
	});

	const retailPriceController = new FormControl<number>({
		name: "price",
		required: true,
		faker: () => faker.number.int({ min: 1000, max: 10000 })
	});

	const gtin8Controller = new FormControl<string>({
		name: "gtin8",
		validators: [FormValidator.length(8)],
		faker: () => faker.string.numeric(8)
	});

	const gtin12Controller = new FormControl<string>({
		name: "gtin12",
		validators: [FormValidator.length(12)],
		faker: () => faker.string.numeric(12)
	});

	const gtin13Controller = new FormControl<string>({
		name: "gtin13",
		validators: [FormValidator.length(13)],
		faker: () => faker.string.numeric(13)
	});

	const gtin14Controller = new FormControl<string>({
		name: "gtin14",
		validators: [FormValidator.length(14)],
		faker: () => faker.string.numeric(14)
	});

	const form = new FormGroup<ProductItemCreateInput>([
		productIdController,
		nameController,
		skuController,
		retailPriceController,
		gtin8Controller,
		gtin12Controller,
		gtin13Controller,
		gtin14Controller
	]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();
			console.log(data);

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

	// Listeners

	isDialogOpen.listen(() => {
		form.resetValue();
	});
</script>

<Dialog isOpen={isDialogOpen}>
	<div class="dialog-body grid grid-cols-6 gap-3">
		<div class="col-span-full grid grid-cols-subgrid gap-3">
			<TextField
				controller={productIdController}
				class="col-span-full sm:col-span-3"
				label="Product ID"
				disabled
			/>
		</div>
		<TextField controller={nameController} label="Product Item Name" class="col-dialog-1/2" />
		<TextField controller={skuController} label="Unique SKU" class="col-dialog-1/2" />
		<PriceField
			controller={retailPriceController}
			label="Recommended Retail Price"
			class="col-dialog-1/2"
			decimalPlaces={2}
		/>
		<hr class="col-span-full my-2" />
		<TextField
			controller={gtin8Controller}
			label="GTIN-8 (EAN-8)"
			class="col-dialog-1/2"
			allowKeys="numbersOnly"
			preventKeys={[" "]}
		/>
		<TextField
			controller={gtin12Controller}
			label="GTIN-12 (UPC-12)"
			class="col-dialog-1/2"
			allowKeys="numbersOnly"
			preventKeys={[" "]}
		/>
		<TextField
			controller={gtin13Controller}
			label="GTIN-13 (EAN-13 / UCC-13)"
			class="col-dialog-1/2"
			allowKeys="numbersOnly"
			preventKeys={[" "]}
		/>
		<TextField
			controller={gtin14Controller}
			label="GTIN-14 (ITF-14 )"
			class="col-dialog-1/2"
			allowKeys="numbersOnly"
			preventKeys={[" "]}
		/>
		<div class="col-span-full">
			<Button valid={$valid} onClick={handleSaveForm} />
		</div>
		<div class="col-span-full">
			<FormDebugger formGroup={form} />
		</div>
	</div>
</Dialog>
