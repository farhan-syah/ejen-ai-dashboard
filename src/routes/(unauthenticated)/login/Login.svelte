<script lang="ts">
	import { TextField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { FormControl } from "$lib/components/form/controller/form-control";
	import isEmail from "validator/lib/isEmail";

	const emailController = new FormControl({
		validators: [{ validator: isEmail, errorMessage: "Invalid email" }]
	});
	// $: validEmail = $email != null && validator.isEmail($email);
</script>

<Card class="p-4">
	<TextField controller={emailController} label="Email" />
</Card>
