<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle } from "$lib/components";
	import { ProductItemRepository } from "$repositories";
	import { onMount } from "svelte";
	import { createProductItemContext, type _ProductItem } from "./ProductItem";
	import ProductItemDetailsForm from "./ProductItemDetailsForm.svelte";

	const id = $page.params.id;

	const context = createProductItemContext({
		fetchProductItemCallback: async (ctx) => {
			const result = await ProductItemRepository.get(id).catch(async (e) => {
				await goto("/products");
				toast.error({ message: "Product Item not found" });
			});
			if (result) {
				ctx.productItem.set(result as _ProductItem);
			}
		}
	});
	const productItem = context.productItem;

	onMount(() => {
		context.fetchProduct();
	});

	// States
	const toast = getToastState();
</script>

{#if $productItem}
	<PageTitle
		title="Product Item - {$productItem.name}"
		id={$productItem.id}
		breadcrumbs={[
			{ label: "Products", path: "/products" },
			{ label: `${$productItem.product.name}`, path: "/products/" + $productItem.product.id },
			{ label: "Product Items", path: "/products/" + $productItem.product.id + "?page=items" },
			{ label: "Edit Product Item", path: "/products/items/" + $productItem.id, currentPage: true }
		]}
	/>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-md shadow-md">
		<div class="grid grid-cols-5 gap-4">
			<ProductItemDetailsForm />
		</div>
	</div>
{/if}
