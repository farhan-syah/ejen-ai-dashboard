<script lang="ts">
	import type { AgentTypeUpdateInput } from "$api/routes/agent-type/agent-type.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		PriceField,
		TextField,
		Tooltip
	} from "$lib/components";
	import { formatNumber } from "$lib/utils/number";
	import { AgentTypeRepository } from "$repositories";

	import { atom } from "nanostores";
	import { getAgentTypeContext } from "./AgentType";
	import AgentTypeDeleteButton from "./AgentTypeDeleteButton.svelte";

	// Context

	const context = getAgentTypeContext();
	const agentType = context.agentType;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $agentType.id
	});

	const keyController = new FormControl({
		name: "key",
		value: $agentType.key,
		required: true
	});

	const nameController = new FormControl({
		name: "name",
		value: $agentType.name,
		required: true
	});

	const descriptionController = new FormControl({
		name: "description",
		value: $agentType.description,
		required: true
	});

	const iconController = new FormControl({
		name: "icon",
		value: $agentType.icon,
		required: true
	});

	const iconPreview = iconController.writableValue;

	const priceController = new FormControl<number>({
		name: "price",
		value: $agentType.price,
		required: true,
		inputTransformer: (value) => formatNumber(value ? value / 100 : undefined, 2)
	});

	const form = new FormGroup([nameController, keyController, priceController, iconController]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get() as AgentTypeUpdateInput;

			await AgentTypeRepository.update($agentType.id, {
				data: data
			});

			await context.fetchAgentType();

			editable.set(false);

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
</script>

<div class="grid grid-cols-5 gap-4 gap-x-6">
	<div class="col-span-full italic"></div>
	<div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
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
					<iconify-icon icon="bx:copy"></iconify-icon>
				</Tooltip>
			</div>
		</TextField>

		<TextField controller={nameController} label="Name" class="col-span-2" disabled={!$editable} />
		<TextField controller={keyController} label="Key" class="col-span-2" disabled={!$editable} />
		<PriceField
			controller={priceController}
			label="Retail Price (RRSP)"
			class="col-span-2"
			decimalPlaces={2}
			disabled={!$editable}
		/>
	</div>
	<div class="col-span-5 lg:col-span-3 auto-rows-min grid gap-4">
		<TextField
			controller={descriptionController}
			label="Description"
			class="col-span-2"
			disabled={!$editable}
		/>
		<div class="col-span-2 flex gap-4 items-end">
			<div class="">
				<TextField controller={iconController} label="Icon" class="" disabled={!$editable} />
			</div>
			{#key $iconPreview}
				<div class=" rounded border flex items-center mdi:face-agent h-14 w-14 justify-center">
					<iconify-icon icon={$iconPreview} height="50" width="50"></iconify-icon>
				</div>
			{/key}
		</div>
	</div>

	<div class="col-span-2">
		{#if $hasEditPermission}
			<div class="flex gap-2">
				{#if $editable}
					<Button
						valid={$valid}
						label="Save Changes"
						class="button-green"
						onClick={handleSaveForm}
					/>
					<Button
						label="Cancel"
						class="button-red"
						onClick={() => {
							editable.set(false);
							form.resetValue();
						}}
					/>
					<Guard requiredPermissions={["AgentType.manage", "AgentType.delete"]}>
						<AgentTypeDeleteButton product={$agentType} />
					</Guard>
				{:else}
					<Button
						label="Edit"
						class="button-cyan"
						onClick={() => {
							editable.set(true);
						}}
					/>
				{/if}
			</div>
		{/if}
		<FormDebugger formGroup={form} />
	</div>
</div>
