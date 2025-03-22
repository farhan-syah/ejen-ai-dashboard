<script lang="ts">
	import { PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import AgentAddForm from "./AgentAddForm.svelte";
</script>

<PageTitle
	title="Add Agent"
	breadcrumbs={[
		{ label: "Agents", path: "/agents" },
		{ label: "Add", path: "/agents/add", currentPage: true }
	]}
/>

<Card>
	<AgentAddForm />
</Card>
