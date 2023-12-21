<script>
	import { Guard } from "$lib/components";
	import EditCategory from "./ProductCategoryEdit.svelte";
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
	<EditCategory />
</Guard>
