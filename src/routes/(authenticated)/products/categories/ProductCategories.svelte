<script lang="ts">
	import type { ProductCategorySearch } from "$api/routes/product-category/product-category.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { ProductCategoryRepository } from "$repositories";
	import {
		productCategoryColumns,
		toProductCategoryCSV,
		type ProductCategory
	} from "./product-categories";

	const tableContext = createTableContext<ProductCategory, ProductCategorySearch>({
		filter: { where: {}, action: "search", query: { limit: 5 } },
		columns: productCategoryColumns,
		limit: 5,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return ProductCategoryRepository.search(f);
			else return [];
		},
		onCount: async (f) => {
			if (f) return ProductCategoryRepository.count(f);
			// else return [];
			return 1;
		},
		onGetSelected: async (selected) => {
			console.log(selected);
			return ProductCategoryRepository.search({
				action: "search",
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toProductCategoryCSV
	});
</script>

<PageTitle
	title="Categories"
	breadcrumbs={[
		{ label: "Products", path: "/products" },
		{ label: "Categories", path: "/products/categories", currentPage: true }
	]}
>
	<div slot="action">
		<Button
			label="Add Category"
			onClick={() => {
				goto("/products/categories/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>
<Card>
	<Table context={tableContext} />
</Card>
