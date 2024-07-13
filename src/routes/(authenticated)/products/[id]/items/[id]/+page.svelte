<script>
	import { Guard } from "$lib/components";
	import ProductItem from "./ProductItem.svelte";
</script>

<Guard
	requiredPermissions={[
		"ProductItem.manage",
		"ProductItem.view",
		"ProductItem.update",
		"ProductItem.delete"
	]}
	redirect
	redirectPath="/products"
>
	<ProductItem />
</Guard>
