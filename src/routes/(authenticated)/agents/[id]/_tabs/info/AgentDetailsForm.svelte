<script lang="ts">
	import type { AgentUpdateInput } from "$api/routes/agent/agent.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		TextField,
		Tooltip
	} from "$lib/components";
	import { AgentRepository } from "$repositories";

	import { atom } from "nanostores";
	import { getAgentContext, type _AgentCategory } from "../../Agent";
	import AgentDeleteButton from "./AgentDeleteButton.svelte";

	// Context

	const context = getAgentContext();
	const agent = context.agent;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $agent.id
	});

	const nameController = new FormControl({
		name: "name",
		value: $agent.name,
		required: true
	});

	const agentCategoryController = new FormControl<_AgentCategory[]>({
		name: "categories",
		value: $agent.categories
	});

	const form = new FormGroup([nameController, agentCategoryController]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get() as AgentUpdateInput;
			const agentCategories = agentCategoryController.value;

			await AgentRepository.update($agent.id, {
				data: data
			});

			await context.fetchAgent();

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
<TextField
	controller={nameController}
	label="Agent Name"
	class="col-span-2"
	disabled={!$editable}
/>

<div class="col-span-2">
	{#if $hasEditPermission}
		<div class="flex gap-2">
			{#if $editable}
				<Button valid={$valid} label="Save Changes" class="button-green" onClick={handleSaveForm} />
				<Button
					label="Cancel"
					class="button-red"
					onClick={() => {
						editable.set(false);
						form.resetValue();
					}}
				/>
				<Guard requiredPermissions={["Agent.manage", "Agent.delete"]}>
					<AgentDeleteButton agent={$agent} />
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
