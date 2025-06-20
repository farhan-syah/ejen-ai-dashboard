<script lang="ts">
	import type { OrganizationCreateInput } from "$api/routes/organization/organization.schema";
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import {
		Button,
		FormControl,
		FormDebugger,
		FormGroup,
		SelectField,
		TextField
	} from "$lib/components";
	import { logger } from "$lib/utils/logger";
	import { OrganizationRepository, OrganizationTypeRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { faker } from "@faker-js/faker";
	import { onMount } from "svelte";

	interface OrganizationType {
		id: string;
		name: string;
	}

	const appState = getAppState();
	const toastState = getToastState();

	let organizationType = $state<OrganizationType[]>();

	const nameController = new FormControl<string>({
		name: "name",
		required: true,
		faker: faker.company.name
	});

	const organizationTypeController = new FormControl<OrganizationType>({
		name: "organizationType",
		required: true
	});

	const statusOptions: () => FieldOption[] = $derived(() => {
		if (!organizationType) return [];
		else
			return Object.values(organizationType).map((e) => {
				return { value: e, label: e.name };
			});
	});

	interface FormGroupType {
		name: string;
		organizationType: OrganizationType;
	}
	const form = new FormGroup<FormGroupType>([nameController, organizationTypeController]);
	const valid = form.valid;

	onMount(() => {
		fetchOrganizationTypes();
	});

	async function fetchOrganizationTypes() {
		organizationType = await OrganizationTypeRepository.search({
			where: {},
			query: { select: { id: true, name: true } }
		});
	}

	async function handleSaveForm() {
		try {
			appState.loading.set(true);
			const data = form.value.get();

			const createData: OrganizationCreateInput = {
				name: data.name,
				organizationTypeId: data.organizationType.id
			};

			logger.info(createData);

			const organization = await OrganizationRepository.create({
				data: createData
			});

			await goto(`/organizations/${organization.id}`);
			toastState.success({
				message: "Organization has been created successfully"
			});
		} catch (error) {
			appState.error.set(error);
			toastState.error({
				message: `Failed to create Organization`
			});
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Name" class="col-span-3" />
	<SelectField
		controller={organizationTypeController}
		label="Organization Type"
		class="col-start-1 w-60"
		options={statusOptions()}
		valueTransform={(v) => v?.name}
	/>
	<div class="flex gap-2 col-start-1 mt-4">
		<Button valid={$valid} onClick={handleSaveForm} label="Create Organization" />
		<Button label="Cancel" onClick={() => history.back()} />
	</div>
</div>
<FormDebugger formGroup={form} class="mt-4" />
