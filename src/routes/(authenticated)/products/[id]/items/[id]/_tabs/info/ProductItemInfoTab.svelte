<script lang="ts">
	import ProductItemDetailsForm from "./ProductItemDetailsForm.svelte";
	import ProductItemDimensionField from "./ProductItemDimensionField.svelte";
	import ProductItemImageField from "./ProductItemImageField.svelte";
</script>

<div class="grid grid-cols-5 gap-4">
	<div class="col-span-5 lg:col-span-2 grid gap-4">
		<ProductItemDetailsForm />
	</div>
	<div class="col-span-5 lg:col-span-3 grid gap-4 auto-rows-min">
		<ProductItemImageField />
		<ProductItemDimensionField />
	</div>
</div>
