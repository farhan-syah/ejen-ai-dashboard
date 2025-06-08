<script lang="ts">
	import { Guard } from "$lib/components";
	import KnowledgeBase from "./KnowledgeBase.svelte";
</script>

<Guard
	requiredPermissions={[
		"KnowledgeBase.manage",
		"KnowledgeBase.view",
		"KnowledgeBase.update",
		"KnowledgeBase.delete"
	]}
	redirect
	redirectPath="/agent-types"
>
	<KnowledgeBase />
</Guard>
