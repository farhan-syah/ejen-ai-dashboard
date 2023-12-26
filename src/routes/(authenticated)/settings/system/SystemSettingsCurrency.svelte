<script lang="ts">
	import type { CurrencySearch } from "$api/routes/currency/currency.schema";
	import { Table, createTableContext } from "$lib/components";
	import { CurrencyRepository } from "$repositories";
	import { currencyColumns, type Currency } from "./SystemSettingsCurrency";

	const tableContext = createTableContext<Currency, CurrencySearch>({
		columns: currencyColumns,
		filter: {
			where: {},
			action: "search"
		},
		limit: 20,
		onSearch: async (f) => {
			if (f) {
				return CurrencyRepository.search(f);
			}
			return [];
			// if(f) return return
		}
	});
</script>

<div>
	<div>Currency Settings</div>
	<Table context={tableContext} />
</div>
