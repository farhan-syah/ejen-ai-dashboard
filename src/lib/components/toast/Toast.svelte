<script lang="ts">
	import { getToastState } from "$applications/toast.state";
	import Icon from "@iconify/svelte";
	import { cubicOut, sineOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import { fade } from "svelte/transition";
	import { type ToastItem } from ".";
	const toastState = getToastState();
	export let toast: ToastItem;

	const progress = tweened(100, { duration: toast.duration, easing: sineOut });
	progress.set(0);

	progress.subscribe((progress) => {
		if (progress == 0) {
			handleDismiss();
		}
	});

	function handleDismiss() {
		toastState.dismiss(toast.key);
	}
</script>

<div
	class="bg-white rounded w-72 shadow-md overflow-clip"
	out:fade={{ duration: 500, easing: cubicOut }}
>
	<div class="relative {toast.type}">
		<div class="h-1 {toast.type} left-0" style="width:{$progress}%" />
		<div class="flex p-2 items-center">
			<div class="flex-grow text-xs">
				{toast.message}
			</div>
			<button
				class="cursor-pointer rounded-full p-0.5 bg-blend-soft-light hover:bg-slate-500/20"
				tabindex="-1"
				on:click={() => {
					handleDismiss();
				}}
			>
				<Icon icon="bx:x" class="text-lg"></Icon>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.info {
		@apply bg-blue-50 text-blue-500 hover:bg-blue-200/40;
	}
	.info > .info {
		@apply bg-blue-500;
	}
	.success {
		@apply bg-green-50 text-green-500 hover:bg-green-200/40;
	}
	.success > .success {
		@apply bg-green-500;
	}
	.warning {
		@apply bg-amber-50 text-amber-500 hover:bg-amber-200/40;
	}
	.warning > .warning {
		@apply bg-amber-500;
	}
	.error {
		@apply bg-red-50 text-red-500 hover:bg-red-200/40;
	}
	.error > .error {
		@apply bg-red-500;
	}
</style>
