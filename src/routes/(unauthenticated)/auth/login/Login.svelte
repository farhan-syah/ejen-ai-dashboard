<script lang="ts">
	import type { LoginInput } from "$api/routes/auth/auth.schema";
	import { Button, Link, TextField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { FormControl } from "$lib/components/form/controller/form-control";
	import { PublicSettingsRepository } from "$repositories/settings/public/public-settings.repository";
	import { computed } from "nanostores";
	import { onMount } from "svelte";
	import validator from "validator";

	const emailController = new FormControl({
		name: "email",
		required: true,
		validators: [{ validator: validator.isEmail, errorMessage: "Invalid email" }]
	});
	const passwordController = new FormControl({
		name: "password",
		required: true,
		validators: []
	});

	const formValid = computed(
		[emailController.valid, passwordController.valid],
		(emailValid, passwordValid) => {
			return emailValid && passwordValid;
		}
	);

	function handleSubmit() {
		const loginInput: LoginInput = {
			email: "",
			password: "",
			userType: ""
		};

		console.log(emailController.writableValue.get());
	}

	onMount(() => {});
	PublicSettingsRepository.get().then((e) => {
		console.log(e);
	});
</script>

<Card class="p-6 w-96">
	<div class="flex flex-col gap-3">
		<TextField controller={emailController} label="Email" type="email" />
		<TextField controller={passwordController} label="Password">
			<div slot="labelPostfix" class="text-xs">
				<Link link="/forgot-password" class="text-blue-500 hover:bg-blue-50 px-0.5">
					Forgot password
				</Link>
			</div>
		</TextField>
		<Button class="w-32" valid={$formValid} onClick={handleSubmit} />
	</div>
</Card>
