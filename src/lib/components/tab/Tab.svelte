<script lang="ts">
	import { cubicInOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import type { TabItem } from ".";
	export let tabs: TabItem[] = [];
	export let index = 0;
	export let hoverClass = "hover:bg-indigo-500";
	export let activeClass = "bg-slate-500 text-gray-100 ";
	export let inactiveClass = "bg-slate-200 hover:text-gray-100 text-gray-500";
	export let animate: boolean = true;
	export let onClick: (i: number) => any = (i: number) => {
		return i;
	};

	let prevIndex = index;
</script>

<div>
	<div class="relative inline-flex cursor-pointer mx-1 select-none text-xs">
		{#each tabs as tab, i (i)}
			<div
				class="rounded-t shadow-sm border-slate-300 mr-1 {i == index
					? activeClass
					: inactiveClass} {hoverClass} "
			>
				<div
					role="menuitem"
					class="p-2 pointer"
					on:click={() => {
						prevIndex = index;
						onClick(i);
					}}
					on:keypress={(e) => {
						if (e.key === "Enter") {
							prevIndex = index;
							onClick(i);
						}
					}}
					tabindex="0"
				>
					{tab.label}
				</div>
			</div>
		{/each}
	</div>
	<div class="relative bg-slate-300 w-full h-1 z-1" />
	<div class="relative w-full">
		{#key index}
			<div
				class="absolute w-full"
				in:fly={{
					x: prevIndex < index ? 1000 : -1000,
					duration: animate ? 500 : 0,
					easing: cubicInOut
				}}
				out:fly={{
					x: prevIndex < index ? -1000 : 1000,
					duration: animate ? 500 : 0,
					easing: cubicInOut
				}}
			>
				<slot />
			</div>
		{/key}
	</div>
</div>
