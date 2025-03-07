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
		Tooltip
	} from "$lib/components";
	import { formatNumber } from "$lib/utils/number";
	import { ProductCategoryRepository, ProductRepository } from "$repositories";

	import { atom } from "nanostores";
	import { getProductContext, type _ProductCategory } from "../../Product";
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

	const priceController = new FormControl<number>({
		name: "price",
		value: $product.price,
		required: true,
		inputTransformer: (value) => formatNumber(value ? value / 100 : undefined, 2)
	});

	const productCategoryController = new FormControl<_ProductCategory[]>({
		name: "categories",
		value: $product.categories
	});

	const form = new FormGroup([nameController, priceController, productCategoryController]);
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

			editable.set(false);

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
			<iconify-icon icon="bx:copy"></iconify-icon>
		</Tooltip>
	</div>
</TextField>
<TextField
	controller={nameController}
	label="Product Name"
	class="col-span-2"
	disabled={!$editable}
/>
<PriceField
	controller={priceController}
	label="Retail Price (RRSP)"
	class="col-span-2"
	decimalPlaces={2}
	disabled={!$editable}
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
				<Button valid={$valid} label="Save Changes" class="button-green" onClick={handleSaveForm} />
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
					class="button-cyan"
					onClick={() => {
						editable.set(true);
					}}
				/>
			{/if}
		</div>
	{/if}
	<FormDebugger formGroup={form} />
</div>
