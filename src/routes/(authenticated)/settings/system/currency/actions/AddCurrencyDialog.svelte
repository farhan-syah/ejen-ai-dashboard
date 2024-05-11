<script lang="ts">
	import type { CurrencyCreateInput } from "$api/routes/currency/currency.schema";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Dialog, FormControl, FormDebugger, FormGroup, TextField } from "$lib/components";
	import NumField from "$lib/components/form/text-field/NumField.svelte";
	import { getSystemSettingsCurrencyContext } from "../SystemSettingsCurrency";

	// Context

	const systemSettingsCurrencyContext = getSystemSettingsCurrencyContext();

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const isDialogOpen = systemSettingsCurrencyContext.isAddCurrencyDialogOpen;

	//  Forms

	const codeController = new FormControl({
		name: "code",
		required: true
	});

	const nameController = new FormControl({
		name: "name",
		required: true
	});

	const symbolController = new FormControl({
		name: "symbol",
		required: true
	});

	const exchangeRateController = new FormControl<number>({
		name: "exchangeRate",
		required: true
	});

	const form = new FormGroup<CurrencyCreateInput>([
		codeController,
		nameController,
		symbolController,
		exchangeRateController
	]);
	const valid = form.valid;

	// Functions

	async function handleSaveForm() {
		try {
			appState.loading.set(true);

			const data = form.value.get();

			// await ProductItemRepository.create({
			// 	data: data
			// });

			// productItemsContext.isAddItemOpen.set(false);
			// productItemsContext.table.search();

			toastState.success({
				message: "Product item has been created"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

{#key $isDialogOpen}
	<Dialog
		isOpen={isDialogOpen}
		onDismiss={() => {
			form.resetValue();
		}}
	>
		<div class="dialog-body grid grid-cols-6 gap-3">
			<TextField controller={codeController} class="col-span-full sm:col-span-3" label="Code" />
			<TextField controller={nameController} class="col-span-full sm:col-span-3" label="Name" />
			<TextField controller={symbolController} class="col-span-full sm:col-span-3" label="Symbol" />
			<NumField
				controller={exchangeRateController}
				label="Exchange Rate"
				class="col-span-full sm:col-span-3"
			/>
			<div class="col-span-full">
				<Button valid={$valid} onClick={handleSaveForm} />
			</div>
			<div class="col-span-full">
				<FormDebugger formGroup={form} />
			</div>
		</div>
	</Dialog>
{/key}
