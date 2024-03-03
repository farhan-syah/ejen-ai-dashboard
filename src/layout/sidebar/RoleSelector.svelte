<script lang="ts">
	import type Prisma from "$api/types/prisma-client-defts";
	import { UserState, getAppState } from "$applications";
	import Modal from "$lib/components/modal/Modal.svelte";
	import { RoleRepository, UserSettingRepository } from "$repositories";
	import { AuthService } from "$services";
	import Icon from "@iconify/svelte";
	import { atom } from "nanostores";
	import { onMount } from "svelte";

	const appState = getAppState();

	type Role = Prisma.Role & { organization: { name: string } };
	type GroupedRole = { organizationId: string; organizationName: string; roles: Role[] };
	const user = UserState.user;
	const isSidebarOpen = appState.isSidebarOpen;
	const userSetting = UserState.setting;
	const currentRole = atom<Role | undefined>();
	const roles = atom<Role[]>([]);
	const groupedRoles = atom<GroupedRole[]>([]);
	const isModalOpen = atom(false);

	currentRole.listen(async (value) => {
		if (value && $user && $userSetting && $userSetting?.defaultUserRole != value.id) {
			await UserSettingRepository.update($userSetting.id, { data: { defaultUserRole: value.id } });
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

		const defaultUserRole = $userSetting?.defaultUserRole;
		const initialRole =
			result.find((role) => {
				return role.id === defaultUserRole;
			}) ?? result.at(0);
		currentRole.set(initialRole);
	}

	function handleOpenModal() {
		isModalOpen.set(true);
	}

	async function handleChangeRole(role: Role) {
		currentRole.set(role);
		isModalOpen.set(false);
	}
</script>

{#if $isSidebarOpen}
	{#if $currentRole}
		<div
			role="button"
			tabindex="-1"
			class="p-2 flex items-center text-xs bg-indigo-950 pointer-light"
			on:click={handleOpenModal}
			on:keydown={handleOpenModal}
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
					<Icon icon="icon-park-outline:switch" class="text-base"></Icon>
				</div>
			{/if}
		</div>
	{/if}
{/if}

<Modal isOpen={isModalOpen}>
	<div class="w-96">
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
</Modal>

<style lang="postcss">
	th,
	td {
		@apply border-x;
		@apply p-1;
	}

	tr {
		@apply border-y;
	}
</style>
