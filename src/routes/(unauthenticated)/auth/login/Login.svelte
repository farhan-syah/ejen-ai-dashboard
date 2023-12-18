<script lang="ts">
	import type { LoginInput } from "$api/routes/auth/auth.schema";
	import { getAppState } from "$applications";
	import { Button, FormControl, Link, TextField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { AuthService } from "$services/auth.service";
	import type { FieldOption } from "$types";
	import { computed } from "nanostores";
	import validator from "validator";
	const appState = getAppState();
	const userTypeOptions: FieldOption[] = [{ value: "Staff" }, { value: "Guest" }];

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

	const formValid = computed(
		[emailController.valid, passwordController.valid],
		(emailValid, passwordValid) => {
			return emailValid && passwordValid;
		}
	);

	async function handleSubmit() {
		const email = emailController.writableValue.get();
		const password = passwordController.writableValue.get();
		if (!email || !password) return;
		const loginInput: LoginInput = {
			email: email,
			password: password,
			includeCookie: true
		};

		appState.loading.set(true);

		await AuthService.login(loginInput).catch((e) => {
			e.message = "Unable to login. Please check if you are using the correct credential";
			appState.error.set(e);
		});

		appState.loading.set(false);
	}

	// async function handleRefresh() {
	// 	appState.loading.set(true);
	// 	await AuthService.refreshToken().catch((e) => {
	// 		appState.error.set(e);
	// 	});
	// 	appState.loading.set(false);
	// }
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

		<Button class="w-32 " valid={$formValid} onClick={handleSubmit} />
	</div>

	<div />
</Card>
