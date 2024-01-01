<script>
	import { Guard } from "$lib/components";
	import Product from "./Product.svelte";
</script>

<Guard
	requiredPermissions={["Product.manage", "Product.view", "Product.update", "Product.delete"]}
	redirect
	redirectPath="/products/categories"
>
	<Product />
</Guard>
