<script lang="ts">
  import type { _Organization } from "../../Organizations";
  import OrganizationActionView from "./OrganizationActionView.svelte";
  export let data: _Organization;
</script>

<div class="flex flex-wrap gap-1">
  <OrganizationActionView organization={data} />
</div>