<script lang="ts">
	import { browser } from "$app/environment";
	import { getAppState } from "$applications";
	import Button from "$lib/components/buttons/Button.svelte";
	import Card from "$lib/components/card/Card.svelte";

	const appState = getAppState();
</script>

<!-- <svelte:window
	on:fullscreenchange={(e) => {
		appState.fullScreenElement.set(document.fullscreenElement);
	}}
/> -->

<div class="flex items-center justify-center h-full w-full">
	<div class="m-auto">
		<Card class="p-8 flex flex-col gap-4 justify-center items-center">
			<div class="text-lg">Page Not Found</div>
			<div class="flex justify-center gap-2">
				{#if browser && history.length > 1 && document.referrer.startsWith(window.location.origin)}
					<Button
						label="Go Back"
						onClick={() => {
							history.back();
						}}
					/>
				{/if}
				<Button
					valid={browser}
					label="Go to Home Page"
					onClick={() => {
						location.replace("/");
					}}
				/>
			</div>
		</Card>
	</div>
</div>
