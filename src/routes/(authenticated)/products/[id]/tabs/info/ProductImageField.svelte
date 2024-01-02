<script lang="ts">
	import { PUBLIC_CDN } from "$env/static/public";
	import { FormControl, ImageField } from "$lib/components";
	import { ImageRepository } from "$repositories";
	import { getProductContext } from "../../Product";
	// Context

	const context = getProductContext();
	const product = context.product;
	const hasEditPermission = context.hasEditPermission;

	const imageController = new FormControl<string[]>({
		name: "images",
		value: $product.images?.map((image) => image.path)
	});

	async function handleSaveImage() {
		const imageSrc: string[] = imageController.value
			? imageController.value.map((image) => {
					if (image.startsWith("http")) return image;
					return PUBLIC_CDN + "/" + image;
				})
			: [];

		await ImageRepository.set({
			productId: $product.id,
			images: imageSrc
		});

		await context.fetchProduct();
	}
</script>

<ImageField
	controller={imageController}
	label="Image"
	onSave={handleSaveImage}
	pathPrefix="products/{$product.id}"
	disabled={!$hasEditPermission}
/>
