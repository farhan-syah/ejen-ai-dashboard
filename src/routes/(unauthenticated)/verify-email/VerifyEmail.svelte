<script lang="ts">
	import { Button, Card, Loader } from "$lib/components";
	import { Logo } from "$common";
	import { getAppState } from "$applications";
	import { AuthService } from "$services";
	import { page } from "$app/stores";
	import { logger } from "$lib/utils/logger";
	import { onMount } from "svelte";
	import { atom } from "nanostores";

	const loadingState = atom<boolean>(true);
	const error = atom<any>(undefined);
	const { message = "Your email has been verified! You can login now." }: { message?: string } =
		$props();

	async function verifyEmail() {
		try {
			const token = $page.url.searchParams.get("t");
			if (!token) {
				throw "Unable to verify email.";
			} else await AuthService.verifyEmail(token);
		} catch (e) {
			error.set(e);
		} finally {
			loadingState.set(false);
		}
	}

	onMount(() => {
		verifyEmail();
	});
</script>

<Card class="p-6 w-96">
	<div class="flex flex-col gap-4">
		<Logo class="text-3xl" link="/" />
		{#if $loadingState}
			<div class="m-12">
				<Loader></Loader>
			</div>
		{:else}
			{#if $error}
				<div class="bg-red-50 text-red-500 p-4">
					<div>{$error.message}</div>
				</div>
			{:else}
				<div class="bg-green-50 text-green-800 p-4">
					<div>{message}</div>
				</div>
			{/if}

			<Button class="w-full" label="Proceed to login screen" link="/login" />
		{/if}
	</div>
</Card>
