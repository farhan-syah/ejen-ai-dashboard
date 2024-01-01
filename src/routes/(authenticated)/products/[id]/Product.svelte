<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle, Tab, type TabItem } from "$lib/components";
	import { ProductRepository } from "$repositories";
	import { onMount } from "svelte";
	import { ProductTab, createProductContext, productKeys, productTabs } from "./Product";
	import ProductDetails from "./ProductDetails.svelte";

	const id = $page.params.id;
	const initialPage = $page.url.searchParams.get("page");
	const tabs: TabItem[] = productTabs;
	const keys = productKeys;

	const initialIndex = keys.findIndex((key) => key === initialPage);
	const context = createProductContext({
		index: initialIndex != -1 ? initialIndex : 0,
		fetchProductCallback: async (ctx) => {
			const result = await ProductRepository.get(id).catch(async (e) => {
				await goto("/products");
				toast.error({ message: "Product not found" });
			});
			if (result) {
				ctx.product.set(result);
			}
		}
	});
	const index = context.index;
	const product = context.product;

	onMount(() => {
		context.fetchProduct();
	});

	function handleSwitchTab(i: number) {
		if ($index != i) {
			index.set(i);
			$page.url.searchParams.set("page", keys[i]);
			goto($page.url, { replaceState: true });
		}
	}

	// States
	const toast = getToastState();
</script>

{#if $product}
	<PageTitle
		title="Product - {$product.name}"
		id={$product.id}
		breadcrumbs={[
			{ label: "Products", path: "/products" },
			{ label: "Categories", path: "/products/categories" },
			{ label: "Edit Category", path: "/products/categories/" + id, currentPage: true }
		]}
	/>

	<Tab {tabs} index={$index} onClick={handleSwitchTab}>
		<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
			{#if tabs[$index].label === ProductTab.info}
				<ProductDetails />
			{/if}
		</div>
	</Tab>
{/if}
