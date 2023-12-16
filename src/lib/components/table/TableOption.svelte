<!-- <script lang="ts">
	import { FileType, saveAsFile } from "$lib/utils/file-saver";
	import { json2csv } from "json-2-csv";
	import { getTableContext, type TableColumn } from ".";
	import { FormControl, Overlay } from "..";
	import Loader from "../Loader.svelte";
	import { createOverlay } from "../Overlay";
	import Select from "../Select.svelte";
	import Button from "../button/Button.svelte";
	import { DropdownMultiSelectField, type DropdownInput } from "../form-field";
	import type { FieldOption } from "$types";
	type T = $$Generic;

	let context = getTableContext();
	let toCSV = context.toCSV;

	let limit = context?.limit;

	let total = context.total;
	let options = context.limitOptions;
	let columns = context.columns;

	let overlay = createOverlay("overlay");

	async function handleDownload() {
		if (toCSV)
			try {
				overlay.open();
				if (context.onSearch) {
					let filter = context.currentFilter;
					delete filter.skip;
					delete filter.limit;
					let data = await context.onSearch(filter);

					let csv = toCSV(data);

					let csvString = await json2csv(csv.data, { keys: csv.columns });

					saveAsFile(csvString, csv.fileName, FileType.csv);
				}
				overlay.close();
			} catch (error) {
				console.log(error);
			}
	}
	let columnOptions: FieldOption[] = (columns ?? []).map((c) => {
		return { value: c.key, label: c.label, selected: c.visible };
	});

	let columnController = new FormControl<FieldOption[]>({
		name: "column",
		initialValue: columnOptions,
		customType: true,
	});

	columnController.writableValue.subscribe((v) => {
		if (v) {
			let selectedKeys: (string | number | symbol)[] = v
				.filter((v) => v.selected)
				.map((e) => e.value);
			let selectedLabels: (string | number | symbol)[] = v
				.filter((v) => v.selected)
				.map((e) => e.label);
			let newColumn: TableColumn[] = [];

			columns.forEach((column) => {
				let col = column;
				if (selectedKeys.includes(column.key) && selectedLabels.includes(column.label)) {
					col.visible = true;
					newColumn.push(col);
				}
			});

			context.visibleColumns.set(newColumn);
		}
	});
</script>

{#if $total != null && $total > 0}
	<div class="flex items-center mt-3 mb-1">
		<div class="inline-flex w-full items-center text-gray-500">
			<div>Show</div>
			<Select
				options={$options}
				value={limit}
				class="mx-2"
				onChange={(input) => context.onLimitChange(input)}
			/>
			<div>entries</div>
		</div>

		{#if context.showColumnFilter && columnOptions.length > 0}
			<div class="w-fixed w-36">
				<DropdownMultiSelectField
					control={columnController}
					input={columnOptions}
					placeholder="Columns"
					usePlaceholder={true}
				/>
			</div>
		{/if}
		{#if toCSV}
			<Button
				leadingIcon="mdi:download"
				labelClass="ml-8 pr-2"
				maxWidth="100"
				class="h-min mb-1 whitespace-nowrap ml-3 text-sm"
				label="Download CSV ({$total})"
				onClick={() => handleDownload()}
			/>{/if}
	</div>
{/if}

<Overlay context={overlay}>
	<Loader />
</Overlay> -->
