import Guard from "./Guard.svelte";

export function validatePermissions(
	requiredPermissions: readonly string[],
	userPermissions: readonly string[]
): boolean {
	return requiredPermissions.some((permission) => userPermissions.includes(permission));
}

export { Guard };
