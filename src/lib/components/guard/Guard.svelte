<script lang="ts">
	import { goto } from "$app/navigation";
	import { UserState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { atom } from "nanostores";
	import { validatePermissions } from ".";
	export let redirect: boolean = false;
	export let redirectPath: string = "/dashboard";
	const toastState = getToastState();

	export let requiredPermissions: string[];
	const hasValidPermission = atom(false);

	UserState.permissions.subscribe(async (userPermission) => {
		const result = validatePermissions(requiredPermissions, userPermission);
		if (redirect && !result) {
			await goto(redirectPath, { replaceState: true });
			toastState.add({
				key: "Insufficent Access",
				type: "warning",
				message: `You don't have required permission to access the previous page`
			});
		} else {
			hasValidPermission.set(result);
		}
	});
</script>

{#if $hasValidPermission}
	<slot />
{/if}
