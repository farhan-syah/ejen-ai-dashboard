<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { _ProductItem } from "../../ProductItemsTab";
	export let productItem: _ProductItem;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	link={`/products/${productItem.productId}/items/${productItem.id}`}
	onClick={() => {
		goto(`/products/${productItem.productId}/items/${productItem.id}`);
	}}
/>
