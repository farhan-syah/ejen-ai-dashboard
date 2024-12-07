<script lang="ts">
	import type { ProductItemUpdateInput } from "$api/routes/product-item/product-item.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, FormControl, FormDebugger, FormGroup, SelectField } from "$lib/components";
	import NumField from "$lib/components/form/text-field/NumField.svelte";
	import { ProductItemRepository } from "$repositories";
	import { UnitRepository } from "$repositories/unit.repository";
	import type { FieldOption } from "$types";
	import { UnitType, type Unit } from "@prisma/client";
	import { atom } from "nanostores";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { getProductItemContext } from "../../ProductItem";

	// Context

	const context = getProductItemContext();
	const productItem = context.productItem;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	// Forms

	const depthController = new FormControl<number>({
		name: "depth",
		required: true,
		value: $productItem.depth
	});

	const widthController = new FormControl<number>({
		name: "width",
		allowNull: true,
		value: $productItem.width
	});

	const heightController = new FormControl<number>({
		name: "height",
		allowNull: true,
		value: $productItem.height
	});
	const diameterController = new FormControl<number>({
		name: "diameter",
		allowNull: true,
		value: $productItem.diameter
	});

	const unitOptions = writable<FieldOption[]>([]);
	const unitController = new FormControl<Unit>({
		name: "dimensionUnitId",
		required: true,
		value:
			$productItem.dimensionUnit != null
				? ($productItem.dimensionUnit as unknown as Unit)
				: undefined,
		outputTransformer: (value) => value?.id
	});

	const form = new FormGroup<ProductItemUpdateInput>([
		depthController,
		widthController,
		heightController,
		unitController,
		diameterController
	]);

	const valid = form.valid;

	// Lifecycle

	onMount(async () => {
		const units = await UnitRepository.search({ where: { type: UnitType.Length } });
		const _unitOptions: FieldOption[] = units.map((unit) => {
			return { value: unit, label: unit.symbol };
		});
		unitOptions.set(_unitOptions);
	});

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();

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

<div class="grid grid-cols-3 gap-4">
	<div class="col-span-full">
		<div class="font-semibold">Product Dimension</div>
		<li>
			Dimension is optional, but it will help your customer learn the real product dimension
			dimension
		</li>
		<li>This is not the packaging dimension, for packaging dimension, go to the packaging tab</li>
	</div>
	<div class=" col-span-full mx-auto flex gap-2">
		<img src="/images/box-dimension.webp" alt="BoxDimension" class=" h-28" />
		<img src="/images/shirt-dimension.png" alt="ShirtDimension" class=" h-28" />
		<img src="/images/cylinder-dimension.jpg" alt="CylinderDimension" class=" h-24" />
	</div>
	<div class=" col-span-full grid grid-cols-5 gap-4">
		<NumField
			controller={depthController}
			label="Length / Depth"
			disabled={!$editable}
			decimalPlaces={5}
		/>
		<NumField controller={widthController} label="Width" disabled={!$editable} decimalPlaces={5} />
		<NumField
			controller={heightController}
			label="Height"
			disabled={!$editable}
			decimalPlaces={5}
		/>
		<NumField
			controller={diameterController}
			label="Diameter"
			disabled={!$editable}
			decimalPlaces={5}
		/>
		<SelectField
			label="Unit"
			controller={unitController}
			options={$unitOptions}
			valueTransform={(unit) => unit?.symbol}
			disabled={!$editable}
		/>
	</div>
	<div class="col-span-2">
		{#if $hasEditPermission}
			<div class="flex gap-2">
				{#if $editable}
					<Button
						valid={$valid}
						label="Save Changes"
						class="button-green"
						onClick={handleSaveForm}
					/>
					<Button
						label="Cancel"
						class="button-red"
						onClick={() => {
							editable.set(false);
							form.resetValue();
						}}
					/>
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
</div>
