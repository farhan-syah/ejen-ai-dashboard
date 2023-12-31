<script lang="ts">
	import { FormControl } from "$lib/components";
	import Icon from "@iconify/svelte";
	import { fromEvent, type FileWithPath } from "file-selector";
	import { atom } from "nanostores";
	import { dndzone } from "svelte-dnd-action";
	import { flip } from "svelte/animate";
	import type { ImageItem } from ".";
	export let label: string | undefined = undefined;
	export let height = 100;
	export let width = 100;
	export let limit: number | undefined = undefined;
	export let controller: FormControl = new FormControl<ImageItem[]>();
	export let disabled = false;

	let inputRef: HTMLInputElement;

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";
	const writableItems = atom<ImageItem[]>([]);

	// Functions

	function handleDndConsider(e: CustomEvent<DndEvent>) {
		$writableItems = e.detail.items as ImageItem[];
	}
	function handleDndFinalize(e: CustomEvent<DndEvent>) {
		const { items: newItems } = e.detail;
		onDrop(newItems as ImageItem[]);
	}
	export let onDrop: (newItems: ImageItem[]) => any = (newItems) => {
		$writableItems = newItems;
	};

	function handleUploadClick(event: any) {
		if (inputRef) {
			inputRef.click();
		}
	}
	async function handleUploadChange(e: Event) {
		let _files = (await fromEvent(e)) as FileWithPath[];
		let items = [...$writableItems];
		_files.forEach((file) => {
			if (!items.some((a) => a.path === file.path)) {
				let item: ImageItem = {
					id: items.length + 1,
					path: file.path,
					image: URL.createObjectURL(file),
					file: file,
					fileName: file.name,
					ext: file.name.split(".").pop()
				};
				items.push(item);
			}
		});
		$writableItems = [...items];
	}

	function handleImageClick(event: any, i: number) {
		// currentIndex = i;
		// overlay.open();
	}

	function handleImageDelete(event: any, i: number) {
		const currentValue = writableItems.get() ?? [];
		currentValue.splice(i, 1);
		writableItems.set([...currentValue]);
	}
</script>

<div class={componentClass}>
	{#if label}
		<div class="mb-1">
			<label for={controller.id} class="flex {labelClass}">
				<div class="flex-grow">
					{label}
					{#if controller.required}
						<span class="text-red-500">*</span>
					{/if}
				</div>

				{#if $$slots.labelPostfix}
					<slot name="labelPostfix" />
				{/if}
			</label>
		</div>
	{/if}
	<div
		id={controller.id}
		class=" bg-gray-50 flex flex-col items-center justify-center gap-2 p-2 outline outline-1 rounded outline-gray-300"
	>
		<div
			class="flex w-full flex-wrap bg-slate-100 p-0.5"
			use:dndzone={{
				items: $writableItems,
				flipDurationMs: 200,
				dropTargetStyle: {},
				dropTargetClasses: ["outline-blue-500"]
			}}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each $writableItems as item, i (item.id + item.image)}
				<div
					class="m-1 bg-gray-50 shadow-md shadow-gray-300 drop-shadow-md rounded-sm hover:shadow-gray-600/50 transition hover:scale-[1.03] {limit &&
					limit - 1 < i
						? 'hidden'
						: ''}"
					style={`height: ${height}px; width: ${width}px`}
					animate:flip={{ duration: 300 }}
				>
					{#if item.image}
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							src={item.file ? item.image : item.image + "?width=" + width * 3}
							alt={item.image}
							class=" object-cover"
							style={`height: ${height}px; width: ${width}px`}
							crossorigin=""
							on:click={(e) => {
								handleImageClick(e, i);
							}}
							on:keypress
						/>
						{#if !disabled}
							<button
								on:click={(e) => {
									handleImageDelete(e, i);
								}}
								class="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5 waves-effect shadow-md shadow-gray-500 hover:shadow-gray-600 text-white"
							>
								<Icon icon="bx:x" class=" text-xl" />
							</button>
						{/if}

						<slot />
					{/if}
				</div>
			{/each}
		</div>
		<div class="w-full flex gap-2 text-xs text-white">
			<button
				class="flex-grow bg-blue-500 rounded text-white hover:opacity-90"
				on:click={handleUploadClick}
			>
				<div class=" w-full flex gap-1 items-center justify-center p-1.5">
					<Icon icon="bx:plus-circle" class="text-lg " />
					<div>Add image</div>
				</div>
				<input
					bind:this={inputRef}
					type="file"
					accept="image/png, image/jpeg"
					class="hidden"
					multiple
					on:change={handleUploadChange}
				/>
			</button>

			<button class="flex-grow bg-green-500 rounded text-white hover:opacity-90">
				<div class=" w-full flex gap-1 items-center justify-center p-1.5">
					<Icon icon="bx:cloud-upload" class="text-lg " />
					<div>Upload to Cloud</div>
				</div>
			</button>
			<button class="flex-grow bg-red-500 rounded text-white hover:opacity-90">
				<div class=" w-full flex gap-1 items-center justify-center p-1.5">
					<Icon icon="bx:undo" class="text-lg " />
					<div>Cancel & Revert Changes</div>
				</div>
			</button>
		</div>
	</div>
</div>
