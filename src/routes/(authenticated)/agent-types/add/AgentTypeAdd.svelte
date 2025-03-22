<script lang="ts">
	import { PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import AgentTypeAddForm from "./AgentTypeAddForm.svelte";
</script>

<PageTitle
	title="Add Agent Type"
	breadcrumbs={[
		{ label: "Agent Types", path: "/agent-types" },
		{ label: "Add", path: "/agent-types/add", currentPage: true }
	]}
/>

<Card>
	<AgentTypeAddForm />
</Card>
