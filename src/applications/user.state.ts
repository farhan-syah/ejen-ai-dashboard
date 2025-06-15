import { persistentAtom } from "@nanostores/persistent";
import type { Role as PrismaRole, User, UserSetting } from "@prisma/client";
import { atom } from "nanostores";
type Role = PrismaRole & { organization: { name: string; id: string } };
class _UserState {
	user = atom<User | undefined>(undefined);
	accessToken = persistentAtom<string | undefined>("at", undefined);
	refreshToken = persistentAtom<string | undefined>("rt", undefined);
	permissions = atom<string[]>([]);
	setting = atom<UserSetting | undefined>();
	currentRole = atom<Role | undefined>();
}

function createUserState() {
	return new _UserState();
}

export const UserState = createUserState();
