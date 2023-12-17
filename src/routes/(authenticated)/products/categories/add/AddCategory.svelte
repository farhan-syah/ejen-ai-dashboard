<script>
	import { PageTitle } from "$lib/components";
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
<Card></Card>
