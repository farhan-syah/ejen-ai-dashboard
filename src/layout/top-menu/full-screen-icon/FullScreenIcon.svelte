<script lang="ts">
	import { AppState } from "$applications";
	import IconWithTooltip from "$lib/components/icons/IconWithTooltip.svelte";

	const fullScreenElement = AppState.fullScreenElement;

	async function handleFullScreenChange() {
		if (!$fullScreenElement) {
			await document.body.requestFullscreen().catch((e) => {});
		} else {
			await document.exitFullscreen();
		}
	}

	// document.onfullscreenchange = (_e) => {
	// 	console.log
	// 	AppState.fullScreenElement.set(document.fullscreenElement);
	// };
</script>

<div class="p-2 pointer flex items-center">
	<div
		role="button"
		tabindex="0"
		class="relative"
		on:click={() => {
			handleFullScreenChange();
		}}
		on:keydown={(e) => {
			if (e.key === "Enter") {
				handleFullScreenChange();
			}
		}}
	>
		<IconWithTooltip
			icon={!$fullScreenElement ? "bx:fullscreen" : "bx:exit-fullscreen"}
			tooltip={!$fullScreenElement ? "Full screen" : "Exit full screen"}
			class="text-lg text-black "
		></IconWithTooltip>
	</div>
</div>
