<script>
	import { Guard } from "$lib/components";
	import AgentType from "./AgentType.svelte";
</script>

<Guard
	requiredPermissions={[
		"AgentType.manage",
		"AgentType.view",
		"AgentType.update",
		"AgentType.delete"
	]}
	redirect
	redirectPath="/agent-types"
>
	<AgentType />
</Guard>
