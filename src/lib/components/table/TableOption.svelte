<script lang="ts">
	import MultiSelectField from "../form/select-field/MultiSelectField.svelte";

	import { getAppState } from "$applications";

	import SelectField from "../form/select-field/SelectField.svelte";

	import { FileType, saveAsFile } from "$lib/utils/file-saver";
	import { FieldOption } from "$types";
	import Icon from "@iconify/svelte";
	import { json2csv } from "json-2-csv";
	import { getTableContext, type BulkActionCallback, type TableColumn } from ".";
	import { Button, FormControl } from "..";
	type T = $$Generic;

	const context = getTableContext();
	const toCSV = context.toCSV;

	const limit = context?.limit;

	const total = context.total;
	const options = context.limitOptions;
	const columns = context.columns;
	const selected = context.selected;
	const appState = getAppState();

	async function handleDownloadSelected() {
		if (toCSV)
			try {
				if (context.onGetSelected) {
					appState.loading.set(true);

					const data = await context.onGetSelected([...$selected]);

					const csv = toCSV(data);

					const csvString = json2csv(csv.data, { keys: csv.columnKeys });

					saveAsFile(csvString, csv.fileName, FileType.csv);
				}
			} catch (error) {
				appState.error.set(error);
			} finally {
				appState.loading.set(false);
			}
	}

	async function handleDownloadAll() {
		if (toCSV)
			try {
				if (context.onSearch) {
					appState.loading.set(true);
					let filter = context.currentFilter;
					delete filter.skip;
					delete filter.limit;
					let data = await context.onSearch(filter);

					let csv = toCSV(data);

					let csvString = json2csv(csv.data, { keys: csv.columnKeys });

					saveAsFile(csvString, csv.fileName, FileType.csv);
				}
			} catch (error) {
				appState.error.set(error);
			} finally {
				appState.loading.set(false);
			}
	}
	const columnOptions: FieldOption[] = (columns ?? []).map((c) => {
		return { value: c.key, label: c.label, selected: c.visible };
	});

	const optionController = new FormControl<number>({ value: $limit });

	optionController.writableValue.listen((value) => {
		if (value) context.onLimitChange(value);
	});
	const columnController = new FormControl<FieldOption[]>({
		name: "column",
		value: columnOptions
	});

	columnController.writableValue.subscribe((v) => {
		if (v) {
			let selectedKeys: (string | number | symbol)[] = v
				.filter((v) => v.selected)
				.map((e) => e.value);
			let selectedLabels = v.filter((v) => v.selected).map((e) => e.label);
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

	// Bulk Actions

	const bulkActions = context.bulkActions;
	const bulkActionOptions: FieldOption<FieldOption<BulkActionCallback>>[] = Object.entries(
		bulkActions
	).map((action) => {
		return { label: action[0], value: { label: action[0], value: action[1] } };
	});
	const bulkActionController = new FormControl<FieldOption<BulkActionCallback>>();
	const bulkActionValue = bulkActionController.writableValue;

	async function handleBulkAction() {
		if ($bulkActionValue)
			try {
				appState.loading.set(true);
				const selected = context.selected.get();
				await $bulkActionValue.value(selected);
			} catch (e) {
				appState.error.set(e);
			} finally {
				appState.loading.set(false);
			}
	}

	function handleClearBulkAction() {
		bulkActionController.writableValue.set(undefined);
	}
</script>

{#if $total != null && $total > 0}
	<div class="flex gap-2 items-center mt-3 mb-1">
		<div class="inline-flex gap-2 items-center text-gray-500">
			<div>Show</div>
			<SelectField
				controller={optionController}
				optionClass="w-8 text-center py-1"
				options={$options}
			/>
			<div>entries</div>
		</div>
		{#if $selected.length > 0}
			<div class="border-l-2 border-slate-300 pl-2 flex items-center gap-1">
				<div class=" font-semibold">
					{$selected.length}
				</div>
				<div>row(s) selected</div>
				<button
					class="bg-slate-200 rounded-sm flex gap-1 items-center px-1 py-0.5 pointer"
					tabindex="-1"
					on:click={() => {
						context.clearSelection();
					}}
				>
					<div>Clear</div>
					<Icon icon="bx:x" class="text-slate-500 text-sm"></Icon>
				</button>
			</div>
			{#if bulkActionOptions.length > 0}
				<div class="border-l-2 border-slate-300 pl-2 flex items-center gap-1">
					<SelectField
						controller={bulkActionController}
						optionClass="whitespace-nowrap py-1"
						placeholder="Bulk Action"
						options={bulkActionOptions}
						valueTransform={(option) => option?.label}
					/>
					{#if $bulkActionValue}
						<Button class="py-1 text-xs" label="Apply" onClick={handleBulkAction} />
						<Button
							class="button-red py-1 text-xs"
							label="Cancel"
							onClick={handleClearBulkAction}
						/>
					{/if}
				</div>
			{/if}
		{/if}

		<div class="flex-grow"></div>

		{#if context.showColumnFilter && columnOptions.length > 0}
			<div class="w-fixed w-36">
				<MultiSelectField
					options={columnOptions}
					placeholder="Columns"
					controller={columnController}
				/>
			</div>
		{/if}
		{#if toCSV}
			<Button
				class="px-1.5 py-1 text-xs gap-1"
				label="Download Selected to CSV ({$selected.length})"
				onClick={() => handleDownloadSelected()}
				valid={$selected.length > 0}
			>
				<div slot="prefix">
					<Icon icon="mdi:download" class="text-2xs -mt-0.5" />
				</div>
			</Button>{/if}
		{#if toCSV}
			<Button
				class="px-1.5 py-1 text-xs gap-1"
				label="Download All to CSV ({$total})"
				onClick={() => handleDownloadAll()}
			>
				<div slot="prefix">
					<Icon icon="mdi:download" class="text-2xs -mt-0.5" />
				</div>
			</Button>{/if}
	</div>
{/if}
