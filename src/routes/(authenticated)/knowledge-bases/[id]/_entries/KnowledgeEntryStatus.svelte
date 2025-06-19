<script lang="ts">
	import { KnowledgeEntryRepository } from "$repositories";
	import { onMount } from "svelte";
	import type { _KnowledgeEntry } from "./KnowledgeEntries";
	let { data }: { data: _KnowledgeEntry } = $props();

	let knowledgeEntry = $state(data);

	// Use $derived to make the color reactive to changes in knowledgeEntry.status
	let color = $derived(() => {
		switch (knowledgeEntry.status) {
			case "PENDING":
			case "EXTRACTING":
			case "CHUNKING":
			case "EMBEDDING":
				return "text-amber-500";
			case "READY":
				return "text-green-500";
			case "FAILED":
				return "text-red-500";
			default:
				// Provide a default color in case status is unexpected
				return "text-blue-500";
		}
	});

	let intervalId: number | undefined;

	onMount(() => {
		async function pollStatus() {
			// Fetch the latest status
			await fetchStatus();

			// Check the status after fetching
			if (knowledgeEntry.status === "READY" || knowledgeEntry.status === "FAILED") {
				// If status is ready or failed, stop polling
				clearInterval(intervalId);
				intervalId = undefined; // Clear the variable
			}
			// If not ready or failed, the interval continues
		}

		// Fetch status immediately on mount
		pollStatus();

		// Start polling every 1 second (1000ms)
		// Use window.setInterval for correct typing in SvelteKit build environment
		intervalId = window.setInterval(pollStatus, 1000);

		// Cleanup function to stop polling when the component is destroyed
		return () => {
			if (intervalId !== undefined) {
				clearInterval(intervalId);
				intervalId = undefined;
			}
		};
	});

	async function fetchStatus() {
		// This update to knowledgeEntry state will now trigger the color $derived calculation
		// Also the status check in pollStatus uses this updated state
		knowledgeEntry = await KnowledgeEntryRepository.get(data.id);
	}
</script>

<div
	class="flex gap-1.5 items-center justify-center rounded outline outline-1 drop-shadow-sm text-3xs {color()} bg-white font-semibold py-1.5 px-2.5 text-center"
>
	<div>
		{knowledgeEntry.status}
	</div>
	{#if !["READY", "FAILED"].includes(knowledgeEntry.status)}
		<span class="line-md--loading-loop"></span>
	{/if}
</div>

<style>
	.line-md--loading-loop {
		display: inline-block;
		width: 12px;
		height: 12px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%235bca26' stroke-dasharray='16' stroke-dashoffset='16' stroke-linecap='round' stroke-linejoin='round' stroke-width='3.2' d='M12 3c4.97 0 9 4.03 9 9'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='16;0'/%3E%3CanimateTransform attributeName='transform' dur='1.5s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/svg%3E");
	}
</style>
