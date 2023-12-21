<script lang="ts">
	import { goto } from "$app/navigation";
	import { UserState } from "$applications";
	import { ToastState } from "$applications/toast.state";
	import { atom } from "nanostores";
	import { validatePermissions } from ".";
	export let redirect: boolean = false;
	export let redirectPath: string = "/dashboard";

	const defaultPermissions: string[] = ["All.manage"];
	export let requiredPermissions: string[];
	const permissions = [...defaultPermissions, ...requiredPermissions];
	const hasValidPermission = atom(false);

	UserState.permissions.subscribe(async (userPermission) => {
		const result = validatePermissions(permissions, userPermission);
		if (redirect && !result) {
			await goto(redirectPath, { replaceState: true });
			ToastState.add({
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
