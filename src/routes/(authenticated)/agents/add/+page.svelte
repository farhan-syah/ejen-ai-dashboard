<script>
	import { Guard } from "$lib/components";
	import AgentAdd from "./AgentAdd.svelte";
</script>

<Guard requiredPermissions={["Agent.manage", "Agent.add"]} redirect redirectPath="/agents">
	<AgentAdd />
</Guard>
