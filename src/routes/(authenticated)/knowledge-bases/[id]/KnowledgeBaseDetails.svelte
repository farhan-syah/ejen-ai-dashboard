<script lang="ts">
	import type { KnowledgeBaseUpdateInput } from "$api/routes/knowledge-base/knowledge-base.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		Guard,
		TextAreaField,
		TextField,
		Tooltip
	} from "$lib/components";
	import { KnowledgeBaseRepository } from "$repositories";

	import { atom } from "nanostores";
	import { getKnowledgeBaseContext } from "./KnowledgeBase";
	import KnowledgeBaseDeleteButton from "./KnowledgeBaseDeleteButton.svelte";

	// Context

	const context = getKnowledgeBaseContext();
	const knowledgeBase = context.knowledgeBase;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $knowledgeBase.id
	});

	const nameController = new FormControl({
		name: "name",
		value: $knowledgeBase.name,
		required: true
	});

	const descriptionController = new FormControl({
		name: "description",
		value: $knowledgeBase.description
	});

	const form = new FormGroup([nameController]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get() as KnowledgeBaseUpdateInput;

			await KnowledgeBaseRepository.update($knowledgeBase.id, {
				data: data
			});

			await context.fetchKnowledgeBase();

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

<div class="flex flex-col gap-4">
	<div class="grid grid-cols-5 gap-4 gap-x-6">
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

			<TextField
				controller={nameController}
				label="Name"
				class="col-span-2"
				disabled={!$editable}
			/>
			<TextAreaField
				controller={descriptionController}
				label="Description"
				class="col-col-1"
				textareaClass="h-32"
				resizable={false}
				disabled={!$editable}
			/>
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
					<Guard requiredPermissions={["KnowledgeBase.manage", "KnowledgeBase.delete"]}>
						<KnowledgeBaseDeleteButton product={$knowledgeBase} />
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
