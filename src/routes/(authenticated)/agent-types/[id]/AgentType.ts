import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { AgentType } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _AgentType = AgentType & {};

export type AgentTypeContextOption = {
	fetchAgentTypeCallback: (context: AgentTypeContext) => Promise<_AgentType | void>;
};

export class AgentTypeContext {
	agentType: WritableAtom<_AgentType> = atom(undefined);

	private readonly fetchAgentTypeCallback: (context: this) => Promise<_AgentType | void>;

	constructor(obj: AgentTypeContextOption) {
		this.fetchAgentTypeCallback = obj.fetchAgentTypeCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["AgentType.manage", "AgentType.update"], permissions);
	});

	async fetchAgentType() {
		this.fetchAgentTypeCallback(this);
	}
}

export function createAgentTypeContext(option: AgentTypeContextOption) {
	return setContext("agentTypeContext", new AgentTypeContext(option));
}

export function getAgentTypeContext() {
	return getContext<AgentTypeContext>("agentTypeContext");
}
