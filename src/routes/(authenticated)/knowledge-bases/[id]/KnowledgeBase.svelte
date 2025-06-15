<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { getToastState } from "$applications/toast.state";
	import { PageTitle } from "$lib/components";
	import { KnowledgeBaseRepository } from "$repositories";
	import { onMount } from "svelte";
	import { createKnowledgeBaseContext } from "./KnowledgeBase";
	import KnowledgeBaseDetails from "./KnowledgeBaseDetails.svelte";

	// Constants

	const id = $page.params.id;

	// States

	const toast = getToastState();
	const context = createKnowledgeBaseContext({
		fetchKnowledgeBaseCallback: async (ctx) => {
			const result = await KnowledgeBaseRepository.get(id).catch(async (e) => {
				await goto("/agent-type");
				toast.error({ message: "Agent Type not found" });
			});
			if (result) {
				ctx.knowledgeBase.set(result);
			}
		}
	});

	const knowledgeBase = context.knowledgeBase;

	// Lifecycle

	onMount(() => {
		context.fetchKnowledgeBase();
	});
</script>

{#if $knowledgeBase}
	<PageTitle
		title="Knowledge Base - {$knowledgeBase.name}"
		id={$knowledgeBase.id}
		breadcrumbs={[
			{ label: "Knowledge Bases", path: "/knowledge-bases" },
			{ label: "Edit Knowledge Bases", path: "/knowledge-bases" + id, currentPage: true }
		]}
	/>
	<div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
		<KnowledgeBaseDetails />
	</div>
{/if}
