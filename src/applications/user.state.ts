import type { User } from "$api/types/prisma-client";
import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

class _UserState {
	user = atom<User | undefined>(undefined);
	accessToken = persistentAtom<string | undefined>("at", undefined);
	refreshToken = persistentAtom<string | undefined>("rt", undefined);
	permissions = atom<string[]>([]);
}

export const UserState = new _UserState();
export type UserState = typeof UserState;
