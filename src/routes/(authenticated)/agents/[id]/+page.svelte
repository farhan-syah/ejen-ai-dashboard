<script>
	import { Guard } from "$lib/components";
	import Agent from "./Agent.svelte";
</script>

<Guard
	requiredPermissions={["Agent.manage", "Agent.view", "Agent.update", "Agent.delete"]}
	redirect
	redirectPath="/agents/categories"
>
	<Agent />
</Guard>
