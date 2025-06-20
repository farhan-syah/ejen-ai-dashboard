<script lang="ts">
	import { type _AgentType } from "../../AgentTypes";

	let { data }: { data: _AgentType } = $props();
</script>

<div class="  rounded border flex items-center h-8 w-8 justify-center">
	<iconify-icon icon={data.icon} height="28" width="28"></iconify-icon>
</div>
