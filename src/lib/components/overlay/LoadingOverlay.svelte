<script>
	import Loader from "../loader/Loader.svelte";
</script>

<div class="fixed overlay top-0 left-0 h-full flex w-full z-50">
	<div class="m-auto">
		<Loader />
	</div>
</div>

<style>
	.overlay {
		background-color: rgb(7, 7, 77, 0.25);
	}
</style>
