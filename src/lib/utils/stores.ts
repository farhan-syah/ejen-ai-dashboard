import { browser } from "$app/environment";
import type { Writable } from "svelte/store";
import { get, writable } from "svelte/store";

export type WritableStore<T> = Writable<T>;

export const writableStore = <T = any>(key: string, initValue: T): Writable<T> => {
	const store = writable<T>(initValue);
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	if (storedValueStr != null) store.set(JSON.parse(storedValueStr));

	store.subscribe((val) => {
		if (val == undefined || val == null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	});

	window.addEventListener("storage", () => {
		const storedValueStr = localStorage.getItem(key);
		if (storedValueStr == null) {
			store.set(undefined as any);
			return;
		}
		const localValue = JSON.parse(storedValueStr);
		if (localValue !== get(store)) store.set(localValue);
	});

	return store;
};

// import storage from '$lib/store'

// interface Auth {
//     jwt: string
// }

// export const auth = storage<Auth>("auth", { jwt: "" })
