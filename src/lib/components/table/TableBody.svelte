<script lang="ts">
	import { TableRow } from ".";

	export let data: readonly any[] = [];
</script>

{#key data}
	<tbody>
		{#each data as data}
			<TableRow {data} />
		{/each}
	</tbody>
{/key}
