import { writable, type Writable } from "svelte/store";

class _App {
	width: Writable<number> = writable(0);
	height: Writable<number> = writable(0);
	loading: Writable<boolean> = writable(false);
}

export const AppState = new _App();
