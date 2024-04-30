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

	async function setDefaultCurrency() {
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

			await CurrencyRepository.update(currency.id, { data: { isBaseCurrency: true } });

			systemSettingsCurrencyContext.table.search();

			toastState.success({
				message: "Default currency has been changed"
			});
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="Set as default currency"
	onClick={setDefaultCurrency}
/>
