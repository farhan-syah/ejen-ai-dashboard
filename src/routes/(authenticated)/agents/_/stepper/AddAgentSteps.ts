import type { AgentType, Integration, AgentTypeIntegration } from "@prisma/client";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _Integration = {
	id: string;
	name: string;
	description: string;
	icon: string;
	priority: number;
};

export type _AgentTypeIntegration = AgentTypeIntegration & {
	integration: _Integration;
};

export type _AgentType = AgentType & {};

export class AddAgentContext {
	static name: string = "addAgentContext";
	selectedAgentType: WritableAtom<_AgentType> = atom();
	selectedAgentTypeIntegrations: WritableAtom<_AgentTypeIntegration[]> = atom([]);
}

export function createAddAgentContext() {
	const context = new AddAgentContext();
	setContext(AddAgentContext.name, context);
	return context;
}

export function getAddAgentContext() {
	return getContext<AddAgentContext>(AddAgentContext.name);
}
