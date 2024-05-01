<script lang="ts">
	import { getAppState } from "$applications";
	import { getToastState } from "$applications/toast.state";
	import { Button } from "../buttons";
	import Modal from "./Modal.svelte";

	// States

	const appState = getAppState();
	const toastState = getToastState();

	const title = appState.confirmationModal.title;
	const message = appState.confirmationModal.message;
	const onConfirm = appState.confirmationModal.onConfirm;
	const onCancel = appState.confirmationModal.onCancel;

	// Functions

	async function handleConfirm() {
		try {
			appState.startLoading();
			if ($onConfirm) {
				await Promise.resolve($onConfirm());
			}
			appState.confirmationModal.closeDialog();
		} catch (error) {
			appState.confirmationModal.closeDialog();
			appState.error.set(error);
		} finally {
			appState.stopLoading();
		}
	}

	async function handleCancel() {
		try {
			appState.loading.set(true);
			if ($onCancel) {
				await Promise.resolve($onCancel());
			}
			appState.confirmationModal.closeDialog();
		} catch (error) {
			appState.error.set(error);
		} finally {
			appState.loading.set(false);
		}
	}
</script>

<Modal isOpen={appState.confirmationModal.isOpen}>
	<div class="min-w-64 flex flex-col gap-3">
		{#if $title}
			<div class=" border-b pb-1 font-medium whitespace-pre-line">
				{$title}
			</div>
		{/if}
		{#if $message}
			<div class=" whitespace-pre-line">
				{$message}
			</div>
		{/if}

		<div class="flex gap-1.5 items-end justify-end">
			{#if $onConfirm}
				<Button label="Yes" onClick={handleConfirm} />
			{/if}
			<Button class="button-red" label="No" onClick={handleCancel} />
		</div>
	</div>
</Modal>
