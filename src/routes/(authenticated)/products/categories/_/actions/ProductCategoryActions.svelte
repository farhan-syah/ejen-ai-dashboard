<script lang="ts">
	import type { ProductCategory } from "../../product-categories";
	import ActionView from "./ActionView.svelte";

	export let data: ProductCategory;
	const productCategory = data;
</script>

<div class="flex flex-wrap gap-1">
	<ActionView {productCategory} />
</div>
