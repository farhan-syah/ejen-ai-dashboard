<script lang="ts">
  import type { OrganizationUpdateInput } from "$api/routes/organization/organization.schema";
  import { getAppState } from "$applications";
  import { getToastState } from "$applications/toast.state";
  import {
    Button,
    FormControl,
    FormDebugger,
    FormGroup,
    Guard,
    TextAreaField,
    TextField,
    Tooltip
  } from "$lib/components";
  import { OrganizationRepository } from "$repositories";
  import { atom } from "nanostores";
  import { getOrganizationContext } from "./Organization";
  import OrganizationDeleteButton from "./OrganizationDeleteButton.svelte";

  const context = getOrganizationContext();
  const organization = context.organization;
  const hasEditPermission = context.hasEditPermission;

  const appState = getAppState();
  const toastState = getToastState();
  const editable = atom(false);

  const idController = new FormControl({
    name: "id",
    value: $organization?.id // Add optional chaining as organization can be undefined initially
  });

  const nameController = new FormControl({
    name: "name",
    value: $organization?.name,
    required: true
  });

  const descriptionController = new FormControl({
    name: "description",
    value: $organization?.description
  });

  // Update form controllers when organization data is loaded
  $: if ($organization) {
    idController.value = $organization.id;
    nameController.value = $organization.name;
    descriptionController.value = $organization.description;
    form.resetValue(); // Reset form with new initial values
  }


  const form = new FormGroup<OrganizationUpdateInput>([nameController, descriptionController]); // Added descriptionController
  const valid = form.valid;

  async function handleSaveForm() {
    if (!$organization) return; // Guard against undefined organization
    try {
      appState.loading.set(true);
      const data = form.value.get() as OrganizationUpdateInput;
      await OrganizationRepository.update($organization.id, {
        data: data
      });
      await context.fetchOrganization();
      editable.set(false);
      toastState.add({
        type: "success",
        message: "Changes have been saved"
      });
    } catch (error) {
      appState.error.set(error);
    } finally {
      appState.loading.set(false);
    }
  }
</script>

{#if $organization}
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-5 gap-4 gap-x-6">
      <div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
        <TextField controller={idController} label="ID" class="col-span-2" disabled>
          <div slot="postfix" class="text-blue-500 h-full border-l bg-white rounded-r pointer">
            <Tooltip
              tooltip="Copy"
              class="h-full flex items-center p-2 "
              onClick={async () => {
                if (idController.value) {
                  await navigator.clipboard.writeText(idController.value);
                  toastState.add({
                    type: "info",
                    key: "id",
                    message: "Copied"
                  });
                }
              }}
            >
              <iconify-icon icon="bx:copy"></iconify-icon>
            </Tooltip>
          </div>
        </TextField>

        <TextField
          controller={nameController}
          label="Name"
          class="col-span-2"
          disabled={!$editable}
        />
        <TextAreaField
          controller={descriptionController}
          label="Description"
          class="col-span-2"
          textareaClass="h-32"
          resizable={false}
          disabled={!$editable}
        />
      </div>
    </div>
    <div class="col-span-2">
      {#if $hasEditPermission}
        <div class="flex gap-2">
          {#if $editable}
            <Button
              valid={$valid}
              label="Save Changes"
              class="button-green"
              onClick={handleSaveForm}
            />
            <Button
              label="Cancel"
              class="button-red"
              onClick={() => {
                editable.set(false);
                if ($organization) { // Ensure organization exists before resetting
                  nameController.value = $organization.name;
                  descriptionController.value = $organization.description;
                }
                form.resetValue();
              }}
            />
            <Guard requiredPermissions={["Organization.manage", "Organization.delete"]}>
              <OrganizationDeleteButton organization={$organization} />
            </Guard>
          {:else}
            <Button
              label="Edit"
              class="button-cyan"
              onClick={() => {
                editable.set(true);
              }}
            />
          {/if}
        </div>
      {/if}
      <FormDebugger formGroup={form} />
    </div>
  </div>
{/if}