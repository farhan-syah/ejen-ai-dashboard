<script>
	import { Guard } from "$lib/components";
	import ProductCategoryAdd from "./ProductCategoryAdd.svelte";
</script>

<Guard
	requiredPermissions={["ProductCategory.manage", "ProductCategory.create"]}
	redirect
	redirectPath="/products/categories"
>
	<ProductCategoryAdd />
</Guard>
