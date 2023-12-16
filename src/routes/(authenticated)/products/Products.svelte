<script lang="ts">
	import { Table, createTableContext } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";

	const tableContext = createTableContext({
		columns: [{ key: "id", label: "Id", visible: true }],
		onSearch: (f) => Promise.resolve([{ id: 2 }])
	});
	const table2Context = createTableContext({
		columns: [{ key: "id", label: "Id", visible: true }],
		onSearch: (f) => Promise.resolve([{ id: 1 }])
	});
</script>

<Card>
	<Table context={tableContext} />
	<Table context={table2Context} />
</Card>
