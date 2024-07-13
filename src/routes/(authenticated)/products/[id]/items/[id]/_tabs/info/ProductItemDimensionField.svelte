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

	const lengthController = new FormControl<number>({
		name: "length",
		required: true
	});

	const widthController = new FormControl<number>({
		name: "width",
		required: true
	});

	const heightController = new FormControl<number>({
		name: "height",
		allowNull: true
	});

	const unitOptions = writable<FieldOption[]>([]);
	const unitController = new FormControl<Unit>({
		name: "statusCode",
		required: true,
		transformOutput: (value) => value?.code
	});

	const form = new FormGroup<ProductItemUpdateInput>([
		lengthController,
		widthController,
		heightController,
		unitController
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

<div class="grid grid-cols-3 gap-4">
	<div>Dimension</div>
	<div class=" col-span-full mx-auto flex">
		<img src="/images/box-dimension.webp" alt="BoxDimension" class=" h-40" />
		<img src="/images/shirt-dimension.png" alt="ShirtDimension" class=" h-40" />
	</div>
	<div class=" col-span-full grid grid-cols-4 gap-4">
		<NumField
			controller={lengthController}
			label="Length"
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
