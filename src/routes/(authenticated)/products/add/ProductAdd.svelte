<script lang="ts">
	import { FormControl, PageTitle, SearchField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import TextField from "$lib/components/form/text-field/TextField.svelte";

	const productNameController = new FormControl({ required: true });
</script>

<PageTitle
	title="Add Product"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Add", path: "/products/add", currentPage: true }
	]}
/>

<Card class="grid grid-cols-6 gap-4">
	<TextField controller={productNameController} label="Product Name" class="form-field" />
	<SearchField
		label="Categories"
		class="form-field"
		onSearch={async () => {
			return [{ name: "abcd" }, { name: "1234" }];
		}}
		transformResult={(result) => result.name}
		transformSelectedItem={(selectedItem) => selectedItem.name}
	/>
</Card>
