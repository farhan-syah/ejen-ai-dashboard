<script lang="ts">
	import type { ProductCategory } from "$api/types/prisma-client";
	import { page } from "$app/stores";
	import { Card, PageTitle } from "$lib/components";
	import { ProductCategoryRepository } from "$repositories";
	import { onMount } from "svelte";

	const id = $page.params.id;

	onMount(() => {
		fetchData();
	});

	async function fetchData() {
		productCategory = await ProductCategoryRepository.get(id);
	}

	let productCategory: ProductCategory;
</script>

<PageTitle
	title="Edit Product Category"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Categories", path: "/products/categories" },
		{ label: "Edit Category", path: "/products/categories/" + id, currentPage: true }
	]}
/>

{#if productCategory}
	<Card>
		{productCategory.name}
	</Card>
{/if}
