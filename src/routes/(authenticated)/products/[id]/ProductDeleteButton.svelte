<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Modal } from "$lib/components";
	import { ProductRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import type { Product } from "../products";

	export let product: Product;
	const isModalOpen = atom(false);
	const appState = getAppState();
	const toastState = getToastState();

	async function handleDeleteProduct() {
		try {
			isModalOpen.set(false);
			appState.loading.set(true);
			await ProductRepository.delete(product.id);
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
			<Button label="Yes" onClick={handleDeleteProduct} />
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
