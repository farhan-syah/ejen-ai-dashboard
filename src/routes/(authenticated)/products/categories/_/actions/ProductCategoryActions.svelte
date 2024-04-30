<script lang="ts">
	import type { ProductCategory } from "../../product-categories";
	import ViewProductCategoryAction from "./ViewProductCategoryAction.svelte";

	export let data: ProductCategory;
	const productCategory = data;
</script>

<div class="flex flex-wrap gap-1">
	<ViewProductCategoryAction {productCategory} />
</div>
