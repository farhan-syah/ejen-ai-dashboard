<script lang="ts">
	import type { AgentCreateInput } from "$api/routes/agent/agent.schema";
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, FormControl, FormDebugger, FormGroup } from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import PriceField from "$lib/components/form/text-field/PriceField.svelte";
	import TextField from "$lib/components/form/text-field/TextField.svelte";
	import { formatNumber } from "$lib/utils/number";
	import { AgentRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { faker } from "@faker-js/faker";
	import { AgentStatus } from "@prisma/client";
	// States

	const appState = getAppState();
	const toastState = getToastState();

	//  Forms

	const nameController = new FormControl({
		name: "name",
		required: true,
		faker: faker.person.firstName
	});

	const retailPriceController = new FormControl<number>({
		name: "price",
		required: true,
		faker: () => faker.number.int({ max: 10000 }),
		inputTransformer: (value) => formatNumber(value ? value / 100 : undefined, 2)
	});

	const statusController = new FormControl<AgentStatus>({
		name: "status",
		required: true,
		value: AgentStatus.Pending
	});

	const statusOptions: FieldOption[] = Object.values(AgentStatus).map((e) => {
		return { value: e, label: e };
	});

	const form = new FormGroup<AgentCreateInput>([
		nameController,
		retailPriceController,
		statusController
	]);
	const valid = form.valid;

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();

			const agent = await AgentRepository.create({
				data: data
			});

			await goto(`/agents/${agent.id}`);

			toastState.success({
				message: "Agent has been created"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<div class="grid grid-cols-6 gap-4">
	<TextField controller={nameController} label="Agent Name" class="col-col-1" />
	<PriceField
		controller={retailPriceController}
		label="Recommended Retail Price"
		class="col-col-1"
		decimalPlaces={2}
	/>
	<SelectField
		controller={statusController}
		label="Status"
		class="  col-start-1"
		options={statusOptions}
	/>

	<div class="flex gap-2 col-start-1">
		<Button valid={$valid} onClick={handleSaveForm} />
	</div>
</div>
<FormDebugger formGroup={form} />
