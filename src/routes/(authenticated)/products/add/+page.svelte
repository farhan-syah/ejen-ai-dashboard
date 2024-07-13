<script>
	import { Guard } from "$lib/components";
	import ProductAdd from "./ProductAdd.svelte";
</script>

<Guard requiredPermissions={["Product.manage", "Product.add"]} redirect redirectPath="/products">
	<ProductAdd />
</Guard>
