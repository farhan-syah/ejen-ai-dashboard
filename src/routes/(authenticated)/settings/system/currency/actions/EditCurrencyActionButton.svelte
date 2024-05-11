<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { IconWithTooltip } from "$lib/components";
	import { CurrencyRepository } from "$repositories";
	import { getSystemSettingsCurrencyContext, type _Currency } from "../SystemSettingsCurrency";

	export let currency: _Currency;

	// Context

	const systemSettingsCurrencyContext = getSystemSettingsCurrencyContext();

	// States

	const appState = getAppState();
	const toastState = getToastState();

	// Functions

	function openConfirmationDialog() {
		appState.confirmationDialog.openDialog({
			title: "Confirm Currency Change",
			message:
				"Are you sure you want to change the default currency?\nIt will affect the whole system.",
			onConfirm: setDefaultCurrency
		});
	}

	async function setDefaultCurrency() {
		appState.loading.set(true);
		await CurrencyRepository.updateMany({
			where: {
				id: { not: currency.id }
			},
			data: {
				isBaseCurrency: false
			}
		});

		await CurrencyRepository.update(currency.id, { data: { isBaseCurrency: true } });

		systemSettingsCurrencyContext.table.search();

		toastState.success({
			message: "Default currency has been changed"
		});
	}
</script>

<div class="flex flex-wrap -mt-0.75">
	{#if !currency.isBaseCurrency}
		<IconWithTooltip
			icon="mdi:web-check"
			class="text-blue-500 h-4 text-xl p-0.25"
			buttonClass="rounded-xs"
			tooltip="Set as default currency"
			onClick={openConfirmationDialog}
		/>
	{/if}
</div>
