import { UserState } from "$applications";
import type { ReadableAtom } from "nanostores";
import type { Token } from "../types";

class _UserTypeRepository {
	path = "user-type";
	constructor(private token: ReadableAtom<Token | undefined>) {}

	search() {
		console.log(this.token?.get()?.accessToken);
	}
}

export const UserTypeRepository = new _UserTypeRepository(UserState.token);
