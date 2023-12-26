<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { Product } from "../../Products";
	export let productCategory: Product;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	link={`/products/${productCategory.id}`}
	onClick={() => {
		goto(`/products/${productCategory.id}`);
	}}
/>
