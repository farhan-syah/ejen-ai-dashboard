import { writable, type Writable } from "svelte/store";
import { UserState } from "./user.state";

class _App {
	userState: UserState;
	constructor(userState: UserState) {
		this.userState = userState;
	}
	width: Writable<number> = writable(0);
	height: Writable<number> = writable(0);
	loading: Writable<boolean> = writable(false);
	error: Writable<any> = writable(undefined);
}

export const AppState = new _App(UserState);
