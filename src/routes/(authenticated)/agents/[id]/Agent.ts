import { UserState } from "$applications";
import { validatePermissions, type TabItem } from "$lib/components";
import { type Agent } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _Agent = Agent & {
	images?: { path: string; id: string }[];
};

export const AgentTab = {
	info: "Info",
	items: "Items",
	inventory: "Inventory",
	shipping: "Shipping",
	promotions: "Promotions",
	analytics: "Analytics",
	orders: "Orders",
	logs: "Logs"
};

export type AgentTab = (typeof AgentTab)[keyof typeof AgentTab];

export const agentTabs: TabItem[] = Object.entries(AgentTab).map((e) => {
	return {
		label: e[1],
		key: e[0]
	};
});

export const agentKeys = Object.keys(AgentTab);

export type AgentContextOption = {
	fetchAgentCallback: (context: AgentContext) => Promise<_Agent | void>;
	index?: number;
};

export class AgentContext {
	index: WritableAtom<number>;
	agent: WritableAtom<_Agent> = atom(undefined);

	private readonly fetchAgentCallback: (context: this) => Promise<_Agent | void>;

	constructor(obj: AgentContextOption) {
		this.index = atom(obj.index ?? 0);
		this.fetchAgentCallback = obj.fetchAgentCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["Agent.manage", "Agent.update"], permissions);
	});

	async fetchAgent() {
		this.fetchAgentCallback(this);
	}
}

export function createAgentContext(option: AgentContextOption) {
	return setContext("agentContext", new AgentContext(option));
}

export function getAgentContext() {
	return getContext<AgentContext>("agentContext");
}
