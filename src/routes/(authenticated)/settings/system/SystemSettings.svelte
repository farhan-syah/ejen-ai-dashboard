<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { Tab, type TabItem } from "$lib/components";
	import SystemSettingsGeneral from "./SystemSettingsGeneral.svelte";
	import {
		SystemSettingsTab,
		createSystemSettingsContext,
		systemSettingkeys,
		systemSettingsTabs
	} from "./system-settings";

	const initialPage = $page.url.searchParams.get("page");
	const tabs: TabItem[] = systemSettingsTabs;
	const keys = systemSettingkeys;

	const initialIndex = keys.findIndex((key) => key === initialPage);
	const context = createSystemSettingsContext({ index: initialIndex });
	const index = context.index;

	function handleSwitchTab(i: number) {
		if ($index != i) {
			index.set(i);
			$page.url.searchParams.set("page", keys[i]);
			goto($page.url, { replaceState: true });
		}
	}
</script>

<Tab {tabs} index={$index} onClick={handleSwitchTab}>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
		{#if tabs[$index].label === SystemSettingsTab.general}
			<SystemSettingsGeneral />
		{/if}
	</div>
</Tab>
