<script lang="ts">
	export let label = "Submit";
	export let onClick: any = () => {};
	export let valid = true;
	let componentClass = "";
	export { componentClass as class };
	export let labelClass = "";

	function handleClick() {
		if (valid) onClick();
	}
</script>

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
