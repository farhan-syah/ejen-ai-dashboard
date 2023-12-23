<script>
	import { Guard } from "$lib/components";
	import ProductAdd from "./ProductAdd.svelte";
</script>

<Guard requiredPermissions={["Product.manage", "Productadd"]} redirect redirectPath="/products">
	<ProductAdd />
</Guard>
