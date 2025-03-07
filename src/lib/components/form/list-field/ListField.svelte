<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button } from "$lib/components";

	import { atom } from "nanostores";
	import { dndzone } from "svelte-dnd-action";
	import { FormControl, type ListItem } from "..";

	type T = $$Generic;

	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let controller: FormControl<T[]> = new FormControl();
	export let disabled = false;
	export let isEditing = atom(false);
	export let onSave: ((controller: FormControl<T[]>) => any) | undefined = undefined;
	export let emptyText: string = "List is empty";

	// States
	const appState = getAppState();
	const toastState = getToastState();

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";

	// Initialize

	const initialItems: ListItem[] = controller.value
		? controller.value.map((item, i) => {
				return {
					id: i,
					item: item
				};
			})
		: [];
	const writableItems = atom<ListItem[]>(initialItems);

	// Functions

	function handleDndConsider(e: CustomEvent<DndEvent>) {
		writableItems.set([...(e.detail.items as ListItem[])]);
	}

	function handleDndFinalize(e: CustomEvent<DndEvent>) {
		const { items: newItems } = e.detail;
		onDrop(newItems as ListItem[]);
	}
	export let onDrop: (newItems: ListItem[]) => any = (newItems) => {
		writableItems.set([...newItems]);
	};

	function handleItemDelete(i: number) {
		const currentValue = writableItems.get() ?? [];
		currentValue.splice(i, 1);
		writableItems.set([...currentValue]);
	}

	async function handleSave() {
		try {
			appState.loading.set(true);

			if (onSave) {
				await Promise.resolve(onSave(controller));
			}

			isEditing.set(false);
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
			toastState.success({ message: "List have been updated" });
		}
	}

	function handleCancel() {
		isEditing.set(false);
	}
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
				{#each $writableItems as item, i (item.id)}
					<!-- <div
						class="m-1 bg-gray-50 shadow-md shadow-gray-300 drop-shadow-md rounded-sm hover:shadow-gray-600/50 transition hover:scale-[1.03] {limit &&
						limit - 1 < i
							? 'hidden'
							: ''}"
						style={`height: ${height}px; width: ${width}px`}
						animate:flip={{ duration: 300 }}
					>
						
					</div> -->
				{/each}
			</div>
			{#if $writableItems.length === 0}
				<div class="w-full flex items-center justify-center p-2 bg-slate-100">{emptyText}</div>
			{/if}

			{#if !disabled}
				<div class="mx-1.5 flex w-full gap-2 items-center text-xs text-white">
					{#if $isEditing}
						<Button>
							<div slot="label" class="w-full">
								<div class=" flex gap-1 items-center justify-center">
									<iconify-icon icon="bx:image-add" class="text-lg"></iconify-icon>
									<div>Add Item</div>
								</div>
							</div>
						</Button>
						<Button class="button-green " onClick={handleSave}>
							<div slot="label" class="w-full">
								<div class=" w-full flex gap-1 items-center justify-center">
									<iconify-icon icon="bx:save" class="text-lg"></iconify-icon>
									<div>Save</div>
								</div>
							</div>
						</Button>
						<Button class=" button-red " onClick={handleCancel}>
							<div slot="label" class="w-full">
								<div class=" w-full flex gap-1 items-center justify-center">
									<iconify-icon icon="bx:undo" class="text-lg"></iconify-icon>
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
									<iconify-icon icon="bx:edit-alt" class="text-lg"></iconify-icon>
									<div>Edit List</div>
								</div>
							</div></Button
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
