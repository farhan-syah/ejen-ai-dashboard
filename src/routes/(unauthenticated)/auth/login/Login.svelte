<script lang="ts">
	import type { LoginInput } from "$api/routes/auth/auth.schema";
	import { AppState } from "$applications";
	import { Button, FormControl, Link, SelectField, TextField } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { UserRepository } from "$repositories/user.repository";
	import { AuthService } from "$services/auth.service";
	import type { FieldOption } from "$types";
	import { computed } from "nanostores";
	import validator from "validator";

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

	const userTypeController = new FormControl<string>({
		name: "userType",
		required: true,
		validators: [],
		value: "Staff"
	});

	const formValid = computed(
		[emailController.valid, passwordController.valid, userTypeController.valid],
		(emailValid, passwordValid, userTypeValid) => {
			return emailValid && passwordValid && userTypeValid;
		}
	);

	async function handleSubmit() {
		const email = emailController.writableValue.get();
		const password = passwordController.writableValue.get();
		const userType = userTypeController.writableValue.get();
		if (!email || !password || !userType) return;
		const loginInput: LoginInput = {
			email: email,
			password: password,
			userType: userType,
			includeCookie: true
		};

		AppState.loading.set(true);

		await AuthService.login(loginInput).catch((e) => {
			e.message = "Unable to login. Please check if you are using the correct credential";
			AppState.error.set(e);
		});

		AppState.loading.set(false);
	}

	async function handleRefresh() {
		AppState.loading.set(true);
		await AuthService.refresh().catch((e) => {
			AppState.error.set(e);
		});
		AppState.loading.set(false);
	}

	async function handleCreateUser() {
		AppState.loading.set(true);
		const result = await UserRepository.search({ where: {}, action: "search" }).catch((e) => {
			AppState.error.set(e);
		});
		console.log(result);
		AppState.loading.set(false);
	}
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

		<SelectField controller={userTypeController} options={userTypeOptions} label="User Type" />
		<Button class="w-32" valid={$formValid} onClick={handleSubmit} />
		<Button label="RefreshToken" class="w-32" valid={$formValid} onClick={handleRefresh} />
		<Button label="Create User" class="w-32" valid={$formValid} onClick={handleCreateUser} />
	</div>

	<div />
</Card>
