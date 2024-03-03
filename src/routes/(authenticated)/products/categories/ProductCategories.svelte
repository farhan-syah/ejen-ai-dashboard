<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { ProductCategoryRepository } from "$repositories";
	import type { ProductCategorySearch } from "../../../$api/routes/product-category/product-category.schema";
	import {
		productCategoryColumns,
		toProductCategoryCSV,
		type ProductCategory
	} from "./product-categories";

	const tableContext = createTableContext<ProductCategory, ProductCategorySearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: productCategoryColumns,
		limit: 20,
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
			return ProductCategoryRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toProductCategoryCSV,
		bulkActions: {
			"Bulk Action A": async (selected) => {
				await delay(3000);
			},
			"Bulk Action B": async () => {
				await delay(3000);
				throw "Bulk Action Error";
			}
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
	<div slot="action" class="mt-0.5">
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
