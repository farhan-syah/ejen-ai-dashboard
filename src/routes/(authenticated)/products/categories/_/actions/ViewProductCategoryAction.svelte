<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { ProductCategory } from "../../product-categories";
	export let productCategory: ProductCategory;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	onClick={() => {
		goto(`/products/categories/${productCategory.id}`);
	}}
/>
