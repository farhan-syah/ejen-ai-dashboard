import type { User, UserSetting } from "$api/types/prisma-client";
import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

class _UserState {
	user = atom<User | undefined>(undefined);
	accessToken = persistentAtom<string | undefined>("at", undefined);
	refreshToken = persistentAtom<string | undefined>("rt", undefined);
	permissions = atom<string[]>([]);
	setting = atom<UserSetting | undefined>();

	constructor() {}
}

export const UserState = new _UserState();
