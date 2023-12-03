<script lang="ts">
	import { Circle3 } from "svelte-loading-spinners";

	export let size: number | string | undefined = undefined;
</script>

<div class="m-auto w-max h-max {$$props.class}">
	<Circle3
		size={size ?? "50"}
		ballTopLeft="#c1d0dd"
		ballTopRight="#a6caf0"
		ballBottomLeft="#9abeff"
		ballBottomRight="#688095"
		duration="1.8s"
	/>
</div>
