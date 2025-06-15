<script lang="ts">
	import { goto } from "$app/navigation";
	import { IconWithTooltip } from "$lib/components";
	import type { _KnowledgeEntry } from "../../KnowledgeEntry";
	export let knowledgeEntry: _KnowledgeEntry;
</script>

<IconWithTooltip
	icon="material-symbols:docs-outline"
	class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
	tooltip="View Details"
	link={`/knowledge-entries/${knowledgeEntry.id}`}
	onClick={() => {
		goto(`/knowledge-entries/${knowledgeEntry.id}`);
	}}
/>
