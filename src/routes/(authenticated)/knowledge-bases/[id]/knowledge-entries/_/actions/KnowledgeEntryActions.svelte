<script lang="ts">
	import type { _KnowledgeEntry } from "../../KnowledgeEntry";
	import KnowledgeEntryActionView from "./KnowledgeEntryActionView.svelte";
	export let data: _KnowledgeEntry;
</script>

<div class="flex flex-wrap gap-1">
	<KnowledgeEntryActionView knowledgeEntry={data} />
</div>
