<script lang="ts">
	import { Guard } from "$lib/components";
	import ProductCategories from "./ProductCategories.svelte";
</script>

<Guard
	requiredPermissions={[
		"ProductCategory.manage",
		"ProductCategory.view",
		"ProductCategory.update",
		"ProductCategory.delete"
	]}
	redirect
	redirectPath="/products"
>
	<ProductCategories />
</Guard>
