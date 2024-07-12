<script lang="ts">
	import { getTableContext } from ".";

	const context = getTableContext();
	export let data: any;

	export let odd = "odd:bg-white";
	export let even = "even:bg-slate-50";
	export let hover = "hover:bg-slate-100";
	const stripe: string = context.striped ? odd + " " + even : "";

	function getPosition(position?: "left" | "right" | "center") {
		if (position === "center") return "flex justify-center";
		else if (position === "right") return "flex justify-end";
		else return "";
	}

	const columns = context.visibleColumns;
	const selectable = context.selectable;
	const selected = context.selected;
	const selectKey = context.selectByKey;
</script>

<tr class="{stripe} {hover} align-top">
	{#if $selectable && selectKey != null}
		<td class="p-2">
			<input
				type="checkbox"
				on:click={() => {
					context.select(data);
				}}
				checked={$selected.includes(data[selectKey])}
			/>
		</td>
	{/if}
	{#each $columns as column}
		<td
			class="{getPosition(column.align)}  {column.contentClass ?? ''} {column.shrink
				? 'whitespace-nowrap'
				: ''} "
		>
			<div class="p-2">
				{#if column.content}
					<svelte:component this={column.content} {data} />
				{:else if column.transform}
					{column.transform(data[column.key], data)}
				{:else}
					{data[column.key] ?? ""}
				{/if}
			</div>
		</td>
	{/each}
</tr>
