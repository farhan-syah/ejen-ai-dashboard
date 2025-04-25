<script lang="ts">
	import type { RegisterInput } from "$api/routes/auth/auth.schema";
	import { getAppState } from "$applications";
	import { Button, FormControl, FormGroup, Link, PasswordField, TextField } from "$lib/components";
	import { FormValidator } from "$lib/components/form/controller/form-validator";
	import { AuthService } from "$services/auth.service";
	import { faker } from "@faker-js/faker";
	import validator from "validator";
	import { getRegistrationState } from "./Register";

	const appState = getAppState();
	const registrationState = getRegistrationState();

	const firstNameController = new FormControl<string>({
		name: "firstName",
		required: true,
		validators: [],
		faker: faker.person.firstName
	});
	const lastNameController = new FormControl<string>({
		name: "lastName",
		required: true,
		validators: [],
		faker: faker.person.lastName
	});

	const emailController = new FormControl({
		name: "email",
		required: true,
		validators: [{ validator: validator.isEmail, errorMessage: "Invalid email" }],
		faker: () =>
			faker.internet.email({
				firstName: firstNameController.value,
				lastName: lastNameController.value
			})
	});

	const passwordController = new FormControl<string>({
		name: "password",
		required: true,
		validators: [FormValidator.isStrongPassword()],
		faker: () => "a123456!"
	});

	const passwordConfirmationController = new FormControl<string>({
		name: "passwordConfirmation",
		required: true,
		validators: [
			FormValidator.match(passwordController, { errorMessage: "Password doesn't match" })
		],
		faker: () => "a123456!"
	});

	const form = new FormGroup([
		firstNameController,
		lastNameController,
		emailController,
		passwordController,
		passwordConfirmationController
	]);

	const formValid = form.valid;

	async function handleSubmit() {
		try {
			appState.loading.set(false);
			const email = emailController.writableValue.get();
			const password = passwordController.writableValue.get();
			const firstName = firstNameController.writableValue.get();
			const lastName = lastNameController.writableValue.get();
			if (!email || !password || !firstName || !lastName) return;
			const registerInput: RegisterInput = {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName
			};
			await AuthService.register(registerInput);
			registrationState.markAsSuccessful();
		} catch (e) {
			appState.error.set(e);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<TextField controller={firstNameController} label="First Name" />
<TextField controller={lastNameController} label="Last Name" />
<TextField controller={emailController} label="Email" type="email" />
<PasswordField controller={passwordController} label="Password" />
<PasswordField controller={passwordConfirmationController} label="Confirm Password" />
<Button class="w-full" label="Register" valid={$formValid} onClick={handleSubmit} />
<div class="flex gap-1">
	<div>Already have an account?</div>
	<Link link="/login" class="text-blue-500 hover:bg-blue-50 px-0.5">Sign In</Link>
</div>
