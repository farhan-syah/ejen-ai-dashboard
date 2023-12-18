<script lang="ts">
	import type { ProductCategorySearch } from "$api/routes/product-category/product-category.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { ProductCategoryRepository } from "$repositories";
	import { productCategoryColumns, type ProductCategory } from "./product-categories";

	const tableContext = createTableContext<ProductCategory, ProductCategorySearch>({
		filter: { where: {}, action: "search" },
		columns: productCategoryColumns,
		onSearch: async (f) => {
			if (f) return ProductCategoryRepository.search(f);
			else return [];
		},
		onCount: async (f) => {
			if (f) return ProductCategoryRepository.count(f);
			// else return [];
			return 1;
		}
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
