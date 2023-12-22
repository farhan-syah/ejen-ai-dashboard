<script lang="ts">
	import { getAppState } from "$applications";
	import { Button, Modal } from "$lib/components";
	import { ProductCategoryRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";

	const isModalOpen = atom(false);
	const appState = getAppState();

	async function handleDeleteProductCategory() {
		try {
			isModalOpen.set(false);
			appState.loading.set(true);
			await ProductCategoryRepository.delete("t2");
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<Button
	class="button-cyan"
	onClick={() => {
		isModalOpen.set(true);
	}}
>
	<div slot="label">
		<Icon icon="bx:trash" />
	</div>
</Button>

<Modal isOpen={isModalOpen}>
	<div class="w-96 flex flex-col gap-3">
		<div class="font-semibold">Delete Confirmation</div>
		<div>Are you sure you want to delete this object? This action is irreversible.</div>
		<div class="flex gap-2">
			<Button label="Yes" onClick={handleDeleteProductCategory} />
			<Button
				label="No"
				class="button-red"
				onClick={() => {
					isModalOpen.set(false);
				}}
			/>
		</div>
	</div>
</Modal>
