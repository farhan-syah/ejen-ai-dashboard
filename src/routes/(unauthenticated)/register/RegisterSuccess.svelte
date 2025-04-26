<script lang="ts">
	import { Button } from "$lib/components";
	const {
		message = "Your account has been created! Please check your email and verify your account before logging in."
	}: { message?: string } = $props();
</script>

<div class="bg-green-50 text-green-800 p-4">
	<div>{message}</div>
</div>

<Button class="w-full" label="Proceed to login screen" link="/login" />
