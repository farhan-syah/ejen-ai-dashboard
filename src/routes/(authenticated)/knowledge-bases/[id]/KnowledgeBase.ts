import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { KnowledgeBase } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _KnowledgeBase = KnowledgeBase & {};

export type KnowledgeBaseContextOption = {
	fetchKnowledgeBaseCallback: (context: KnowledgeBaseContext) => Promise<_KnowledgeBase | void>;
};

export class KnowledgeBaseContext {
	knowledgeBase: WritableAtom<_KnowledgeBase> = atom(undefined);

	private readonly fetchKnowledgeBaseCallback: (context: this) => Promise<_KnowledgeBase | void>;

	constructor(obj: KnowledgeBaseContextOption) {
		this.fetchKnowledgeBaseCallback = obj.fetchKnowledgeBaseCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["KnowledgeBase.manage", "KnowledgeBase.update"], permissions);
	});

	async fetchKnowledgeBase() {
		this.fetchKnowledgeBaseCallback(this);
	}
}

export function createKnowledgeBaseContext(option: KnowledgeBaseContextOption) {
	return setContext("knowledgeBaseContext", new KnowledgeBaseContext(option));
}

export function getKnowledgeBaseContext() {
	return getContext<KnowledgeBaseContext>("knowledgeBaseContext");
}
