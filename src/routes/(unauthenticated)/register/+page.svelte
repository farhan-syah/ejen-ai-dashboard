<script lang="ts">
	import { Card } from "$lib/components";
	import { Logo } from "$common";
	import { createRegistrationState, RegistrationStatus } from "./Register";
	import Register from "./Register.svelte";
	import RegisterSuccess from "./RegisterSuccess.svelte";

	const state = createRegistrationState();
	const status = state.status;
</script>

<Card class="p-6 w-96">
	<div class="flex flex-col gap-4">
		<Logo class="text-3xl" link="/" />

		{#if $status === RegistrationStatus.PENDING}
			<Register />
		{:else if $status === RegistrationStatus.SUCCESS}
			<RegisterSuccess />
		{/if}
	</div>
</Card>
