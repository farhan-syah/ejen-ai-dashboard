<script lang="ts">
	import type { ProductUncheckedCreateInput } from "$api/routes/product/product.schema";
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		SearchField,
		ToggleField
	} from "$lib/components";
	import PriceField from "$lib/components/form/text-field/PriceField.svelte";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";
	import type { ProductCategory } from "../products";

	// States

	const appState = getAppState();
	const toastState = getToastState();
	async function handleCategorySearch(input: string) {
		const selectedCategoryIds: string[] =
			productCategoryController.value?.map((category) => category.id) ?? [];
		const categories = await ProductCategoryRepository.search({
			action: "search",
			where: {
				id: {
					notIn: selectedCategoryIds
				}
			}
		});
		return categories;
	}

	// Options

	const productCategoryController = new FormControl<ProductCategory[]>();

	//  Forms

	const nameController = new FormControl({
		name: "name",
		required: true
	});

	const skuController = new FormControl({
		name: "sku",
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "retailPrice",
		required: true
	});

	const activeController = new FormControl<boolean>({
		name: "active",
		required: true,
		value: true
	});

	const form = new FormGroup<ProductUncheckedCreateInput>([
		nameController,
		skuController,
		retailPriceController,
		activeController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const product = await ProductRepository.create({
				data: form.value.get()
			});

			await goto(`/products/${product.id}`);

			toastState.success({
				message: "Product has been created"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Product Name" class="col-r1" />
	<TextField controller={skuController} label="SKU" class="col-r1" />
	<PriceField controller={retailPriceController} label="Price" class="col-r1" decimalPlaces={0} />
	<ToggleField controller={activeController} class="col-start-1" label="Active" />
	<SearchField
		controller={productCategoryController}
		label="Categories"
		class="col-r1"
		onSearch={handleCategorySearch}
		transformResult={(result) => result.name}
		transformSelectedItem={(selectedItem) => selectedItem.name}
	/>
	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} />
