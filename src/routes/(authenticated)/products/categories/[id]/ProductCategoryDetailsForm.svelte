<script lang="ts">
	import type { ProductCategoryUpdateData } from "$api/routes/product-category/product-category.schema";
	import { UserState, getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		TextAreaField,
		validatePermissions
	} from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { ProductCategoryRepository } from "$repositories";
	import { atom } from "nanostores";
	import type { ProductCategory } from "../product-categories";

	// Variables

	export let productCategory: ProductCategory;
	console.log(productCategory);
	export let fetchProductCategory: () => Promise<any>;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const nameController = new FormControl({
		name: "name",
		value: productCategory.name,
		required: true
	});
	const descriptionController = new FormControl({
		name: "description",
		value: productCategory.description
	});

	const form = new FormGroup<ProductCategoryUpdateData>([nameController, descriptionController]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			await ProductCategoryRepository.update(productCategory.id, {
				data: form.value.get()
			});

			await fetchProductCategory();

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
		["ProductCategory.manage", "ProductCategory.update"],
		UserState.permissions.get()
	);
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField
		controller={nameController}
		label="Category Name"
		class="form-field"
		disabled={!$editable}
	/>
	<div class="form-field hidden sm:block"></div>
	<TextAreaField
		disabled={!$editable}
		controller={descriptionController}
		label="Category Description"
		class="form-field"
	/>
	<div class="form-field hidden sm:block"></div>
	{#if hasEditPermission}
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
