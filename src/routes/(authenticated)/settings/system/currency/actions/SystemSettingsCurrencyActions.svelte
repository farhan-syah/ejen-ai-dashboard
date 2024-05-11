<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { CurrencyRepository } from "$repositories";
	import { getSystemSettingsCurrencyContext, type _Currency } from "../SystemSettingsCurrency";
	import SetDefaultCurrencyAction from "./SetDefaultCurrencyActionButton.svelte";

	export let data: _Currency;
	const currency = data;

	// Context

	const systemSettingsCurrencyContext = getSystemSettingsCurrencyContext();

	// States

	const appState = getAppState();
	const toastState = getToastState();

	// Functions

	async function setDefaultCurrency(currency: _Currency) {
		try {
			appState.loading.set(true);
			await CurrencyRepository.updateMany({
				where: {
					id: { not: currency.id }
				},
				data: {
					isBaseCurrency: false
				}
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<div class="flex flex-wrap gap-1">
	<SetDefaultCurrencyAction {currency} />
</div>
