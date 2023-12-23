<script lang="ts">
	import type { ProductCategoryUncheckedCreateInput } from "$api/routes/product-category/product-category.schema";
	import { goto } from "$app/navigation";
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

	// States

	const appState = getAppState();
	const toastState = getToastState();

	//  Forms

	const nameController = new FormControl({
		name: "name",
		required: true
	});
	const descriptionController = new FormControl({
		name: "description"
	});

	const form = new FormGroup<ProductCategoryUncheckedCreateInput>([
		nameController,
		descriptionController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const productCategory = await ProductCategoryRepository.create({
				data: form.value.get()
			});

			await goto(`/products/categories/${productCategory.id}`);

			toastState.success({
				message: "Category has been created"
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
	<TextField controller={nameController} label="Category Name" class="col-r1" />
	<TextAreaField controller={descriptionController} label="Category Description" class="col-r1" />
	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} />
