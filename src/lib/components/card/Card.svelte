<script lang="ts">
	import { twMerge } from "tailwind-merge";
	let componentClass = "";
	export { componentClass as class };
</script>

<!-- <div class= { twmerge() "bg-white shadow-lg rounded p-4  {componentClass}}"><slot /></div> -->
<div class={twMerge(["bg-white shadow-lg rounded p-4", componentClass])}><slot /></div>
