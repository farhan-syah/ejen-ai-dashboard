<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Dialog } from "$lib/components";
	import { KnowledgeBaseRepository } from "$repositories";

	import { atom } from "nanostores";
	import type { _KnowledgeBase } from "./KnowledgeBase";

	export let product: _KnowledgeBase;
	const isDialogOpen = atom(false);
	const appState = getAppState();
	const toastState = getToastState();

	async function handleDeleteKnowledgeBase() {
		try {
			isDialogOpen.set(false);
			appState.loading.set(true);
			await KnowledgeBaseRepository.delete(product.id);
			await goto("/products/categories", { replaceState: true });
			toastState.success({ key: product.id, message: "Object has been deleted" });
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<Button
	class="button-slate"
	onClick={() => {
		isDialogOpen.set(true);
	}}
>
	<div slot="label">
		<iconify-icon icon="bx:trash"></iconify-icon>
	</div>
</Button>

<Dialog isOpen={isDialogOpen}>
	<div class="w-96 flex flex-col gap-3">
		<div class="font-semibold">Delete Confirmation</div>
		<div>Are you sure you want to delete this object? This action is irreversible.</div>
		<div class="flex gap-2">
			<Button label="Yes" onClick={handleDeleteKnowledgeBase} />
			<Button
				label="No"
				class="button-red"
				onClick={() => {
					isDialogOpen.set(false);
				}}
			/>
		</div>
	</div>
</Dialog>
