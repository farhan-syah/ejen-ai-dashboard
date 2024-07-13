<script lang="ts">
	import type { ProductItemUpdateInput } from "$api/routes/product-item/product-item.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		PriceField,
		TextField,
		Tooltip
	} from "$lib/components";
	import { FormValidator } from "$lib/components/form/controller/form-validator";
	import { ProductItemRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import { getProductItemContext } from "../../ProductItem";
	import ProductItemDeleteButton from "./ProductItemDeleteButton.svelte";

	// Context

	const context = getProductItemContext();
	const productItem = context.productItem;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $productItem.id
	});

	const nameController = new FormControl({
		name: "name",
		value: $productItem.name,
		required: true
	});

	const skuController = new FormControl<string>({
		name: "sku",
		value: $productItem.sku,
		required: true
	});

	const priceController = new FormControl<number>({
		name: "price",
		value: $productItem.price,
		required: true
	});

	const gtin8Controller = new FormControl<string>({
		name: "gtin8",
		value: $productItem.gtin8,
		validators: [FormValidator.length(8)],
		allowNull: true
	});

	const gtin12Controller = new FormControl<string>({
		name: "gtin12",
		value: $productItem.gtin12,
		validators: [FormValidator.length(12)],
		allowNull: true
	});

	const gtin13Controller = new FormControl<string>({
		name: "gtin13",
		value: $productItem.gtin13,
		validators: [FormValidator.length(13)],
		allowNull: true
	});

	const gtin14Controller = new FormControl<string>({
		name: "gtin14",
		value: $productItem.gtin14,
		validators: [FormValidator.length(14)],
		allowNull: true
	});

	const form = new FormGroup<ProductItemUpdateInput>([
		idController,
		nameController,
		skuController,
		priceController,
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

			const data = form.value.get() as ProductItemUpdateInput;

			await ProductItemRepository.update($productItem.id, {
				data: data
			});

			await context.fetchProductItem();

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
	label="Product Item Name"
	class="col-span-2"
	disabled={!$editable}
/>
<PriceField
	controller={priceController}
	label="Retail Price (RRSP)"
	class="col-span-2"
	decimalPlaces={0}
	disabled={!$editable}
/>
<TextField
	controller={gtin8Controller}
	label="GTIN-8 (EAN-8)"
	class="col-span-2"
	allowKeys="numbersOnly"
	preventKeys={[" "]}
	disabled={!$editable}
/>
<TextField
	controller={gtin12Controller}
	label="GTIN-12 (UPC-12)"
	class="col-span-2"
	allowKeys="numbersOnly"
	preventKeys={[" "]}
	disabled={!$editable}
/>
<TextField
	controller={gtin13Controller}
	label="GTIN-13 (EAN-13 / UCC-13)"
	class="col-span-2"
	allowKeys="numbersOnly"
	preventKeys={[" "]}
	disabled={!$editable}
/>
<TextField
	controller={gtin14Controller}
	label="GTIN-14 (ITF-14 )"
	class="col-span-2"
	allowKeys="numbersOnly"
	preventKeys={[" "]}
	disabled={!$editable}
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
				<Guard requiredPermissions={["ProductItem.manage", "ProductItem.delete"]}>
					<ProductItemDeleteButton productItem={$productItem} />
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
