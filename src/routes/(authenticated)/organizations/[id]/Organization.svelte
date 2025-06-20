<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { getToastState } from "$applications/toast.state";
  import { PageTitle } from "$lib/components";
  import { OrganizationRepository } from "$repositories";
  import { onMount } from "svelte";
  import { createOrganizationContext } from "./Organization";
  import OrganizationDetails from "./OrganizationDetails.svelte";

  const id = $page.params.id;
  const toast = getToastState();
  const context = createOrganizationContext({
    fetchOrganizationCallback: async (ctx) => {
      const result = await OrganizationRepository.get(id).catch(async (e) => {
        await goto("/organizations"); // Redirect to plural list page
        toast.error({ message: "Organization not found" });
      });
      if (result) {
        ctx.organization.set(result);
      }
    }
  });

  const organization = context.organization;

  onMount(() => {
    context.fetchOrganization();
  });
</script>

{#if $organization}
  <PageTitle
    title="Organization - {$organization.name}"
    id={$organization.id}
    breadcrumbs={[
      { label: "Organizations", path: "/organizations" },
      { label: `Edit ${$organization.name}`, path: "/organizations/" + id, currentPage: true }
    ]}
  />
  <div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
    <OrganizationDetails />
  </div>
{/if}