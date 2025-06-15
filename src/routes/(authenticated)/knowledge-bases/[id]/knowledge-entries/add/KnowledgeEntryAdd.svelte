<script lang="ts">
	import { PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import KnowledgeEntryAddForm from "./KnowledgeEntryAddForm.svelte";
</script>

<PageTitle
	title="Add Knowledge Entry"
	breadcrumbs={[
		{ label: "Knowledge Entry", path: "/knowledge-entries" },
		{ label: "Add", path: "/knowledge-entries/add", currentPage: true }
	]}
/>

<Card>
	<KnowledgeEntryAddForm />
</Card>
