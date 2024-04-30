<script lang="ts">
	import { Table } from "$lib/components";
	import { createSystemSettingsCurrencyContext } from "./SystemSettingsCurrency";

	// Context

	const systemSettingsCurrencyContext = createSystemSettingsCurrencyContext();
</script>

<div>
	<div>Currency Settings</div>
	<Table context={systemSettingsCurrencyContext.table} />
</div>
