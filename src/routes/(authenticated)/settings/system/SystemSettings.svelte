<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { PageTitle, Tab, type TabItem } from "$lib/components";
	import {
		SystemSettingsTab,
		createSystemSettingsContext,
		systemSettingkeys,
		systemSettingsTabs
	} from "./SystemSettings";
	import SystemSettingsCountry from "./SystemSettingsCountry.svelte";
	import SystemSettingsGeneral from "./SystemSettingsGeneral.svelte";
	import SystemSettingsColor from "./color/SystemSettingsColor.svelte";
	import SystemSettingsCurrency from "./currency/SystemSettingsCurrency.svelte";

	const initialPage = $page.url.searchParams.get("page");
	const tabs: TabItem[] = systemSettingsTabs;
	const keys = systemSettingkeys;

	const initialIndex = keys.findIndex((key) => key === initialPage);
	const context = createSystemSettingsContext({ index: initialIndex != -1 ? initialIndex : 0 });
	const index = context.index;

	function handleSwitchTab(i: number) {
		if ($index != i) {
			index.set(i);
			$page.url.searchParams.set("page", keys[i]);
			goto($page.url, { replaceState: true });
		}
	}
</script>

<PageTitle
	title="System Settings - {tabs[$index].label}"
	breadcrumbs={[
		{ label: "System Settings", path: "/settings/system" },
		{
			label: `${tabs[$index].label}`,
			path: `/settings/system?page=${tabs[$index].key}`,
			currentPage: true
		}
	]}
	class="mb-3"
/>
<Tab {tabs} index={$index} onClick={handleSwitchTab}>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
		{#if tabs[$index].label === SystemSettingsTab.general}
			<SystemSettingsGeneral />
		{/if}
		{#if tabs[$index].label === SystemSettingsTab.country}
			<SystemSettingsCountry />
		{/if}
		{#if tabs[$index].label === SystemSettingsTab.currency}
			<SystemSettingsCurrency />
		{/if}
		{#if tabs[$index].label === SystemSettingsTab.color}
			<SystemSettingsColor />
		{/if}
	</div>
</Tab>
