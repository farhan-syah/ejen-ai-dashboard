<script>
	import { Guard } from "$lib/components";
	import ProductCategoryDetails from "./ProductCategoryDetails.svelte";
</script>

<Guard
	requiredPermissions={[
		"ProductCategory.manage",
		"ProductCategory.view",
		"ProductCategory.update",
		"ProductCategory.delete"
	]}
	redirect
	redirectPath="/products/categories"
>
	<ProductCategoryDetails />
</Guard>
