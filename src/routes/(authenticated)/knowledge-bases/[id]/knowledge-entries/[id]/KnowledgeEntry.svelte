<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle } from "$lib/components";
	import { KnowledgeEntryRepository } from "$repositories";
	import { onMount } from "svelte";
	import { createKnowledgeEntryContext } from "./KnowledgeEntry";
	import KnowledgeEntryDetails from "./KnowledgeEntryDetails.svelte";

	// Constants

	const id = $page.params.id;

	// States

	const toast = getToastState();
	const context = createKnowledgeEntryContext({
		fetchKnowledgeEntryCallback: async (ctx) => {
			const result = await KnowledgeEntryRepository.get(id).catch(async (e) => {
				await goto("/agent-type");
				toast.error({ message: "Agent Type not found" });
			});
			if (result) {
				ctx.knowledgeEntry.set(result);
			}
		}
	});

	const knowledgeEntry = context.knowledgeEntry;

	// Lifecycle

	onMount(() => {
		context.fetchKnowledgeEntry();
	});
</script>

{#if $knowledgeEntry}
	<PageTitle
		title="Agent Type - {$knowledgeEntry.name}"
		id={$knowledgeEntry.id}
		breadcrumbs={[
			{ label: "Agent Types", path: "/agent-types" },
			{ label: "Edit Agent", path: "/agent-types/" + id, currentPage: true }
		]}
	/>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
		<KnowledgeEntryDetails />
	</div>
{/if}
