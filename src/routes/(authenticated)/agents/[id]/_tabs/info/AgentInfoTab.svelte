<script lang="ts">
	import AgentDetailsForm from "./AgentDetailsForm.svelte";
</script>

<div class="grid grid-cols-5 gap-4">
	<div class="col-span-full italic">
		Agent is the main item that will be shown to the users. Every agent can have different
		items/variations with its own skus. Agent with zero items will not be shown to the public.
	</div>
	<div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
		<AgentDetailsForm />
	</div>
	<div class="col-span-5 lg:col-span-3 auto-rows-min grid gap-4"></div>
</div>
