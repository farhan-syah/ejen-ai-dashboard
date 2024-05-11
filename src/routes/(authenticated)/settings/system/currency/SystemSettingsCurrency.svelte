<script lang="ts">
	import { Button, Table } from "$lib/components";
	import { createSystemSettingsCurrencyContext } from "./SystemSettingsCurrency";
	import AddCurrencyDialog from "./actions/AddCurrencyDialog.svelte";

	// Context

	const systemSettingsCurrencyContext = createSystemSettingsCurrencyContext();
</script>

<div>
	<div class="flex gap-2">
		<div>Currency Settings</div>
		<div>|</div>
		<Button
			label="Add Currency"
			onClick={() => {
				systemSettingsCurrencyContext.isAddCurrencyDialogOpen.set(true);
				console.log(systemSettingsCurrencyContext.isAddCurrencyDialogOpen.get());
			}}
			class="button-xs"
		/>
	</div>
	<Table context={systemSettingsCurrencyContext.table} />
</div>

<AddCurrencyDialog />
