<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Dialog } from "$lib/components";
	import { ProductCategoryRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import type { _ProductCategory } from "../ProductCategories";

	export let productCategory: _ProductCategory;
	const isDialogOpen = atom(false);
	const appState = getAppState();
	const toastState = getToastState();

	async function handleDeleteProductCategory() {
		try {
			isDialogOpen.set(false);
			appState.loading.set(true);
			await ProductCategoryRepository.delete(productCategory.id);
			await goto("/products/categories", { replaceState: true });
			toastState.success({ key: productCategory.id, message: "Object has been deleted" });
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
		isDialogOpen.set(true);
	}}
>
	<div slot="label">
		<Icon icon="bx:trash" />
	</div>
</Button>

<Dialog isOpen={isDialogOpen}>
	<div class="w-96 flex flex-col gap-3">
		<div class="font-semibold">Delete Confirmation</div>
		<div>Are you sure you want to delete this object? This action is irreversible.</div>
		<div class="flex gap-2">
			<Button label="Yes" onClick={handleDeleteProductCategory} />
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
