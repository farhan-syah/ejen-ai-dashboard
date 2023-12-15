<script lang="ts">
	import type Prisma from "$api/types/prisma-client";
	import { AppState, UserState } from "$applications";
	import { FormControl } from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import { RoleRepository, UserSettingRepository } from "$repositories";
	import { AuthService } from "$services";
	import type { FieldOption } from "$types";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";

	const roleOptions: WritableAtom<FieldOption<Prisma.Role>[]> = atom([]);
	const roleController = new FormControl<Prisma.Role>();
	const isSidebarOpen = AppState.isSidebarOpen;
	const userSetting = UserState.setting;

	onMount(() => {
		fetchRoles();
	});

	async function fetchRoles() {
		const result = await RoleRepository.search({
			where: {
				userId: UserState.user.get()?.id
			},
			action: "search"
		});
		const options: FieldOption<Prisma.Role>[] = result.map((role) => {
			return { value: role, label: role.name };
		});

		roleOptions.set(options);

		const defaultUserRole = $userSetting?.defaultUserRole;
		const initialRole =
			options.find((option) => {
				return option.value.id === defaultUserRole;
			})?.value ?? options.at(0)?.value;

		roleController.writableValue.set(initialRole);
	}

	roleController.writableValue.listen(async (value) => {
		const currentUser = UserState.user.get();

		if (value && currentUser && $userSetting?.defaultUserRole != value.id) {
			await UserSettingRepository.update(currentUser.id, { data: { defaultUserRole: value.id } });
		}

		AuthService.refreshUser();
	});
</script>

{#if $isSidebarOpen}
	<div class="p-3">
		<div class="text-xs italic mb-2">Current Role :</div>
		<SelectField
			controller={roleController}
			placeholder="Choose role"
			class="bg-indigo-100 text-indigo-900 text-2xs"
			options={$roleOptions}
			valueTransform={(value) => {
				return value?.name;
			}}
		/>
	</div>
{/if}
