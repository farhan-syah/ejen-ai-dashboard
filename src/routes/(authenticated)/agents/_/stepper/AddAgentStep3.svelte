<script lang="ts">
	import { Button, getStepperContext } from "$lib/components";

	const context = getStepperContext();
</script>

3

<Button
	onClick={() => {
		context.handleNextClick();
	}}
/>
