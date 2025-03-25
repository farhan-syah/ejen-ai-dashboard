<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle } from "$lib/components";
	import { AgentTypeRepository } from "$repositories";
	import { onMount } from "svelte";
	import { createAgentTypeContext } from "./AgentType";
	import AgentTypeDetails from "./AgentTypeDetails.svelte";

	// Constants

	const id = $page.params.id;

	// States

	const toast = getToastState();
	const context = createAgentTypeContext({
		fetchAgentTypeCallback: async (ctx) => {
			const result = await AgentTypeRepository.get(id).catch(async (e) => {
				await goto("/agent-type");
				toast.error({ message: "Agent Type not found" });
			});
			if (result) {
				ctx.agentType.set(result);
			}
		}
	});

	const agentType = context.agentType;

	// Lifecycle

	onMount(() => {
		context.fetchAgentType();
	});
</script>

{#if $agentType}
	<PageTitle
		title="Agent Type - {$agentType.name}"
		id={$agentType.id}
		breadcrumbs={[
			{ label: "Agent Types", path: "/agent-types" },
			{ label: "Edit Agent", path: "/agent-types/" + id, currentPage: true }
		]}
	/>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
		<AgentTypeDetails />
	</div>
{/if}
