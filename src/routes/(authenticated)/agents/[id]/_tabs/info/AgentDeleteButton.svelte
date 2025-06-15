<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button, Dialog } from "$lib/components";
	import { AgentRepository } from "$repositories";

	import { atom } from "nanostores";
	import type { _Agent } from "../../Agent";

	export let agent: _Agent;
	const isDialogOpen = atom(false);
	const appState = getAppState();
	const toastState = getToastState();

	async function handleDeleteAgent() {
		try {
			isDialogOpen.set(false);
			appState.loading.set(true);
			await AgentRepository.delete(agent.id);
			await goto("/agents/categories", { replaceState: true });
			toastState.success({ key: agent.id, message: "Object has been deleted" });
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<Button
	class="button-slate"
	onClick={() => {
		isDialogOpen.set(true);
	}}
>
	<div slot="label">
		<iconify-icon icon="bx:trash"></iconify-icon>
	</div>
</Button>

<Dialog isOpen={isDialogOpen}>
	<div class="w-96 flex flex-col gap-3">
		<div class="font-semibold">Delete Confirmation</div>
		<div>Are you sure you want to delete this object? This action is irreversible.</div>
		<div class="flex gap-2">
			<Button label="Yes" onClick={handleDeleteAgent} />
			<Button
				label="No"
				class="button-red"
				onClick={() => {
					isDialogOpen.set(false);
				}}
			/>
		</div>
	</div>
</Dialog>
