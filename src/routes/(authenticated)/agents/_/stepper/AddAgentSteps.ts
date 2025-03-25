import type { AgentType } from "@prisma/client";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _AgentType = AgentType & {};

export class AddAgentContext {
	static name: string = "addAgentContext";
	selectedAgentType: WritableAtom<_AgentType | undefined> = atom(undefined);
}

export function createAddAgentContext() {
	const context = new AddAgentContext();
	setContext(AddAgentContext.name, context);
	return context;
}

export function getAddAgentContext() {
	return getContext<AddAgentContext>(AddAgentContext.name);
}
