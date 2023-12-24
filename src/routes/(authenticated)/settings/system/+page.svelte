<script>
	import { Guard } from "$lib/components";
	import SystemSettings from "./SystemSettings.svelte";
</script>

<Guard requiredPermissions={["All.manage"]}>
	<SystemSettings />
</Guard>
