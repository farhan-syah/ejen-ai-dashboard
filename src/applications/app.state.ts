import { writable, type Writable } from "svelte/store";

class _App {
	constructor() {}
	width: Writable<number> = writable(0);
	height: Writable<number> = writable(0);
	loading: Writable<boolean> = writable(false);
	error: Writable<any> = writable(undefined);
}

export const AppState = new _App();
export type AppState = typeof AppState;
