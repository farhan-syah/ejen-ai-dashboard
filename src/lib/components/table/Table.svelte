<script lang="ts">
	import { atom, type WritableAtom } from "nanostores";
	import { TableBody, TableContext, TableFooter, TableHeader, TableOption } from ".";

	export let showHeader = true;
	export let showOption = true;
	export let showFooter = true;

	export let context: TableContext;

	const asyncData = context.asyncData;

	const data: WritableAtom<any[]> = atom([]);

	asyncData.subscribe(async (d) => {
		const newData = await d;
		if (newData) data.set(newData);
	});
	const selectable = context.selectable;
	const visibleColumns = context.visibleColumns;
</script>

<div class="text-xs">
	{#if showOption}
		<TableOption />
	{/if}
	<div class="flex flex-col overflow-x-auto rounded-sm shadow-sm mt-2 cursor-default">
		<table class="table-auto">
			{#if showHeader}
				<TableHeader />
			{/if}
			<TableBody data={$data} />
			<tbody>
				<tr>
					<td colspan={$visibleColumns.length + (selectable ? 1 : 0)}>
						{#if $data.length === 0}
							<div class="flex h-28 bg-gray-50 justify-center items-center text-gray-400">
								<p>{context.noDataText ?? "No data available"}</p>
							</div>
						{/if}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	{#if showFooter}
		<TableFooter />
	{/if}
</div>
