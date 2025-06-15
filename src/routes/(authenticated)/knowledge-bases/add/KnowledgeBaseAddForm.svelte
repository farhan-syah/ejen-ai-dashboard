<script lang="ts">
	import type { KnowledgeBaseCreateInput } from "$api/routes/knowledge-base/knowledge-base.schema";
	import { goto } from "$app/navigation";
	import { getAppState, UserState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		TextField,
		TextAreaField
	} from "$lib/components";
	import { KnowledgeBaseRepository } from "$repositories";
	import { faker } from "@faker-js/faker";

	// States
	const appState = getAppState();
	const toastState = getToastState();

	//  Forms
	const nameController = new FormControl<string>({
		name: "name",
		required: true,
		faker: faker.lorem.words
	});

	const descriptionController = new FormControl<string | null>({
		name: "description",
		required: false, // Adjust if description is mandatory
		faker: faker.lorem.sentence
	});

	const form = new FormGroup<KnowledgeBaseCreateInput>([nameController, descriptionController]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			const organizationId = UserState.currentRole.get()?.organizationId;
			if (!organizationId) throw "No organization ID";
			appState.loading.set(true);

			const data = form.value.get();

			const createData: KnowledgeBaseCreateInput = {
				name: data.name!,
				description: data.description,
				organizationId
			};

			const knowledgeBase = await KnowledgeBaseRepository.create({
				data: createData
			});

			await goto(`/knowledge-bases/${knowledgeBase.id}`);

			toastState.success({
				message: "Knowledge Base has been created successfully"
			});
		} catch (error) {
			appState.error.set(error);
			toastState.error({
				message: "Failed to create Knowledge Base"
			});
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Name" class="col-col-1" />
	<TextAreaField
		controller={descriptionController}
		label="Description"
		class="col-col-1"
		textareaClass="h-32"
		resizable={false}
	/>

	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} class="mt-4" />
