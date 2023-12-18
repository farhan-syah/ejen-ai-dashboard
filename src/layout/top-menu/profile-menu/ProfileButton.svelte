<script lang="ts">
	import { getAppState } from "$applications";
	import { ProfileImage } from "$lib/components";
	import Popper from "$lib/components/popper/Popper.svelte";
	import { AuthService } from "$services";
	import type { ModifierPhases } from "@popperjs/core";
	import { atom } from "nanostores";
	import type { PopperOptions } from "svelte-popperjs";
	import ProfileMenuButton from "./ProfileMenuButton.svelte";
	import type { ProfileMenuItem } from "./profile-menu";
	const appState = getAppState();
	const isOpen = atom(false);
	const popperOptions: PopperOptions<any> = {
		modifiers: [
			{
				name: "widthModifier",
				enabled: true,
				phase: "beforeWrite" as ModifierPhases,
				requires: ["computeStyles"],
				fn: ({ state }: any) => {
					state.styles.popper.width = `${state.rects.reference.width}px`;
				}
			},
			{
				name: "offset",
				options: {
					offset: [0, 11]
				}
			}
		]
	};

	const menu: ProfileMenuItem[] = [
		{ label: "Profile", icon: "mingcute:user-4-line", link: "/profile" },
		{ label: "Task", icon: "mingcute:task-line", link: "/tasks" },
		{ label: "Settings", icon: "mingcute:settings-6-line", link: "/settings" },
		{
			label: "Log Out",
			icon: "mingcute:exit-line",
			onclick: async () => {
				appState.loading.set(true);
				await AuthService.logout();
				appState.loading.set(false);
			}
		}
	];
</script>

<div class="text-gray-700">
	<Popper bind:isOpen={$isOpen} {popperOptions}>
		<div slot="main" class="py-2 px-2 pointer flex items-center gap-2 hover:text-blue-600">
			<ProfileImage />
			<div class=" w-24 font-medium">Farhan Syah</div>
		</div>
		<div slot="content" class="shadow-lg rounded bg-white font-medium">
			{#each menu as menu}
				<ProfileMenuButton item={menu}></ProfileMenuButton>
			{/each}
		</div>
	</Popper>
</div>
