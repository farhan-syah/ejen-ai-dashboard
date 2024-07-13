<script lang="ts">
	import type { _ProductItem } from "../../ProductItemsTab";
	import ActionView from "./ProductItemActionView.svelte";

	export let data: _ProductItem;
	const productCategory = data;
</script>

<div class="flex flex-wrap gap-1">
	<ActionView productItem={productCategory} />
</div>
