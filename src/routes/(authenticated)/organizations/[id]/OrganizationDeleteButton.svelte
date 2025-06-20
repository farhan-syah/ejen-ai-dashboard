<script lang="ts">
  import { goto } from "$app/navigation";
  import { getAppState } from "$applications";
  import { getToastState } from "$applications/toast.state";
  import { Button, Dialog } from "$lib/components";
  import { OrganizationRepository } from "$repositories";
  import { atom } from "nanostores";
  import type { _Organization } from "./Organization";

  export let organization: _Organization; // Changed from 'product'
  const isDialogOpen = atom(false);
  const appState = getAppState();
  const toastState = getToastState();

  async function handleDeleteOrganization() {
    try {
      isDialogOpen.set(false);
      appState.loading.set(true);
      await OrganizationRepository.delete(organization.id);
      await goto("/organizations", { replaceState: true }); // Redirect to plural list
      toastState.success({ key: organization.id, message: "Organization has been deleted" });
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
    <div>Are you sure you want to delete this organization? This action is irreversible.</div>
    <div class="flex gap-2">
      <Button label="Yes" onClick={handleDeleteOrganization} />
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