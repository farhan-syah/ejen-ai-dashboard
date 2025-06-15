<script lang="ts">
	import { getTableContext, type TableColumn } from ".";

	let context = getTableContext();
	export let column: TableColumn<any>;
	const key = column.key as string;

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

	function handleSort() {
		if (column.sortable) {
			context.sort(key);
		}
	}

	const orderBy = context.orderBy;
</script>

<th class={column.shrink ? "w-0 whitespace-nowrap" : ""} on:click={handleSort}>
	<div class="flex gap-1.5 px-2 py-1.5 items-center {getPosition()} {column.headerClass ?? ''}">
		<div>
			{column.label}
		</div>
		{#if $orderBy && $orderBy[key]}
			{#if $orderBy[key] === "asc"}
				<iconify-icon icon="uiw:caret-up" class=" text-green-500"></iconify-icon>
			{/if}
			{#if $orderBy[key] === "desc"}
				<iconify-icon icon="uiw:caret-down" class=" text-green-500"></iconify-icon>
			{/if}
		{/if}
	</div>
</th>
