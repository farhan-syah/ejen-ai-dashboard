<script lang="ts">
	import { Icon } from "$lib/components/icons";
	import { fromEvent, type FileWithPath } from "file-selector";
	import { nanoid } from "nanoid";
	import type { Snippet } from "svelte";
	import { twMerge } from "tailwind-merge";
	import { type FileItem } from ".";
	import { FormControl } from "../controller";

	interface Props {
		label?: string;
		controller?: FormControl<FileItem[]>;
		disabled?: boolean;
		showErrorCount?: number;
		class?: string;
		labelPostfix?: Snippet;
		accept?: string;
		limit?: number;
		onChange?: (files?: FileItem[]) => any;
	}

	const {
		label,
		controller = new FormControl<FileItem[]>({ value: [] }),
		disabled = false,
		showErrorCount = 1,
		class: componentClass,
		labelPostfix,
		accept = "*",
		limit = 1,
		onChange
	}: Props = $props();

	const errors = controller.errors;
	const value = controller.writableValue;
	const isFocused = controller.isFocused;
	const hasError = controller.hasError;
	const touched = controller.touched;
	const dirty = controller.dirty;

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

	let inputRef: HTMLInputElement;

	function handleChooseFile(_e: any) {
		if (inputRef) {
			inputRef.click();
			isFocused.set(false);
		}
	}

	async function handleFileSelected(e: Event) {
		let _files = (await fromEvent(e)) as FileWithPath[];
		let items = [...(controller.value ?? [])];
		_files.forEach((file) => {
			if (!items.some((a) => a.path === file.path)) {
				const ext = file.name.split(".").pop()?.toLowerCase();
				let icon: string | undefined;
				switch (ext) {
					case "pdf":
						icon = "material-icon-theme:pdf";
				}
				let item: FileItem = {
					id: nanoid(),
					path: file.path,
					url: URL.createObjectURL(file),
					file: file,
					name: file.name,
					ext: ext,
					icon: icon
				};

				items.push(item);
			}
		});
		controller.writableValue.set([...items]);
		if (inputRef) {
			inputRef.value = "";
		}

		if (onChange) {
			onChange(items);
		}
	}

	function handleFileDelete(i: number) {
		const currentValue = value.get() ?? [];
		currentValue.splice(i, 1);
		controller.writableValue.set([...currentValue]);
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
		class="w-full outline-none cursor-default"
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
			class="flex w-full outline rounded min-h-9 hover:outline-2 hover:outline-blue-500 {outlineClass()}"
		>
			{#if $value && $value.length > 0}
				<div class="w-full flex flex-col overflow-hidden">
					<div class="w-full flex flex-col gap-2 p-2 items-start">
						{#each $value as item, i}
							<div class="w-full flex gap-2">
								<div
									class=" flex-auto text-xs text-start text-nowrap overflow-hidden text-ellipsis"
								>
									<iconify-icon
										icon={item.icon ?? "material-icon-theme:document"}
										class="text-base -mb-0.75"
									></iconify-icon>
									{item.name}
								</div>
								<Icon
									icon="bx:x"
									buttonClass="h-5 text-lg text-red-500 rounded hover:bg-amber-200 "
									onClick={() => {
										handleFileDelete(i);
									}}
								/>
							</div>
						{/each}
					</div>
					{#if $value.length < limit}
						<div
							class="flex text-white font-semibold justify-center bg-blue-500 hover:bg-blue-600 m-1.5 rounded p-1 cursor-pointer"
							onclick={(e) => {
								if (!disabled) {
									isFocused.set(true);
									handleChooseFile(e);
								}
							}}
						>
							Add File
						</div>
					{/if}
				</div>
			{:else}
				<div
					class="w-full group-hover:text-blue-500 cursor-pointer"
					onclick={(e) => {
						if (!disabled) {
							isFocused.set(true);
							handleChooseFile(e);
						}
					}}
				>
					<div class="p-2">Choose File</div>
				</div>
			{/if}
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
	<input
		bind:this={inputRef}
		type="file"
		{accept}
		class="hidden"
		onchange={handleFileSelected}
		{disabled}
	/>
</div>
