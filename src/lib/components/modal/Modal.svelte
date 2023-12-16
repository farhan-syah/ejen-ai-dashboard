<script lang="ts">
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import { Card } from "../card";

	export let isOpen = atom<boolean>(false);
	function handleDismiss() {
		isOpen.set(false);
	}
</script>

{#if $isOpen}
	<div
		role="none"
		class="fixed overlay top-0 left-0 h-full flex w-full z-50 text-gray-800"
		on:click|self={handleDismiss}
		on:keypress={() => {}}
	>
		<div class="  m-auto relative">
			<Card class="p-4">
				<slot />
				<!-- <div class="flex gap-2 font-medium text-medium border-b-2 pb-1 border-red-100 text-red-500">
					<div>ERROR</div>
					<div class=" flex-grow flex justify-between">
						{#if $error.status}
							<div>{$error.status}</div>
						{/if}
						{#if $error.code}
							<div>{$error.code}</div>
						{/if}
					</div>
				</div>
				<div class="mt-4">{$error.message ?? "Something when wrong."}</div> -->
			</Card>
			<div
				class="absolute -top-2 -right-2 cursor-pointer bg-red-500 rounded-full shadow-md shadow-gray-500 hover:shadow-gray-600 text-white"
				role="button"
				on:click={handleDismiss}
				on:keydown={handleDismiss}
				tabindex="0"
			>
				<div class="hover:bg-black/10 rounded-full p-0.5">
					<Icon icon="bx:x" class="text-lg" />
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
