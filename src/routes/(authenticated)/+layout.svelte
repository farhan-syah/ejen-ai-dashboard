<script lang="ts">
	import { UserState } from "$applications";

	const user = UserState.user;
</script>

{#if $user}
	Authenticated
	<slot />
{/if}
