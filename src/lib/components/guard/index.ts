import Guard from "./Guard.svelte";

export function validatePermissions(
	requiredPermissions: readonly string[],
	userPermissions: readonly string[]
): boolean {
	const defaultPermissions: string[] = ["All.manage"];
	const permissions = defaultPermissions.concat(requiredPermissions);
	return permissions.some((permission) => userPermissions.includes(permission));
}

export { Guard };
