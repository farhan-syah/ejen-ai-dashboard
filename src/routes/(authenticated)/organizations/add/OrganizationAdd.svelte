<script lang="ts">
  import { PageTitle } from "$lib/components";
  import Card from "$lib/components/card/Card.svelte";
  import OrganizationAddForm from "./OrganizationAddForm.svelte";
</script>

<PageTitle
  title="Add Organization"
  breadcrumbs={[
    { label: "Organizations", path: "/organizations" },
    { label: "Add", path: "/organizations/add", currentPage: true }
  ]}
/>

<Card>
  <OrganizationAddForm />
</Card>