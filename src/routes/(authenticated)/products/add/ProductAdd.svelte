<script lang="ts">
	import { PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import ProductAddForm from "./ProductAddForm.svelte";
</script>

<PageTitle
	title="Add Product"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Add", path: "/products/add", currentPage: true }
	]}
/>

<Card>
	<ProductAddForm />
</Card>
