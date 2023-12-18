<script lang="ts">
	import { getAppState } from "$applications";
	import Icon from "@iconify/svelte";
	import { Card } from "../card";
	const appState = getAppState();
	const error = appState.error;

	function handleDismiss() {
		error.set(undefined);
	}
</script>

{#if $error}
	<div
		class="fixed overlay top-0 left-0 h-full flex w-full z-50"
		on:click|self={handleDismiss}
		on:keypress={() => {}}
		role="none"
	>
		<div class="m-auto relative">
			<Card class="p-4 w-96 ">
				<div class="flex gap-2 font-medium text-medium border-b-2 pb-1 border-red-100 text-red-500">
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
				<div class="mt-4">{$error.message ?? "Something when wrong."}</div>
			</Card>
			<div
				class="absolute -top-2 -right-2 cursor-pointer bg-red-500 rounded-full p-0.5 waves-effect shadow-md shadow-gray-500 hover:shadow-gray-600 text-white"
				role="button"
				on:click={handleDismiss}
				on:keydown={handleDismiss}
				tabindex="0"
			>
				<Icon icon="bx:x" class="text-lg" />
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay {
		background-color: rgb(7, 7, 77, 0.25);
	}
</style>
