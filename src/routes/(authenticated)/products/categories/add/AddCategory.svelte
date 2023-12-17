<script>
	import { PageTitle, TextAreaField, TextField, TipTap } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
</script>

<PageTitle
	title="Add Product Category"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Categories", path: "/products/categories" },
		{ label: "Add Category", path: "/products/categories/add", currentPage: true }
	]}
/>
<Card class="grid grid-cols-6 gap-4">
	<TextField label="Category Name" class="form-field" />
	<div class="form-field hidden sm:block"></div>
	<TextAreaField label="Description" class="form-field" />
	<div class=" col-span-full">
		<TipTap />
	</div>
</Card>
