<script lang="ts">
	import { twMerge } from "tailwind-merge";

	export let link: string | undefined = undefined;
	export let target: "_self" | "_blank" | "_top" | "_parent" | undefined | null = undefined;
	export let label = "Submit";
	export let onClick: (...args: any[]) => any = () => {};
	export let valid = true;
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";

	function handleClick() {
		if (valid) onClick();
	}
</script>

{#if link}
	<a href={link} {target} tabindex="-1">
		<button
			class={twMerge(["button flex items-center", componentClass])}
			on:click={handleClick}
			on:keydown={(e) => {
				e.stopImmediatePropagation();
				if (e.key === "Enter") {
					handleClick();
				}
			}}
			disabled={!valid}
		>
			{#if $$slots.prefix}
				<slot name="prefix" />
			{/if}
			{#if $$slots.label}
				<slot name="label" />
			{:else}
				<div class="whitespace-nowrap flex-grow {labelClass}">
					{label}
				</div>
			{/if}
		</button></a
	>{:else}
	<button
		class="button flex items-center {componentClass}"
		on:click={handleClick}
		on:keydown={handleClick}
		disabled={!valid}
	>
		{#if $$slots.prefix}
			<slot name="prefix" />
		{/if}
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			<div class="whitespace-nowrap flex-grow {labelClass}">
				{label}
			</div>
		{/if}
	</button>
{/if}
