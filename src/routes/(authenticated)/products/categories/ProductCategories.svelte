<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button, PageTitle, Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";

	const tableContext = createTableContext({
		columns: [{ key: "id", label: "Id", visible: true }],
		onSearch: (f) => Promise.resolve([{ id: 2 }])
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
