<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle, Tab, type TabItem } from "$lib/components";
	import { AgentRepository } from "$repositories";
	import { onMount } from "svelte";
	import { AgentTab, agentKeys, agentTabs, createAgentContext } from "./Agent";
	import AgentInfoTab from "./_tabs/info/AgentInfoTab.svelte";
	// import AgentItemsTab from "./_tabs/items/AgentItemsTab.svelte";

	const id = $page.params.id;
	const initialPage = $page.url.searchParams.get("page");
	const tabs: TabItem[] = agentTabs;
	const keys = agentKeys;

	const initialIndex = keys.findIndex((key) => key === initialPage);
	const context = createAgentContext({
		index: initialIndex != -1 ? initialIndex : 0,
		fetchAgentCallback: async (ctx) => {
			const result = await AgentRepository.get(id).catch(async (e) => {
				await goto("/agents");
				toast.error({ message: "Agent not found" });
			});
			if (result) {
				ctx.agent.set(result);
			}
		}
	});
	const index = context.index;
	const agent = context.agent;

	onMount(() => {
		context.fetchAgent();
	});

	function handleSwitchTab(i: number) {
		if ($index != i) {
			index.set(i);
			$page.url.searchParams.set("page", keys[i]);
			goto($page.url, { replaceState: true });
		}
	}

	// States
	const toast = getToastState();
</script>

{#if $agent}
	<PageTitle
		title="Agent - {$agent.name}"
		id={$agent.id}
		breadcrumbs={[
			{ label: "Agents", path: "/agents" },
			{ label: "Edit Agent", path: "/agents/" + id, currentPage: true }
		]}
	/>
	<Tab {tabs} index={$index} onClick={handleSwitchTab}>
		<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
			{#if tabs[$index].label === AgentTab.info}
				<AgentInfoTab />
			{/if}
			{#if tabs[$index].label === AgentTab.items}
				<!-- <AgentItemsTab /> -->
			{/if}
		</div>
	</Tab>
{/if}
