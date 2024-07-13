<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle, Tab, type TabItem } from "$lib/components";
	import { ProductItemRepository } from "$repositories";
	import { onMount } from "svelte";
	import {
		ProductItemTab,
		createProductItemContext,
		productItemKeys,
		productItemTabs,
		type _ProductItem
	} from "./ProductItem";
	import ProductItemInfoTab from "./_tabs/info/ProductItemInfoTab.svelte";

	const id = $page.params.id;
	const initialPage = $page.url.searchParams.get("page");
	const tabs: TabItem[] = productItemTabs;
	const keys = productItemKeys;
	const initialIndex = keys.findIndex((key) => key === initialPage);

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

	const index = context.index;
	const productItem = context.productItem;

	onMount(() => {
		context.fetchProductItem();
	});

	// States
	const toast = getToastState();

	// Functions

	function handleSwitchTab(i: number) {
		if ($index != i) {
			index.set(i);
			$page.url.searchParams.set("page", keys[i]);
			goto($page.url, { replaceState: true });
		}
	}
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

	<Tab {tabs} index={$index} onClick={handleSwitchTab}>
		<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
			{#if tabs[$index].label === ProductItemTab.info}
				<ProductItemInfoTab />
			{/if}
		</div>
	</Tab>
{/if}
