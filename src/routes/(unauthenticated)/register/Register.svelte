<script lang="ts">
	import type { LoginInput, RegisterInput } from "$api/routes/auth/auth.schema";
	import { getAppState } from "$applications";
	import {
		Button,
		CheckboxField,
		FormControl,
		FormGroup,
		Icon,
		IconWithTooltip,
		Link,
		PasswordField,
		TextField
	} from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { AuthService } from "$services/auth.service";
	import { computed } from "nanostores";
	import validator, { isStrongPassword } from "validator";
	import { Logo } from "$common";
	import TaskIcon from "../../../layout/top-menu/task/TaskIcon.svelte";
	import { FormValidator } from "$lib/components/form/controller/form-validator";
	import { PUBLIC_ENV } from "$env/static/public";
	import { faker } from "@faker-js/faker";

	const appState = getAppState();

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

		appState.loading.set(true);

		// TODO : Implement register

		appState.loading.set(false);
	}
</script>

<Card class="p-6 w-96">
	<div class="flex flex-col gap-4">
		<Logo class="text-3xl" link="/" />
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
	</div>
</Card>
