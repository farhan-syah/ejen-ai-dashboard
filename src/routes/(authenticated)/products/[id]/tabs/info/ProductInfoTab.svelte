<script lang="ts">
	import ProductDetailsForm from "./ProductDetailsForm.svelte";
	import ProductImageField from "./ProductImageField.svelte";
</script>

<div class="grid grid-cols-5 gap-4">
	<div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
		<ProductDetailsForm />
	</div>
	<div class="col-span-5 lg:col-span-3 auto-rows-min gap-4">
		<ProductImageField />
	</div>
</div>
