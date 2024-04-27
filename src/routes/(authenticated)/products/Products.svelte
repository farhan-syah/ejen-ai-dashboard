<script lang="ts">
	import type { ProductSearch } from "$api/routes/product/product.schema";
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { delay } from "$lib/utils";
	import { ProductRepository } from "$repositories";
	import { productColumns, toProductCSV, type _Product } from "./Products";

	const tableContext = createTableContext<_Product, ProductSearch>({
		filter: { where: {}, query: { limit: 20 } },
		columns: productColumns,
		limit: 20,
		selectable: true,
		selectByKey: "id",
		onSearch: async (f) => {
			if (f) return ProductRepository.search(f);
			return [];
		},
		onCount: async (f) => {
			if (f) return ProductRepository.count(f);
			return 0;
		},
		onGetSelected: async (selected) => {
			return ProductRepository.search({
				where: { id: { in: selected as string[] } }
			});
		},
		toCSV: toProductCSV,
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
	title="Products"
	breadcrumbs={[{ label: "Products", path: "/products", currentPage: true }]}
>
	<div slot="action" class="mt-0.5">
		<Button
			link="/products/add"
			label="Add Product"
			onClick={() => {
				goto("/products/add");
			}}
			class="button-xs"
		/>
	</div>
</PageTitle>

<Card>
	<Table context={tableContext} />
</Card>
