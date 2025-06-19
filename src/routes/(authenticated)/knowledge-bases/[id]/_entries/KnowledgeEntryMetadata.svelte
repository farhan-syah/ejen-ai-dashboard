<script lang="ts">
	import { capitalizeWord } from "$lib/utils";
	import type { _KnowledgeEntry } from "./KnowledgeEntries";
	let { data }: { data: _KnowledgeEntry } = $props();

	const metadata = (data.metadata ?? {}) as Record<string, any>;
</script>

<div class="w-80 grid grid-cols-4 gap-x-2 gap-y-0.5">
	{#each Object.entries(metadata) as data}
		{#if data[1]}
			<div class="col-span-1 flex">
				<div class="flex-auto">
					{capitalizeWord(data[0])}
				</div>
				<div>:</div>
			</div>
			<div class=" col-span-3 text-left">
				{data[1]}
			</div>
		{/if}
	{/each}
</div>
