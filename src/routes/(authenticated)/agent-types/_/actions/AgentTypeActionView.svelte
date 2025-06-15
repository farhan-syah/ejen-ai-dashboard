<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { _AgentType } from "../../AgentTypes";
	export let agentType: _AgentType;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	link={`/agent-types/${agentType.id}`}
	onClick={() => {
		goto(`/agent-types/${agentType.id}`);
	}}
/>
