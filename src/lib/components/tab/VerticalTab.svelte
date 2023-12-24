<script lang="ts">
	import type { TabItem } from ".";

	export let tabs: TabItem[] = [];
	export let index = 0;
	export let hoverClass = "hover:bg-indigo-500";
	export let activeClass = "bg-slate-500 text-gray-100 ";
	export let inactiveClass = "bg-slate-200 hover:text-gray-100 text-gray-500";
	export let separatorClass = "bg-slate-300 w-1 ";
	export let onClick: (i: number) => any = (i: number) => {
		index = i;
	};
</script>

<div class="flex">
	<div class="relative cursor-pointer select-none">
		{#each tabs as tab, i}
			<div
				class="rounded-l shadow shadow-slate-300 mb-2 border-slate-300 {i == index
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
	<div class="relative {separatorClass}" />
	<div class="w-full">
		<slot />
	</div>
</div>
