<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { FormControl, TextField, Tooltip } from "$lib/components";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import { getProductItemContext } from "./ProductItem";

	// Context

	const context = getProductItemContext();
	const productItem = context.productItem;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $productItem.id
	});

	const nameController = new FormControl({
		name: "name",
		value: $productItem.name,
		required: true
	});
</script>

<TextField controller={idController} label="ID" class="col-span-2" disabled>
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
	label="Product Item Name"
	class="col-span-2"
	disabled={!$editable}
/>
