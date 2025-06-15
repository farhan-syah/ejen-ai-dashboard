<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { _KnowledgeBase } from "../../KnowledgeBases";
	export let knowledgeBase: _KnowledgeBase;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	link={`/knowledge-bases/${knowledgeBase.id}`}
	onClick={() => {
		goto(`/knowledge-bases/${knowledgeBase.id}`);
	}}
/>
