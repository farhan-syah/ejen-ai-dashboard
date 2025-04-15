<script lang="ts">
	import { twMerge } from "tailwind-merge";

	export let icon: string;
	export let onClick: (() => any) | undefined = undefined;
	export let link: string | undefined = undefined;
	export let target: "_self" | "_blank" | "_top" | "_parent" | undefined | null = undefined;
	export let buttonClass: string = "";

	function handleClick() {
		if (onClick) onClick();
	}
</script>

<div class={$$props.class ?? ""}>
	{#if link}
		<a href={link} {target} tabindex="-1" aria-label="button" class="">
			<div
				role="button"
				tabindex="0"
				on:keydown={(e) => {
					e.stopImmediatePropagation();
					if (e.key === "Enter") {
						handleClick();
					}
				}}
				class={onClick ? twMerge(["pointer"], buttonClass) : ""}
			>
				<iconify-icon {icon} class=" {$$props.iconClass ?? ''}"></iconify-icon>
			</div>
		</a>
	{:else}
		<div
			role="button"
			tabindex="0"
			on:click={handleClick}
			on:keydown={(e) => {
				e.stopImmediatePropagation();
				if (e.key === "Enter") {
					handleClick();
				}
			}}
			class=" {onClick ? `pointer ${buttonClass}` : ''}"
		>
			<iconify-icon {icon} class=" {$$props.iconClass ?? ''}"></iconify-icon>
		</div>
	{/if}
</div>
