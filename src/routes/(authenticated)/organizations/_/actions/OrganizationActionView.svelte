<script lang="ts">
  import { goto } from "$app/navigation";
  import { IconWithTooltip } from "$lib/components";
  import type { _Organization } from "../../Organizations";
  export let organization: _Organization;
</script>

<IconWithTooltip
  icon="material-symbols:docs-outline"
  class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
  tooltip="View Details"
  link={`/organizations/${organization.id}`}
  onClick={() => {
    goto(`/organizations/${organization.id}`);
  }}
/>