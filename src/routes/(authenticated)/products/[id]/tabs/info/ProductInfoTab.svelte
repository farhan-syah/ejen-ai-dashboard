<script lang="ts">
	import ProductDetailsForm from "./ProductDetailsForm.svelte";
	import ProductImageField from "./ProductImageField.svelte";
	import ProductItemsField from "./ProductItemsField.svelte";
</script>

<div class="grid grid-cols-5 gap-4">
	<div class="col-span-full italic">
		Product is the main item that will be shown to the users. Every product can have different
		items/variations with its own skus. Product with zero items will not be shown to the public.
	</div>
	<div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
		<ProductDetailsForm />
	</div>
	<div class="col-span-5 lg:col-span-3 auto-rows-min grid gap-4">
		<ProductImageField />
		<ProductItemsField />
	</div>
</div>
