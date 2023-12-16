<script lang="ts">
	import { getTableContext, type TableColumn } from ".";

	let context = getTableContext();
	export let column: TableColumn<any>;

	// let sort = context.sort;

	// function sort() {
	// 	if (column.sortable) {
	// 		let { state } = context.sort(column.key, _state);

	// 		_state = state;
	// 	}
	// }

	function getPosition() {
		if (column.align === "center") return "justify-center";
		else if (column.align === "right") return "justify-end";
		else return "";
	}
</script>

<th class={column.shrink ? "w-0 whitespace-nowrap" : ""}
	><div class="flex px-2 py-3 {getPosition()} {column.headerClass ?? ''}">
		<div>
			{column.label}
		</div>

		<!-- {#if sort?.key === column.key}
			<div class="ml-2 w-4 h-4">
				{#if sort?.state === SortState.DESC}
					<Icon icon="uiw:caret-up" class="w-4 h-4 text-green-500" />
				{/if}
				{#if sort?.state === SortState.ASC}
					<Icon icon="uiw:caret-down" class="w-4 h-4 text-green-500" />
				{/if}
			</div>
		{/if} -->
	</div></th
>
