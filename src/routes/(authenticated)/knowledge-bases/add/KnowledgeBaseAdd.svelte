<script lang="ts">
	import { PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import KnowledgeBaseAddForm from "./KnowledgeBaseAddForm.svelte";
</script>

<PageTitle
	title="Add Knowledge Base"
	breadcrumbs={[
		{ label: "Knowledge Bases", path: "/knowledge-bases" },
		{ label: "Add", path: "/knowledge-bases/add", currentPage: true }
	]}
/>

<Card>
	<KnowledgeBaseAddForm />
</Card>