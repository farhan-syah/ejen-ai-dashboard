<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Card, FormControl, PageTitle, TextAreaField, TextField } from "$lib/components";
	import { ProductCategoryRepository } from "$repositories";
	import { computed } from "nanostores";
	const appState = getAppState();
	const toastState = getToastState();
	const nameController = new FormControl({ required: true });
	const descriptionController = new FormControl();

	const formValid = computed([nameController.valid], (emailValid) => {
		return emailValid;
	});

	async function handleSubmit() {
		const name = nameController.writableValue.get();
		const description = descriptionController.writableValue.get();
		if (!name) return;

		try {
			appState.loading.set(true);
			const category = await ProductCategoryRepository.create({
				data: {
					name: name,
					description: description
				}
			});
			await goto("/products/categories/" + category.id);
			toastState.add({ type: "success", message: "Category has been added" });
		} catch (e) {
			appState.error.set(e);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<PageTitle
	title="Add Product Category"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Categories", path: "/products/categories" },
		{ label: "Add Category", path: "/products/categories/add", currentPage: true }
	]}
/>
<Card>
	<div class="grid grid-cols-6 gap-4">
		<TextField controller={nameController} label="Category Name" class="form-field" />
		<div class="form-field hidden sm:block"></div>
		<TextAreaField controller={descriptionController} label="Description" class="form-field" />
	</div>
	<div class="mt-4">
		<Button valid={$formValid} onClick={handleSubmit} />
	</div>
</Card>
