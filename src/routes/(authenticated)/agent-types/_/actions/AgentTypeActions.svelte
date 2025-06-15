<script lang="ts">
	import type { _AgentType } from "../../AgentTypes";
	import AgentTypeActionView from "./AgentTypeActionView.svelte";
	export let data: _AgentType;
</script>

<div class="flex flex-wrap gap-1">
	<AgentTypeActionView agentType={data} />
</div>
