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
	class="button {componentClass}"
	on:click={handleClick}
	on:keydown={handleClick}
	disabled={!valid}
>
	{#if $$slots.prefix}
		<slot name="prefix" />
	{/if}
	<div class="whitespace-nowrap flex-grow {labelClass}">
		{label}
	</div>
</button>
