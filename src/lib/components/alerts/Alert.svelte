<script lang="ts">
	import { twMerge } from "tailwind-merge";

	export let message: string | undefined;
	let componentClass = "";
	export { componentClass as class };
</script>

<div
	class={twMerge([
		"py-1.5 px-2.5 italic border rounded bg-blue-50 border-blue-300 text-blue-500 text-xs",
		componentClass
	])}
>
	{#if $$slots.content}
		<slot name="content" />
	{:else if message}
		{message}
	{/if}
</div>
