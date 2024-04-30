import { persistentAtom } from "@nanostores/persistent";
import type { User, UserSetting } from "@prisma/client";
import { atom } from "nanostores";

class _UserState {
	user = atom<User | undefined>(undefined);
	accessToken = persistentAtom<string | undefined>("at", undefined);
	refreshToken = persistentAtom<string | undefined>("rt", undefined);
	permissions = atom<string[]>([]);
	setting = atom<UserSetting | undefined>();
}

function createUserState() {
	return new _UserState();
}

export const UserState = createUserState();
