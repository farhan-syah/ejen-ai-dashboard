import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { KnowledgeEntry } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _KnowledgeEntry = KnowledgeEntry & {};

export type KnowledgeEntryContextOption = {
	fetchKnowledgeEntryCallback: (context: KnowledgeEntryContext) => Promise<_KnowledgeEntry | void>;
};

export class KnowledgeEntryContext {
	knowledgeEntry: WritableAtom<_KnowledgeEntry> = atom(undefined);

	private readonly fetchKnowledgeEntryCallback: (context: this) => Promise<_KnowledgeEntry | void>;

	constructor(obj: KnowledgeEntryContextOption) {
		this.fetchKnowledgeEntryCallback = obj.fetchKnowledgeEntryCallback;
	}

	hasEditPermission = computed([UserState.permissions], (permissions) => {
		return validatePermissions(["KnowledgeEntry.manage", "KnowledgeEntry.update"], permissions);
	});

	async fetchKnowledgeEntry() {
		this.fetchKnowledgeEntryCallback(this);
	}
}

export function createKnowledgeEntryContext(option: KnowledgeEntryContextOption) {
	return setContext("knowledgeEntryContext", new KnowledgeEntryContext(option));
}

export function getKnowledgeEntryContext() {
	return getContext<KnowledgeEntryContext>("knowledgeEntryContext");
}
