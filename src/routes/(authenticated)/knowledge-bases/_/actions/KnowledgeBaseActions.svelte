<script lang="ts">
	import type { _KnowledgeBase } from "../../KnowledgeBases";
	import KnowledgeBaseActionView from "./KnowledgeBaseActionView.svelte";
	export let data: _KnowledgeBase;
</script>

<div class="flex flex-wrap gap-1">
	<KnowledgeBaseActionView knowledgeBase={data} />
</div>
