<script lang="ts">
	import type { ProductUpdateInput } from "$api/routes/product/product.schema";
	import { UserState, getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		ImageField,
		PriceField,
		SearchField,
		ToggleField,
		Tooltip,
		validatePermissions
	} from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import type { Product, ProductCategory } from "../Products";
	import ProductDeleteButton from "./ProductDeleteButton.svelte";

	// Variables

	export let product: Product;
	export let fetchProduct: () => Promise<any>;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: product.id
	});

	const nameController = new FormControl({
		name: "name",
		value: product.name,
		required: true
	});

	const skuController = new FormControl({
		name: "sku",
		value: product.sku,
		required: true
	});

	const retailPriceController = new FormControl<number>({
		name: "retailPrice",
		value: product.retailPrice,
		required: true
	});

	const activeController = new FormControl<boolean>({
		name: "active",
		required: true,
		value: product.active
	});

	const productCategoryController = new FormControl<ProductCategory[]>({
		name: "categories",
		value: product.categories
	});

	const form = new FormGroup([
		nameController,
		skuController,
		retailPriceController,
		activeController,
		productCategoryController
	]);
	const valid = form.valid;

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

			await ProductRepository.update(product.id, {
				data: data
			});

			await fetchProduct();

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

	// Permissions

	const hasEditPermission = validatePermissions(
		["Product.manage", "Product.update"],
		UserState.permissions.get()
	);

	// Functions

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

<div class="grid grid-cols-5 grid-flow-col gap-4">
	<TextField controller={idController} label="ID" class="col-col-1" disabled>
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
		class="col-col-1"
		disabled={!$editable}
	/>
	<TextField controller={skuController} label="SKU" class="col-col-1" disabled={!$editable} />
	<PriceField
		controller={retailPriceController}
		label="Price"
		class="col-col-1"
		decimalPlaces={0}
		disabled={!$editable}
	/>
	<ToggleField
		controller={activeController}
		class="col-start-1"
		label="Active"
		disabled={!$editable}
	/>
	<SearchField
		controller={productCategoryController}
		label="Categories"
		class="col-col-1"
		onSearch={handleCategorySearch}
		disabled={!$editable}
		transformResult={(result) => result.name}
		transformSelectedItem={(selectedItem) => selectedItem.name}
	/>
	<ImageField label="Image" class="col-col-2"></ImageField>
	{#if hasEditPermission}
		<div class="flex gap-2 col-start-1">
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
					<ProductDeleteButton {product} />
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
</div>
<FormDebugger formGroup={form} />
