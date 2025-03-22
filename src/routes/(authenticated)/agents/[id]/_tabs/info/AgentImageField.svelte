<script lang="ts">
	import { PUBLIC_CDN } from "$env/static/public";
	import { FormControl, ImageField } from "$lib/components";
	import { ImageRepository } from "$repositories";
	import { getAgentContext } from "../../Agent";
	// Context

	const context = getAgentContext();
	const agent = context.agent;
	const hasEditPermission = context.hasEditPermission;

	const imageController = new FormControl<string[]>({
		name: "images",
		value: $agent.images?.map((image) => image.path)
	});

	async function handleSaveImage() {
		const imageSrc: string[] = imageController.value
			? imageController.value.map((image) => {
					if (image.startsWith("http")) return image;
					return PUBLIC_CDN + "/" + image;
				})
			: [];

		await ImageRepository.set({
			// agentId: $agent.id,
			images: imageSrc
		});

		await context.fetchAgent();
	}
</script>

<ImageField
	controller={imageController}
	description="Common images shared with all agent items"
	label="Shared Images"
	onSave={handleSaveImage}
	pathPrefix="agents/{$agent.id}"
	disabled={!$hasEditPermission}
/>
