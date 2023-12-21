<script lang="ts">
	import type { ProductCategoryUpdateData } from "$api/routes/product-category/product-category.schema";
	import { Button, FormControl, FormDebugger, FormGroup, TextAreaField } from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import type { ProductCategory } from "../product-categories";

	export let productCategory: ProductCategory;

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
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Category Name" class="form-field" />
	<div class="form-field hidden sm:block"></div>
	<TextAreaField
		controller={descriptionController}
		label="Category Description"
		class="form-field"
	/>
	<div class="form-field hidden sm:block"></div>
	<div>
		<Button valid={$valid} class="" />
	</div>
</div>

<FormDebugger formGroup={form} />
