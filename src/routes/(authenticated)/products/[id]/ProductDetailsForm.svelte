<script lang="ts">
	import type { ProductUpdateData } from "$api/routes/product/product.schema";
	import { UserState, getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		Tooltip,
		validatePermissions
	} from "$lib/components";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { ProductRepository } from "$repositories";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import type { Product } from "../Products";
	import ProductDeleteButton from "./ProductDeleteButton.svelte";

	// Variables

	export let product: Product;
	export let fetchProduct: () => Promise<any>;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: product.id
	});

	const nameController = new FormControl({
		name: "name",
		value: product.name,
		required: true
	});

	const form = new FormGroup<ProductUpdateData>([nameController]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			await ProductRepository.update(product.id, {
				data: form.value.get()
			});

			await fetchProduct();

			toastState.add({
				type: "success",
				message: "Changes have been saved"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}

	// Permissions

	const hasEditPermission = validatePermissions(
		["Product.manage", "Product.update"],
		UserState.permissions.get()
	);
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={idController} label="ID" class="col-r1" disabled>
		<div slot="postfix" class="text-blue-500 h-full border-l bg-white rounded-r pointer">
			<Tooltip
				tooltip="Copy"
				class="h-full flex items-center p-2 "
				onClick={async () => {
					if (idController.value) {
						await navigator.clipboard.writeText(idController.value);
						toastState.add({
							type: "info",
							key: "id",
							message: "Copied"
						});
					}
				}}
			>
				<Icon icon="bx:copy" />
			</Tooltip>
		</div>
	</TextField>
	<TextField
		controller={nameController}
		label="Category Name"
		class="col-r1"
		disabled={!$editable}
	/>

	{#if hasEditPermission}
		<div class="flex gap-2 col-start-1">
			{#if $editable}
				<Button valid={$valid} label="Save Changes" onClick={handleSaveForm} />
				<Button
					label="Cancel"
					class="button-red"
					onClick={() => {
						editable.set(false);
						form.resetValue();
					}}
				/>
				<Guard requiredPermissions={["Product.manage", "Product.delete"]}>
					<ProductDeleteButton {product} />
				</Guard>
			{:else}
				<Button
					label="Edit"
					class="button-green"
					onClick={() => {
						editable.set(true);
					}}
				/>
			{/if}
		</div>
	{/if}
</div>
<FormDebugger formGroup={form} />
