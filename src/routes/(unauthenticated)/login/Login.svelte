<script lang="ts">
	import type { LoginInput } from "$api/routes/auth/auth.schema";
	import { getAppState } from "$applications";
	import { Button, CheckboxField, FormControl, Link, TextField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { AuthService } from "$services/auth.service";
	import { computed } from "nanostores";
	import validator from "validator";
	import { Logo } from "$common";
	const appState = getAppState();

	const emailController = new FormControl({
		name: "email",
		required: true,
		value: "admin@admin.com",
		validators: [{ validator: validator.isEmail, errorMessage: "Invalid email" }]
	});
	const passwordController = new FormControl({
		name: "password",
		required: true,
		value: "12345678",
		validators: []
	});

	const isPersistantController = new FormControl<boolean>({
		name: "isPersistant"
	});

	const formValid = computed(
		[emailController.valid, passwordController.valid],
		(emailValid, passwordValid) => {
			return emailValid && passwordValid;
		}
	);

	async function handleSubmit() {
		const email = emailController.writableValue.get();
		const password = passwordController.writableValue.get();
		const isPersistant = isPersistantController.writableValue.get();
		if (!email || !password) return;
		const loginInput: LoginInput = {
			email: email,
			password: password,
			isPersistant: !!isPersistant
		};

		appState.loading.set(true);

		await AuthService.login(loginInput).catch((e) => {
			e.message = "Unable to login. Please check if you are using the correct credential";
			appState.error.set(e);
		});

		appState.loading.set(false);
	}
</script>

<Card class="p-6 w-96">
	<div class="flex flex-col gap-4">
		<Logo class="text-3xl" link="/" />
		<TextField controller={emailController} label="Email" type="email" />
		<TextField controller={passwordController} label="Password"></TextField>
		<div class="flex">
			<CheckboxField controller={isPersistantController} class="w-full">
				<div>Remember me</div>
			</CheckboxField>
			<div class="text-xs whitespace-nowrap mt-0.5">
				<Link link="/forgot-password" class="text-blue-500 hover:bg-blue-50 px-0.5">
					Forgot password
				</Link>
			</div>
		</div>
		<Button class="w-full" label="Sign In" valid={$formValid} onClick={handleSubmit} />
		<div class="flex gap-1">
			<div>Don't have an account?</div>
			<Link link="/register" class="text-blue-500 hover:bg-blue-50 px-0.5">Register</Link>
		</div>
	</div>
</Card>
