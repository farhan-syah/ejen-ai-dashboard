<script lang="ts">
	import type { KnowledgeEntryUpdateInput } from "$api/routes/knowledge-entry/knowledge-entry.schema";
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
	import { KnowledgeEntryRepository } from "$repositories";

	import { atom } from "nanostores";
	import { getKnowledgeEntryContext } from "./KnowledgeEntry";
	import KnowledgeEntryDeleteButton from "./KnowledgeEntryDeleteButton.svelte";

	// Context

	const context = getKnowledgeEntryContext();
	const knowledgeEntry = context.knowledgeEntry;
	const hasEditPermission = context.hasEditPermission;

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const editable = atom(false);

	//  Forms

	const idController = new FormControl({
		name: "id",
		value: $knowledgeEntry.id
	});

	const titleController = new FormControl({
		name: "title",
		value: $knowledgeEntry.title,
		required: true
	});

	const form = new FormGroup([titleController]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get() as KnowledgeEntryUpdateInput;

			await KnowledgeEntryRepository.update($knowledgeEntry.id, {
				data: data
			});

			await context.fetchKnowledgeEntry();

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
				controller={titleController}
				label="Name"
				class="col-span-2"
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
					<Guard requiredPermissions={["KnowledgeEntry.manage", "KnowledgeEntry.delete"]}>
						<KnowledgeEntryDeleteButton product={$knowledgeEntry} />
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
