<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Dialog, FormControl, Image } from "$lib/components";
	import { UploadService } from "$services";
	import Icon from "@iconify/svelte";
	import { fromEvent, type FileWithPath } from "file-selector";
	import { atom } from "nanostores";
	import { dndzone } from "svelte-dnd-action";
	import { flip } from "svelte/animate";
	import type { ImageItem } from ".";
	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let height = 100;
	export let width = 100;
	export let limit: number | undefined = undefined;
	export let controller: FormControl<string[]> = new FormControl();
	export let disabled = false;
	export let isEditing = atom(false);
	export let onSave: ((controller: FormControl<string[]>) => any) | undefined = undefined;
	export let pathPrefix: string | undefined = undefined;

	let inputRef: HTMLInputElement;

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";

	const initialItems: ImageItem[] = controller.value
		? controller.value.map((src, i) => {
				return {
					id: i,
					image: src
				};
			})
		: [];
	const writableItems = atom<ImageItem[]>(initialItems);

	// Functions

	function handleDndConsider(e: CustomEvent<DndEvent>) {
		writableItems.set([...(e.detail.items as ImageItem[])]);
	}

	function handleDndFinalize(e: CustomEvent<DndEvent>) {
		const { items: newItems } = e.detail;
		onDrop(newItems as ImageItem[]);
	}
	export let onDrop: (newItems: ImageItem[]) => any = (newItems) => {
		writableItems.set([...newItems]);
	};

	function handleChooseFile(event: any) {
		if (inputRef) {
			inputRef.click();
		}
	}
	async function handleFileSelected(e: Event) {
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
		writableItems.set([...items]);
	}

	function handleImageClick(src: string) {
		previewImageSrc.set(src);
		isDialogOpen.set(true);
	}

	function handleImageDelete(event: any, i: number) {
		const currentValue = writableItems.get() ?? [];
		currentValue.splice(i, 1);
		writableItems.set([...currentValue]);
	}

	async function handleSave() {
		try {
			appState.loading.set(true);

			const images = writableItems.get();
			const promises: Promise<string>[] = [];

			images.forEach((image) => {
				if (image.file) {
					const promise = UploadService.upload({
						file: image.file,
						filePath: pathPrefix
					}).then((r) => r.key);
					promises.push(promise);
				} else {
					if (image.image) {
						promises.push(Promise.resolve(image.image));
					}
				}
			});

			const result = await Promise.allSettled(promises);
			const src: string[] = (
				result.filter((result) => result.status) as PromiseFulfilledResult<string>[]
			).map((result) => result.value);

			controller.writableValue.set([...src]);

			if (onSave) {
				await Promise.resolve(onSave(controller));
			}

			isEditing.set(false);
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
			toastState.success({ message: "Image have been saved" });
		}
	}

	async function handleCancel() {
		isEditing.set(false);
	}

	// States

	const appState = getAppState();
	const toastState = getToastState();
	const previewImageSrc = atom<string | undefined>();
	const isDialogOpen = atom(false);
</script>

<div class="flex flex-col gap-1 {componentClass}">
	{#if label}
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
	{/if}

	{#if description}
		<div class="italic text-xs mb-1">
			{description}
		</div>
	{/if}

	<div id={controller.id} class=" bg-gray-50 p-2 outline outline-1 rounded outline-gray-300">
		<div class="w-full p-2 bg-slate-100 flex flex-col gap-2.5">
			<div
				class="flex w-full flex-wrap bg-slate-100 {$writableItems.length > 0 ? 'p-0.5' : 'p-0'}"
				use:dndzone={{
					// @ts-ignore
					items: $writableItems,
					flipDurationMs: 200,
					dropTargetStyle: {},
					dropTargetClasses: ["outline-blue-500"],
					dragDisabled: !$isEditing
				}}
				on:consider={handleDndConsider}
				on:finalize={handleDndFinalize}
			>
				{#each $writableItems as item, i (item.id + (item.file ?? item.image))}
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
							<Image
								src={item.file ? item.image : item.image + "?width=" + width * 3}
								alt={item.image}
								class="cursor-pointer h-full w-full"
								onClick={() => {
									if (item.image) {
										handleImageClick(item.image);
									}
								}}
							/>
							{#if !disabled && $isEditing}
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
			{#if $writableItems.length === 0}
				<div class="w-full flex items-center justify-center p-2 bg-slate-100">
					No image available
				</div>
			{/if}

			{#if !disabled}
				<div class="mx-1.5 flex w-full gap-2 items-center text-xs text-white">
					{#if $isEditing}
						<Button onClick={handleChooseFile}>
							<div slot="label" class="w-full">
								<div class=" flex gap-1 items-center justify-center">
									<Icon icon="bx:image-add" class="text-lg " />
									<div>Add image</div>
								</div>
								<input
									bind:this={inputRef}
									type="file"
									accept="image/png, image/jpeg"
									class="hidden"
									multiple
									on:change={handleFileSelected}
								/>
							</div>
						</Button>
						<Button class="button-green " onClick={handleSave}>
							<div slot="label" class="w-full">
								<div class=" w-full flex gap-1 items-center justify-center">
									<Icon icon="bx:save" class="text-lg" />
									<div>Save</div>
								</div>
							</div>
						</Button>
						<Button class=" button-red " onClick={handleCancel}>
							<div slot="label" class="w-full">
								<div class=" w-full flex gap-1 items-center justify-center">
									<Icon icon="bx:undo" class="text-lg " />
									<div>Cancel</div>
								</div>
							</div>
						</Button>
					{:else}
						<Button
							class="button-cyan"
							onClick={() => {
								isEditing.set(true);
							}}
						>
							<div slot="label" class="w-full">
								<div class=" w-full flex gap-1 items-center justify-center">
									<Icon icon="bx:edit-alt" class="text-lg " />
									<div>Edit image</div>
								</div>
							</div></Button
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<Dialog isOpen={isDialogOpen} class=" max-w-7xl" cardClass="p-2">
	{#if $previewImageSrc}
		<Image src={$previewImageSrc} loadingMessage="Loading image..." />
	{/if}
</Dialog>
