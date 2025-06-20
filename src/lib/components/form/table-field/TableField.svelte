<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import { FormControl } from "../controller";
	import type { Snippet } from "svelte";
	type TableFieldRecord = Record<string, any>;

	interface Props {
		label?: string;
		controller?: FormControl<TableFieldRecord>;
		disabled?: boolean;
		showErrorCount?: number;
		class?: string;
		labelPostfix?: Snippet;
		accept?: string;
		onChange?: (record: TableFieldRecord) => any;
	}

	const {
		label,
		controller = new FormControl<TableFieldRecord>({ value: {} }),
		disabled = false,
		showErrorCount = 1,
		class: componentClass,
		labelPostfix,
		onChange
	}: Props = $props();

	const errors = controller.errors;
	const value = controller.writableValue;
	const isFocused = controller.isFocused;
	const hasError = controller.hasError;
	const touched = controller.touched;
	const dirty = controller.dirty;
	let newRow = {};
	const labelClass = $derived(() => {
		if ($isFocused) {
			if ($hasError) {
				return "text-red-500";
			} else {
				return "text-blue-500";
			}
		} else {
			if ($hasError) {
				return "text-red-500";
			} else {
				return "text-gray-500";
			}
		}
	});

	const outlineClass = $derived(() => {
		let outlineClass = "outline-2";
		if ($isFocused) {
			outlineClass = "outline-2";
			if ($hasError) {
				outlineClass += " outline-red-500";
			} else {
				outlineClass += " outline-blue-500";
			}
		} else {
			outlineClass = "outline-1";
			if ($hasError) {
				outlineClass += " outline-red-500";
			} else {
				outlineClass += " outline-gray-300";
			}
		}
		return outlineClass;
	});

	function updateKey(index: number, newKey: string) {
		if ($value) {
			const entries = Object.entries($value);
			if (index < entries.length) {
				const [oldKey, oldValue] = entries[index];
				if (!newKey || newKey === oldKey || $value[newKey] !== undefined) return;
				entries[index] = [newKey.replaceAll(" ", ""), oldValue];
			} else entries.push([newKey, undefined]);
			const updated = Object.fromEntries(entries);
			$value = updated;
		}
	}

	function updateValue(index: number, newValue: any) {
		if ($value) {
			const entries = Object.entries($value);
			if (index < entries.length) {
				entries[index][1] = newValue;
			} else entries.push([" ", newValue]);
			const updated = Object.fromEntries(entries);
			$value = updated;
		}
	}
</script>

<div class={twMerge(["group w-full text-gray-600", componentClass])}>
	{#if label}
		<div class="mb-1">
			<label for={controller.id} class="group-hover:text-blue-500 {labelClass()}">
				<div class="flex-grow">
					{label}
					{#if controller.required}
						<span class="text-red-500">*</span>
					{/if}
				</div>

				{@render labelPostfix?.()}
			</label>
		</div>
	{/if}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		id={controller.id}
		class="w-full outline-hidden cursor-default"
		onfocus={() => {
			if (!disabled) {
				isFocused.set(true);
				if (!$touched) {
					touched.set(true);
				}
			}
		}}
		onblur={() => {
			isFocused.set(false);
			if ($touched && !$dirty) {
				dirty.set(true);
			}
			controller.validate();
		}}
	>
		<div
			class="w-full outline rounded min-h-9 hover:outline-2 hover:outline-blue-500 {outlineClass()}"
		>
			<table class="w-full table-auto">
				<colgroup>
					<col class="w-1/4" />
					<col class="w-3/4" />
				</colgroup>
				<tbody>
					{#if $value}
						{#each Object.entries({ ...$value, ...{ "": "" } }) as [key, val], i}
							<tr>
								<td class="border">
									<input
										value={key}
										class="w-full outline-hidden p-1 focus:bg-blue-100/70"
										onkeyup={(e) => {
											updateKey(i, e.currentTarget.value);
										}}
									/>
								</td>
								<td class="border">
									<input
										value={val}
										class="w-full outline-hidden p-1 focus:bg-blue-100/70"
										onkeyup={(e) => {
											updateValue(i, e.currentTarget.value);
										}}
									/>
								</td>
							</tr>
						{/each}
						<!-- {#key newRow}
							<tr>
								<td class="border">
									<input
										class="w-full outline-hidden p-1 focus:bg-blue-100/70"
										onkeyup={(e) => {
											newKey(e.currentTarget.value);
										}}
									/>
								</td>
								<td class="border">
									<input
										class="w-full outline-hidden p-1 focus:bg-blue-100/70"
										onkeyup={(e) => {
											newValue(e.currentTarget.value);
										}}
									/>
								</td>
							</tr>
						{/key} -->
					{/if}
				</tbody>
			</table>
		</div>
	</div>

	<div class="text-red-500 text-xs">
		{#each $errors as error, index}
			{#if index < showErrorCount}
				<div class="mt-1">
					{error}
				</div>
			{/if}
		{/each}
	</div>
</div>
