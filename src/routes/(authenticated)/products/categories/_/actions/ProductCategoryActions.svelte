<script lang="ts">
	import type { _ProductCategory } from "../../ProductCategories";
	import ViewProductCategoryAction from "./ViewProductCategoryAction.svelte";

	export let data: _ProductCategory;
	const productCategory = data;
</script>

<div class="flex flex-wrap gap-1">
	<ViewProductCategoryAction {productCategory} />
</div>
