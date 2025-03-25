<script lang="ts">
	import { UserState } from "$applications";
	import { Loader, PageTitle } from "$lib/components";
	import Card from "$lib/components/card/Card.svelte";
	import { AgentRepository } from "$repositories";
	import { atom, type WritableAtom } from "nanostores";
	import { onMount } from "svelte";
	import type { _Agent } from "./Agents";
	import AddAgentSteps from "./_/stepper/AddAgentSteps.svelte";

	const agents: WritableAtom<_Agent[]> = atom(undefined);
	const user = UserState.user;

	async function fetchUserAgents() {
		if (!user) return;
		const result = (await AgentRepository.search({
			where: {},
			query: {
				additionalFields: {
					organization: {
						select: {
							name: true
						}
					}
				}
			}
		})) as _Agent[];

		agents.set(result);
	}

	onMount(() => {
		fetchUserAgents();
	});
</script>

<PageTitle title="Agents" showMetadata={false}></PageTitle>

<Card>
	{#if $agents}
		{#if $agents.length === 0}
			<!-- <AgentsEmptyPlaceholder /> -->
			<AddAgentSteps />
		{:else}
			List Agents
		{/if}
	{:else}
		<div class="m-12">
			<Loader></Loader>
		</div>
	{/if}
</Card>
