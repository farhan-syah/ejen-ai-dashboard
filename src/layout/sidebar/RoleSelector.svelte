<script lang="ts">
	import { UserState, getAppState } from "$applications";
	import { Dialog } from "$lib/components";
	import { RoleRepository, UserSettingRepository } from "$repositories";
	import { AuthService } from "$services";
	import { type Role as PrismaRole } from "@prisma/client";
	import { atom } from "nanostores";
	import { onMount } from "svelte";

	const appState = getAppState();

	type Role = PrismaRole & { organization: { name: string; id: string } };
	type GroupedRole = { organizationId: string; organizationName: string; roles: Role[] };
	const user = UserState.user;
	const isSidebarOpen = appState.isSidebarOpen;
	const userSetting = UserState.setting;
	const currentRole = UserState.currentRole;
	const roles = atom<Role[]>([]);
	const groupedRoles = atom<GroupedRole[]>([]);
	const isDialogOpen = atom(false);

	currentRole.listen(async (value) => {
		if (value && $user && $userSetting && $userSetting?.defaultUserRoleId != value.id) {
			await UserSettingRepository.update($userSetting.id, {
				data: { defaultUserRoleId: value.id }
			});
		}

		AuthService.refreshUser();
	});

	onMount(() => {
		fetchRole();
	});

	async function fetchRole() {
		const user = UserState.user.get();
		if (!user) return;
		const result = (await RoleRepository.search({
			where: {
				users: {
					some: {
						id: user.id
					}
				}
			},
			query: {
				additionalFields: {
					organization: {
						select: {
							id: true,
							name: true
						}
					}
				}
			}
		})) as Role[];

		{
			const groups: Record<string, GroupedRole> = {};
			result.forEach((role) => {
				const organizationId = role.organizationId;
				if (!groups[organizationId]) {
					groups[organizationId] = {
						organizationId: organizationId,
						organizationName: role.organization.name,
						roles: []
					};
				}
				groups[organizationId].roles.push(role);
			});

			groupedRoles.set(Object.values(groups));
		}

		const defaultUserRoleId = $userSetting?.defaultUserRoleId;
		const initialRole =
			result.find((role) => {
				return role.id === defaultUserRoleId;
			}) ?? result.at(0);
		currentRole.set(initialRole);
	}

	function handleOpenDialog() {
		isDialogOpen.set(true);
	}

	async function handleChangeRole(role: Role) {
		currentRole.set(role);
		isDialogOpen.set(false);
	}
</script>

{#if $isSidebarOpen}
	{#if $currentRole}
		<div
			role="button"
			tabindex="-1"
			class="p-2 flex items-center text-xs bg-indigo-950 pointer-light"
			on:click={handleOpenDialog}
			on:keydown={handleOpenDialog}
		>
			<div class="flex-grow">
				<div>
					{$currentRole.organization.name}
				</div>
				<div>
					{$currentRole.name}
				</div>
			</div>
			{#if $roles.length > 0}
				<div class="p-2">
					<iconify-icon icon="icon-park-outline:switch" class="text-base"></iconify-icon>
				</div>
			{/if}
		</div>
	{/if}
{/if}

<Dialog isOpen={isDialogOpen}>
	<div class=" w-64 md:w-96">
		<div class="font-semibold mb-2 text-center">Change Role</div>
		<div class="mb-4 text-center">Choose the role you want to change into</div>
		<table class=" w-full table-fixed">
			<thead class="border-b">
				<tr>
					<th class="text-start"> Organization </th>
					<th> Role</th>
				</tr>
			</thead>

			<tbody>
				{#each $groupedRoles as group}
					<tr>
						<td>
							{group.organizationName}
						</td>
						<td class="text-cent er">
							{#each group.roles as role}
								<div
									role="button"
									class="p-2 pointer text-center text-blue-600"
									on:click={() => {
										handleChangeRole(role);
									}}
									on:keydown={() => {
										handleChangeRole(role);
									}}
									tabindex="0"
								>
									{role.name}
								</div>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Dialog>

<style lang="postcss">
	@reference "tailwindcss";
	th,
	td {
		@apply border-x;
		@apply p-1;
	}

	tr {
		@apply border-y;
	}
</style>
