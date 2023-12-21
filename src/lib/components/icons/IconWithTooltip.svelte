<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { PopperOptions } from "svelte-popperjs";
	import { Popper } from "../popper";
	export let icon: string;
	export let onClick: (() => any) | undefined = undefined;
	export let tooltip: string | undefined = undefined;
	let isOpen = false;
	const popperOptions: PopperOptions<any> = {};
	function handleClick() {
		if (onClick) onClick();
	}
</script>

<div
	on:focus={() => {}}
	on:mouseover={() => {
		isOpen = true;
	}}
	on:mouseleave={() => {
		isOpen = false;
	}}
	role="none"
	class={$$props.class ?? ""}
>
	<Popper bind:isOpen {popperOptions} placement="bottom">
		<!-- Main Component -->
		<div slot="main">
			<div
				role="button"
				tabindex="0"
				on:click={handleClick}
				on:keyup={handleClick}
				class=" {onClick ? 'pointer' : ''}"
			>
				<Icon {icon} class=" {$$props.iconClass ?? ''}" />
			</div>
		</div>
		<!-- Popper Component -->

		<div slot="content" class="m-0.5">
			{#if tooltip}
				<div class="flex justify-center text-white text-xs w-24 items-center text-center">
					<div class="rounded bg-slate-500 py-1 px-1.5 font-medium">{tooltip}</div>
					<!-- <div class=" max-w-[12rem] text-white text-xs text-center">
						<div class="rounded bg-slate-500 py-1 px-1.5">{tooltip}</div>
					</div> -->
				</div>
			{/if}

			{#if $$slots.tooltip}
				<div class="flex justify-center text-white text-xs w-24 items-center text-center">
					<div class="rounded bg-slate-500 py-1 px-1.5"><slot name="tooltip" /></div>
				</div>
			{/if}
		</div>
	</Popper>
</div>
