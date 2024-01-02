<script lang="ts">
	import type { ProductUpdateInput } from "$api/routes/product/product.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		PriceField,
		SearchField,
		TextField,
		ToggleField,
		Tooltip
	} from "$lib/components";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import { getProductContext, type ProductCategory } from "../../Product";
	import ProductDeleteButton from "./ProductDeleteButton.svelte";

	// Context

	const context = getProductContext();
	const product = context.product;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $product.id
	});

	const nameController = new FormControl({
		name: "name",
		value: $product.name,
		required: true
	});

	const skuController = new FormControl({
		name: "sku",
		value: $product.sku,
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "retailPrice",
		value: $product.retailPrice,
		required: true
	});

	const activeController = new FormControl<boolean>({
		name: "active",
		required: true,
		value: $product.active
	});

	const productCategoryController = new FormControl<ProductCategory[]>({
		name: "categories",
		value: $product.categories
	});

	const form = new FormGroup([
		nameController,
		skuController,
		retailPriceController,
		activeController,
		productCategoryController
	]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get() as ProductUpdateInput;
			const productCategories = productCategoryController.value;

			if (productCategories) {
				data.categories = {
					set: productCategories.map((c) => {
						return { id: c.id };
					})
				};
			}

			await ProductRepository.update($product.id, {
				data: data
			});

			await context.fetchProduct();

			toastState.add({
				type: "success",
				message: "Changes have been saved"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}

	async function handleCategorySearch(input?: string) {
		const selectedCategoryIds: string[] =
			productCategoryController.value?.map((category) => category.id) ?? [];
		const categories = await ProductCategoryRepository.search({
			where: {
				id: {
					notIn: selectedCategoryIds
				},
				name: {
					contains: input,
					mode: "insensitive"
				}
			},
			query: {
				select: {
					id: true,
					name: true
				}
			}
		});
		return categories;
	}
</script>

<TextField controller={idController} label="ID" class="col-span-2" disabled>
	<div slot="postfix" class="text-blue-500 h-full border-l bg-white rounded-r pointer">
		<Tooltip
			tooltip="Copy"
			class="h-full flex items-center p-2 "
			onClick={async () => {
				if (idController.value) {
					await navigator.clipboard.writeText(idController.value);
					toastState.add({
						type: "info",
						key: "id",
						message: "Copied"
					});
				}
			}}
		>
			<Icon icon="bx:copy" />
		</Tooltip>
	</div>
</TextField>
<TextField
	controller={nameController}
	label="Product Name"
	class="col-span-2"
	disabled={!$editable}
/>
<TextField controller={skuController} label="SKU" class="col-span-2" disabled={!$editable} />
<PriceField
	controller={retailPriceController}
	label="Price"
	class="col-span-2"
	decimalPlaces={0}
	disabled={!$editable}
/>
<ToggleField
	controller={activeController}
	label="Active"
	disabled={!$editable}
	class="col-span-2"
/>
<SearchField
	controller={productCategoryController}
	label="Categories"
	onSearch={handleCategorySearch}
	disabled={!$editable}
	transformResult={(result) => result.name}
	transformSelectedItem={(selectedItem) => selectedItem.name}
	class="col-span-2"
/>
<div class="col-span-2">
	{#if $hasEditPermission}
		<div class="flex gap-2">
			{#if $editable}
				<Button valid={$valid} label="Save Changes" onClick={handleSaveForm} />
				<Button
					label="Cancel"
					class="button-red"
					onClick={() => {
						editable.set(false);
						form.resetValue();
					}}
				/>
				<Guard requiredPermissions={["Product.manage", "Product.delete"]}>
					<ProductDeleteButton product={$product} />
				</Guard>
			{:else}
				<Button
					label="Edit"
					class="button-green"
					onClick={() => {
						editable.set(true);
					}}
				/>
			{/if}
		</div>
	{/if}
	<FormDebugger formGroup={form} />
</div>
