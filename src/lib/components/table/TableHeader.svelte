<script lang="ts">
	import { TableHeaderColumn, getTableContext } from ".";

	const context = getTableContext();
	const columns = context.visibleColumns;
</script>

<thead class="cursor-pointer">
	<tr class="bg-slate-100 border-b-2 border-slate-300">
		{#each $columns as column}
			<TableHeaderColumn {column} />
		{/each}
	</tr>
</thead>
