import { writable } from "svelte/store";

export interface User {}

class _UserState {
	user = writable<User | undefined>(undefined);
}

export const UserState = new _UserState();
