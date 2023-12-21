<script lang="ts">
	import type { Placement } from "@popperjs/core";
	import { onMount } from "svelte";
	import { createPopperActions, type PopperOptions } from "svelte-popperjs";
	// Variables

	export let mainClass = "";
	export let contentClass = "";
	export let isOpen = false;
	export let onClose: (() => any) | undefined = undefined;
	export let placement: Placement = "bottom-start";
	export let disabled: boolean = false;
	let component: HTMLDivElement;

	// Popper Settings
	const [popperRef, popperContent] = createPopperActions({ placement });
	export let popperOptions: PopperOptions<any> = {};
	// State

	// HandleState

	function handleClick() {
		if (disabled) return;
		if (isOpen) {
			handleClose();
		} else isOpen = true;
	}

	function handleClose() {
		isOpen = false;
		if (onClose) {
			onClose();
		}
	}

	function handlePopperClose(e: any) {
		if (component.contains(e.target)) {
			return;
		}
		handleClose();
	}

	// Lifecycle

	onMount(() => {
		if (disabled) return;
		document?.addEventListener("click", handlePopperClose);

		return () => {
			document.removeEventListener("click", handlePopperClose);
		};
	});
</script>

<div bind:this={component} class="">
	<!-- Main Component -->
	<div role="none" use:popperRef class={mainClass} on:click={handleClick} on:keydown={handleClick}>
		<slot name="main" />
	</div>
	<!-- Popper Component -->
	{#if isOpen}
		<div use:popperContent={popperOptions} class="z-10 {contentClass}">
			<slot name="content" />
		</div>
	{/if}
</div>
