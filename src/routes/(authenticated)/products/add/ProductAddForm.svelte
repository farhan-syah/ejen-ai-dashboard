<script lang="ts">
	import type { ProductCreateInput } from "$api/routes/product/product.schema";
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, FormControl, FormDebugger, FormGroup, SearchField } from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import PriceField from "$lib/components/form/text-field/PriceField.svelte";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { PublishStatus } from "@prisma/client";
	import type { _ProductCategory } from "../Products";

	// States

	const appState = getAppState();
	const toastState = getToastState();
	async function handleCategorySearch(input?: string) {
		const selectedCategoryIds: string[] =
			productCategoryController.value?.map((category) => category.id) ?? [];
		const categories = await ProductCategoryRepository.search({
			where: {
				id: {
					notIn: selectedCategoryIds
				}
			}
		});
		return categories;
	}

	//  Forms

	const nameController = new FormControl({
		name: "name",
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "price",
		required: true
	});

	const statusController = new FormControl<PublishStatus>({
		name: "status",
		required: true,
		value: PublishStatus.Draft
	});

	const statusOptions: FieldOption[] = Object.values(PublishStatus).map((e) => {
		return { value: e, label: e };
	});
	const productCategoryController = new FormControl<_ProductCategory[]>({ name: "categories" });

	const form = new FormGroup<ProductCreateInput>([
		nameController,
		retailPriceController,
		statusController,
		productCategoryController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();
			const productCategories = productCategoryController.value;

			if (productCategories && productCategories.length > 0) {
				data.categories = {
					connect: productCategories.map((c) => {
						return { id: c.id };
					})
				};
			}

			const product = await ProductRepository.create({
				data: data
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
	<TextField controller={nameController} label="Product Name" class="col-col-1" />
	<PriceField
		controller={retailPriceController}
		label="Recommended Retail Price"
		class="col-col-1"
		decimalPlaces={2}
	/>
	<SelectField
		controller={statusController}
		label="Status"
		class="  col-start-1"
		options={statusOptions}
	/>

	<SearchField
		controller={productCategoryController}
		label="Categories"
		class="col-col-1"
		onSearch={handleCategorySearch}
		transformResult={(result) => result.name}
		transformSelectedItem={(selectedItem) => selectedItem.name}
	/>
	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} />
