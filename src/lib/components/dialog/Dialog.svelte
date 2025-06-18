<script lang="ts">
	import { flyAndScale } from "$lib/utils";
	import type { CallbackFunction } from "$types";

	import { atom } from "nanostores";
	import { onMount } from "svelte";
	import { Card } from "../card";

	// Class
	let componentClass = "";
	export { componentClass as class };
	export let cardClass = "p-4";
	export let onDismiss: CallbackFunction | undefined = undefined;
	export let isOpen = atom<boolean>(false);

	async function handleDismiss() {
		if (onDismiss) {
			Promise.resolve(onDismiss());
		}
		isOpen.set(false);
	}

	onMount(() => {
		window.addEventListener("popstate", (e) => {
			if ($isOpen) {
				e.stopPropagation();
			}
		});
	});
</script>

{#if $isOpen}
	<div
		role="none"
		class="fixed overlay top-0 left-0 h-full flex w-screen z-50 text-gray-600 overflow-y-scroll"
		on:click|self={handleDismiss}
		on:keypress={() => {}}
	>
		<div class="m-auto relative max:w-full {componentClass}" transition:flyAndScale>
			<Card class={cardClass}>
				<slot />
			</Card>
			<div
				class="absolute -top-2 -right-2 cursor-pointer bg-red-500 rounded-full shadow-md shadow-gray-500 hover:shadow-gray-600 text-white"
				role="button"
				on:click={handleDismiss}
				on:keydown={handleDismiss}
				tabindex="0"
			>
				<div class="hover:bg-black/10 rounded-full p-0.5">
					<iconify-icon icon="bx:x" class="text-lg"></iconify-icon>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay {
		background-color: rgb(7, 7, 77, 0.25);
	}
</style>
