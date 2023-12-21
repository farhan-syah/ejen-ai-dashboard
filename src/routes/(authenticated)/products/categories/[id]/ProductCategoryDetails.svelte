<script lang="ts">
	import { page } from "$app/stores";
	import { Card, PageTitle } from "$lib/components";
	import { ProductCategoryRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";
	import type { ProductCategory } from "../product-categories";
	import ProductCategoryDetailsForm from "./ProductCategoryDetailsForm.svelte";

	const id = $page.params.id;
	const productCategory: WritableAtom<ProductCategory | undefined> = atom();

	onMount(() => {
		fetchData();
	});

	async function fetchData() {
		productCategory.set(await ProductCategoryRepository.get(id));
	}
</script>

{#if $productCategory}
	<PageTitle
		title="Product Category - {$productCategory.name}"
		id={$productCategory.id}
		breadcrumbs={[
			{ label: "Products", path: "/products" },
			{ label: "Categories", path: "/products/categories" },
			{ label: "Edit Category", path: "/products/categories/" + id, currentPage: true }
		]}
	/>
	<Card>
		{#key $productCategory}
			<ProductCategoryDetailsForm
				productCategory={$productCategory}
				fetchProductCategory={fetchData}
			/>
		{/key}
	</Card>
{/if}
