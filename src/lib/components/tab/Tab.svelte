<script lang="ts">
	import type { TabItem } from ".";
	export let tabs: TabItem[] = [];
	export let index = 0;
	export let hoverClass = "hover:bg-indigo-500";
	export let activeClass = "bg-slate-500 text-gray-100 ";
	export let inactiveClass = "bg-slate-200 hover:text-gray-100 text-gray-500";

	export let onClick: (i: number) => any = (i: number) => {
		return i;
	};
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
					on:click={() => onClick(i)}
					on:keypress={(e) => {
						if (e.key === "Enter") {
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
	<slot />
</div>
