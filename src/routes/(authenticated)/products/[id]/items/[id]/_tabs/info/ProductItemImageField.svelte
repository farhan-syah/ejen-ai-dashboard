<script lang="ts">
	import { PUBLIC_CDN } from "$env/static/public";
	import { FormControl, ImageField } from "$lib/components";
	import { ImageRepository } from "$repositories";
	import { getProductItemContext } from "../../ProductItem";
	// Context

	const context = getProductItemContext();
	const productItem = context.productItem;
	const hasEditPermission = context.hasEditPermission;

	const imageController = new FormControl<string[]>({
		name: "images",
		value: $productItem.images?.map((image) => image.path)
	});

	async function handleSaveImage() {
		const imageSrc: string[] = imageController.value
			? imageController.value.map((image) => {
					if (image.startsWith("http")) return image;
					return PUBLIC_CDN + "/" + image;
				})
			: [];

		await ImageRepository.set({
			productItemId: $productItem.id,
			images: imageSrc
		});

		await context.fetchProductItem();
	}
</script>

<div>
	<div class="font-semibold">Images</div>
	<li>Image for this variation</li>
</div>

<ImageField
	controller={imageController}
	onSave={handleSaveImage}
	pathPrefix="product-items/{$productItem.id}"
	disabled={!$hasEditPermission}
/>
