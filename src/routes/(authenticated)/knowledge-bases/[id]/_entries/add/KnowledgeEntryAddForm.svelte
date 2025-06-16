<script lang="ts">
	import type { KnowledgeEntryCreateInput } from "$api/routes/knowledge-entry/knowledge-entry.schema";
	import { goto } from "$app/navigation";
	import { getAppState, UserState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		TextField,
		TextAreaField,
		FileField,
		type FileItem
	} from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import { KnowledgeEntryRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { faker } from "@faker-js/faker";
	import { KnowledgeEntryContentType } from "@prisma/client";
	// States
	const appState = getAppState();
	const toastState = getToastState();

	//  Forms
	const titleController = new FormControl<string>({
		name: "name",
		required: true,
		faker: faker.lorem.words
	});

	const entryTypeController = new FormControl<KnowledgeEntryContentType>({ required: true });
	const entryTypeOptions: FieldOption[] = Object.values(KnowledgeEntryContentType)
		.filter((e) => ["TEXT", "PDF"].includes(e))
		.map((e) => {
			return { value: e, label: e };
		});

	const attachedFilesController = new FormControl<FileItem[]>({
		value: [
			{
				id: "16r51M17CRfzT-8U0f2aj",
				path: "./Gmail - ADUAN FRANCAIS NO. RUJ ADUAN AF(A2025)0015_ AHMAD FARHAN SYAH BIN HASMUDDIN.pdf",
				url: "blob:http://localhost:3051/ba51b72c-f5af-42ff-a29b-85bc517c46d6",
				file: new File(
					[""],
					"Gmail - ADUAN FRANCAIS NO. RUJ ADUAN AF(A2025)0015_ AHMAD FARHAN SYAH BIN HASMUDDIN.pdf"
				),
				name: "Gmail - ADUAN FRANCAIS NO. RUJ ADUAN AF(A2025)0015_ AHMAD FARHAN SYAH BIN HASMUDDIN.pdf",
				ext: "pdf",
				icon: "material-icon-theme:pdf"
			}
		]
	});
	const form = new FormGroup<KnowledgeEntryCreateInput>([
		titleController,
		entryTypeController,
		attachedFilesController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			const organizationId = UserState.currentRole.get()?.organizationId;
			if (!organizationId) throw "No organization ID";
			appState.loading.set(true);

			const data = form.value.get();

			const createData: KnowledgeEntryCreateInput = {
				title: data.title!,
				knowledgeBaseId: ""
			};

			const knowledgeEntry = await KnowledgeEntryRepository.create({
				data: createData
			});

			await goto(`/knowledge-entries/${knowledgeEntry.id}`);

			toastState.success({
				message: "Knowledge Entry has been created successfully"
			});
		} catch (error) {
			appState.error.set(error);
			toastState.error({
				message: "Failed to create Knowledge Entry"
			});
		} finally {
			appState.loading.set(false);
		}
	}

	// Reactives

	const entryTypeValue = entryTypeController.writableValue;
</script>

<div class="flex flex-wrap gap-4">
	<h1 class="w-full items-center gap-1 font-bold">Add Knowledge Entry</h1>
	<TextField controller={titleController} label="Title" class="col-col-1" />
	<SelectField
		controller={entryTypeController}
		label="Content Type"
		options={entryTypeOptions}
		class="w-60"
	/>

	{#if $entryTypeValue === KnowledgeEntryContentType.TEXT}
		<TextAreaField label="Content" class="w-full" />
	{/if}
	<FileField controller={attachedFilesController} label="Attach File" class="w-72" />
	<div class="w-full flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} class="mt-4" />
