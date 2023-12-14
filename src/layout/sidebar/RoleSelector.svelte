<script lang="ts">
	import type Prisma from "$api/types/prisma-client";
	import { AppState, UserState } from "$applications";
	import { FormControl } from "$lib/components";
	import SelectField from "$lib/components/form/select-field/SelectField.svelte";
	import { RoleRepository } from "$repositories";
	import type { FieldOption } from "$types";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";

	const roleOptions: WritableAtom<FieldOption<Prisma.Role>[]> = atom([]);
	const roleController = new FormControl<Prisma.Role>();
	const isSidebarOpen = AppState.isSidebarOpen;

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
		roleController.writableValue.set(options[0].value);
	}
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
