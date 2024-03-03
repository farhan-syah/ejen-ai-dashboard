<script>
	import ProductVariationImageField from "./ProductVariationImageField.svelte";
</script>

<div class="flex flex-col gap-2">
	<div class=" font-semibold">Guideline</div>
	<div>
		<li>
			Product variation are variation of the product with different characteristics such as color,
			size and packaging. Product variations will have different SKUs.
		</li>
		<li>
			Make sure the product variant is created first before adding it to the list of variations
		</li>
		<li>
			You can preview how your product and it's variation will look like at the preview section
			below
		</li>
	</div>
	<div class="flex flex-col gap-2">
		<div class=" font-semibold">Variation Image</div>
		<div>
			If this product is going to be another variation of another product, it is advisable to set
			this product variation image below.
		</div>
		<ProductVariationImageField />
	</div>

	<div class="flex flex-col gap-2">
		<div class=" font-semibold">Preview</div>
		<div>This is how your current product will look like:</div>
	</div>
</div>
