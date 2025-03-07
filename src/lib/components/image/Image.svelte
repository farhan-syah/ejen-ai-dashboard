<script lang="ts">
	import { atom } from "nanostores";
	import { twMerge } from "tailwind-merge";
	import { Loader } from "..";

	export let src: string;
	export let alt: string | undefined = undefined;
	export let loadingMessage: string | undefined = undefined;
	export let loaderSize: number = 32;
	export let onClick: (() => any) | undefined = undefined;
	let componentClass = "";
	export { componentClass as class };
	export let imageClass = "";

	const isLoaded = atom(false);
	const hasError = atom(false);

	function handleClick() {
		if (onClick) onClick();
	}

	let el: HTMLImageElement;
</script>

<div
	role="none"
	on:click={handleClick}
	on:keypress
	class="relative text-xs text-center {componentClass}"
>
	{#if !$hasError}
		<img
			bind:this={el}
			class={twMerge(["w-full h-full object-cover", imageClass])}
			{src}
			{alt}
			on:load={() => {
				isLoaded.set(true);
			}}
			on:error={() => {
				if (!$isLoaded) {
					hasError.set(true);
					isLoaded.set(true);
				}
			}}
		/>
	{:else}
		<div class="w-full h-full flex flex-col p-4 text-slate-400">
			<iconify-icon
				icon="material-symbols-light:image-not-supported-outline-rounded"
				class="m-auto w-full h-full"
			></iconify-icon>
			<div>Image Not Found</div>
		</div>
	{/if}
	{#if !$isLoaded}
		<div class="absolute top-0 w-full h-full flex flex-col items-center justify-center">
			<Loader size={loaderSize} />
			{#if loadingMessage}
				<div class="w-full">{loadingMessage}</div>
			{/if}
		</div>
		<div class=" w-16 h-16"></div>
	{/if}
</div>
