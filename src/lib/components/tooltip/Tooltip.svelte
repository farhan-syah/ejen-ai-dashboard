<script lang="ts">
	export let tooltip: string | undefined = undefined;
	export let position: "start" | "center" | "end" = "center";
	export let onClick: (() => any) | undefined = undefined;
	function handleClick() {
		if (onClick) onClick();
	}
</script>

<div class="relative w-min h-full">
	<div role="none" class="peer {$$props.class ?? ''}" on:click={handleClick} on:keyup={handleClick}>
		<slot />
	</div>

	{#if tooltip}
		<div
			class="w-48 flex justify-{position} text-white text-xs text-center align-text-top absolute bottom-full mb-0.5 transition ease-in-out -translate-x-1/2 left-1/2 opacity-0 peer-hover:opacity-100"
		>
			<div class="rounded bg-slate-500 py-1 px-1.5">{tooltip}</div>
		</div>
	{/if}

	{#if $$slots.tooltip}
		<div
			class="w-48 flex justify-center text-white text-xs text-center align-text-top absolute bottom-full mb-0.5 transition ease-in-out -translate-x-1/2 left-1/2 opacity-0 peer-hover:opacity-100"
		>
			<div class="rounded bg-slate-500 py-1 px-1.5"><slot name="tooltip" /></div>
		</div>
	{/if}
</div>
