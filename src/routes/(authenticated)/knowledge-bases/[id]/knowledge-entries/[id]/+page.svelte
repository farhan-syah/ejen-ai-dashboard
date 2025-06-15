<script lang="ts">
	import { Guard } from "$lib/components";
	import KnowledgeEntry from "./KnowledgeEntry.svelte";
</script>

<Guard
	requiredPermissions={[
		"KnowledgeEntry.manage",
		"KnowledgeEntry.view",
		"KnowledgeEntry.update",
		"KnowledgeEntry.delete"
	]}
	redirect
	redirectPath="/agent-types"
>
	<KnowledgeEntry />
</Guard>
