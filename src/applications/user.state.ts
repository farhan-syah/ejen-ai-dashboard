import { persistentAtom } from "@nanostores/persistent";
import { writable } from "svelte/store";
import type { Token } from "../types";

export interface User {}

class _UserState {
	user = writable<User | undefined>(undefined);
	token = persistentAtom<Token | undefined>("tk", undefined, {
		encode: JSON.stringify,
		decode: JSON.parse
	});
}

export const UserState = new _UserState();
