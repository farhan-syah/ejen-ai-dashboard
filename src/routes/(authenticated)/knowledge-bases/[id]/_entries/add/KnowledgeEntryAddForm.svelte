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
		type FileItem,
		TableField
	} from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import { KnowledgeEntryRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { faker } from "@faker-js/faker";
	import { KnowledgeEntryContentType } from "@prisma/client";
	import { getKnowledgeBaseContext } from "../../KnowledgeBase";
	import { PDFDocument } from "@pdfme/pdf-lib";
	import { logger } from "$lib/utils/logger";

	// States
	const appState = getAppState();
	const toastState = getToastState();

	// Context

	const knowledgeBaseContext = getKnowledgeBaseContext();

	//  Forms
	const titleController = new FormControl<string>({
		name: "title",
		required: true,
		faker: faker.lorem.words
	});

	const entryTypeController = new FormControl<KnowledgeEntryContentType>({
		name: "content-type",
		required: true,
		value: KnowledgeEntryContentType.TEXT
	});

	const contentController = new FormControl<string>({
		name: "content",

		faker: faker.lorem.paragraph
	});

	const entryTypeOptions: FieldOption[] = Object.values(KnowledgeEntryContentType).map((e) => {
		return { value: e, label: e };
	});

	const attachedFilesController = new FormControl<FileItem[]>({
		name: "files",
		value: []
	});

	const metadataController = new FormControl<Record<string, any>>({
		name: "metadata",
		value: {
			fileName: undefined,
			pageCount: undefined,
			title: undefined,
			authors: undefined,
			subject: undefined,
			keywords: undefined,
			language: undefined,
			summary: undefined,
			journalName: undefined,
			volume: undefined,
			issue: undefined,
			pages: undefined,
			publicationDate: undefined,
			publisher: undefined
		}
	});
	const form = new FormGroup<KnowledgeEntryCreateInput>([
		titleController,
		entryTypeController,
		attachedFilesController,
		metadataController
	]);

	const valid = form.valid;

	// Reactives

	const entryTypeValue = entryTypeController.writableValue;

	// Handlers

	async function handleFileChange(files?: FileItem[]) {
		if (files && files.at(0)) {
			const file = files[0];

			if (file.ext === "pdf" && file.url) {
				const response = await fetch(file.url);
				const arrayBuffer = await response.arrayBuffer();
				const pdfDoc = await PDFDocument.load(arrayBuffer);
				const metadata = {
					fileName: file.name,
					pageCount: pdfDoc.getPageCount(),
					title: pdfDoc.getTitle(),
					authors: pdfDoc.getAuthor()
				};

				metadataController.value = { ...metadataController.value, ...metadata };

				if (!titleController.valid.get()) {
					titleController.value = metadata.title;
				}
			}
		}
	}

	async function handleSaveForm() {
		try {
			const organizationId = UserState.currentRole.get()?.organizationId;
			if (!organizationId) throw "No organization ID";
			appState.loading.set(true);

			const data = form.value.get();
			const createData: KnowledgeEntryCreateInput = {
				title: data.title!,
				knowledgeBaseId: knowledgeBaseContext.knowledgeBase.get().id,
				file: attachedFilesController.value?.at(0)?.file,
				metadata: metadataController.value,
				content: contentController.value
			};

			const knowledgeEntry = await KnowledgeEntryRepository.create(createData);

			// await goto(`/knowledge-entries/${knowledgeEntry.id}`);

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
</script>

<div class="flex flex-wrap gap-4">
	<h1 class="w-full items-center gap-1 font-bold">Add Knowledge Entry</h1>
	<TextField controller={titleController} label="Title" class="col-col-1 w-full" />
	<SelectField
		controller={entryTypeController}
		label="Content Type"
		options={entryTypeOptions}
		class="w-60 "
	/>

	{#if $entryTypeValue === KnowledgeEntryContentType.TEXT}
		<TextAreaField
			controller={contentController}
			label="Content"
			class="w-full"
			textareaClass="h-40"
		/>
	{/if}
	{#if $entryTypeValue === KnowledgeEntryContentType.PDF}
		<FileField
			controller={attachedFilesController}
			label="Attach File"
			accept=".pdf"
			class="w-72"
			onChange={handleFileChange}
		/>
	{/if}

	<TableField label="Metadata" controller={metadataController} />

	<div class="w-full flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} class="mt-4" />
