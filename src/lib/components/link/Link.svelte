<script lang="ts">
	export let link: string | undefined = undefined;
	export let target: "_self" | "_blank" | "_top" | "_parent" | undefined | null = undefined;
	export let onClick: (() => any) | undefined = undefined;
	export let replaceState: boolean | undefined = undefined;
	export let reload: boolean | undefined = undefined;
	function handleClick() {
		if (onClick) {
			onClick();
		}
	}
</script>

<div on:click={handleClick} on:keydown={handleClick} role="link" tabindex="-1">
	{#if link}
		{#if replaceState}
			<a
				data-sveltekit-replacestate
				href={link}
				{target}
				class="cursor-pointer {$$props.class ?? ''}"><slot /></a
			>
		{:else if reload}
			<a data-sveltekit-reload href={link} {target} class="cursor-pointer {$$props.class ?? ''}"
				><slot /></a
			>
		{:else}
			<a
				href={link}
				{target}
				class="cursor-pointer hover:text-blue-600 {$$props.class ?? ''}"
				tabindex="-1"
			>
				<slot />
			</a>
		{/if}
	{:else if onClick}
		<div class="flex pointer hover:text-blue-600 {$$props.class ?? ''}">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
