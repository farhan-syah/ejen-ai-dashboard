<script lang="ts">
	import { page } from "$app/stores";
	import { Card, PageTitle } from "$lib/components";
	import { ProductRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";
	// import type { Product } from "../product-categories";
	import type { Product } from "../Products";
	import ProductDetailsForm from "./ProductDetailsForm.svelte";

	const id = $page.params.id;
	const product: WritableAtom<Product | undefined> = atom();

	onMount(() => {
		fetchData();
	});

	async function fetchData() {
		product.set(await ProductRepository.get(id));
	}
</script>

{#if $product}
	<PageTitle
		title="Product Category - {$product.name}"
		id={$product.id}
		breadcrumbs={[
			{ label: "Products", path: "/products" },
			{ label: "Categories", path: "/products/categories" },
			{ label: "Edit Category", path: "/products/categories/" + id, currentPage: true }
		]}
	/>
	<Card>
		{#key $product}
			<ProductDetailsForm product={$product} fetchProduct={fetchData} />
		{/key}
	</Card>
{/if}
