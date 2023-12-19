<script lang="ts">
	import { TableHeaderColumn, getTableContext } from ".";

	const context = getTableContext();
	const selectable = context.selectable;
	const columns = context.visibleColumns;
	const allSelected = context.isAllSelected;
</script>

<thead class="cursor-pointer">
	<tr class="bg-slate-100 border-b-2 border-slate-300">
		{#if $selectable}
			<td class="pl-2 pt-2">
				<input
					type="checkbox"
					on:click={() => {
						context.selectAll();
					}}
					checked={$allSelected}
				/>
			</td>
		{/if}
		{#each $columns as column}
			<TableHeaderColumn {column} />
		{/each}
	</tr>
</thead>
