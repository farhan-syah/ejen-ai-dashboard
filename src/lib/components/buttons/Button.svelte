<script lang="ts">
	export let label = "Submit";
	export let onClick: any = () => {};
	export let valid = true;
	let validClass = "bg-blue-500 text-white hover:bg-opacity-90 hover:shadow-button ";
	let invalidClass = "bg-gray-300 text-white";
	export let labelClass = "";

	function handleClick() {
		if (valid) onClick();
	}
</script>

<button
	class="flex items-center py-1.5 px-2.5 rounded text-sm {valid
		? validClass
		: invalidClass} {$$props.class}"
	on:click={handleClick}
>
	{#if $$slots.prefix}
		<slot name="prefix" />
	{/if}
	<div class="whitespace-nowrap flex-grow {labelClass}">
		{label}
	</div>
</button>
