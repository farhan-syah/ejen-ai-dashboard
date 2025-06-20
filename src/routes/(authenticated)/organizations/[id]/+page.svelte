<script lang="ts">
  import { Guard } from "$lib/components";
  import Organization from "./Organization.svelte";
</script>

<Guard
  requiredPermissions={[
    "Organization.manage",
    "Organization.view",
    "Organization.update",
    "Organization.delete"
  ]}
  redirect
  redirectPath="/organizations"
>
  <Organization />
</Guard>