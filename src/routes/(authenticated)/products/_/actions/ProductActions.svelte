<script lang="ts">
	import type { Product } from "../../products";
	import ActionView from "./ProductActionView.svelte";

	export let data: Product;
	const productCategory = data;
</script>

<div class="flex flex-wrap gap-1">
	<ActionView {productCategory} />
</div>
