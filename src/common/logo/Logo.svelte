<script lang="ts">
	import { PUBLIC_APP_NAME } from "$env/static/public";
	import { Link } from "$lib/components";
	import { twMerge } from "tailwind-merge";

	const { class: componentClass, link }: { class?: string; link?: string } = $props();
</script>

<Link {link} class={twMerge(["text-2xl text-center", componentClass])}>
	<h1>{PUBLIC_APP_NAME}</h1>
</Link>
