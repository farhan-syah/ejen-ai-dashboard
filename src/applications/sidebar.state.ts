import { atom } from "nanostores";
import { getContext, setContext } from "svelte";
import { sidebarItems, type SidebarItem } from "../layout/sidebar/sidebar.config";
import { UserState } from "./user.state";

class SidebarState {
	sidebarItems = atom<SidebarItem[]>([]);
	constructor() {
		UserState.permissions.listen((permissions) => {
			if (permissions.includes("All.manage")) {
				this.sidebarItems.set(sidebarItems);
			} else {
				const userSidebarItems = filterSidebarConfig(sidebarItems, permissions);
				this.sidebarItems.set(userSidebarItems);
			}
		});
	}
}

function filterSidebarConfig(
	sidebarConfig: SidebarItem[],
	userPermissions: readonly string[]
): SidebarItem[] {
	return sidebarConfig
		.map((parent) => {
			const hasParentPermission =
				!parent.requiredPermissions.length ||
				parent.requiredPermissions.some((permission) => userPermissions.includes(permission));

			const filteredItems =
				parent.items &&
				parent.items.filter(
					(item) =>
						!item.requiredPermissions.length ||
						item.requiredPermissions.some((permission) => userPermissions.includes(permission))
				);

			return hasParentPermission ? { ...parent, items: filteredItems } : null;
		})
		.filter(Boolean) as SidebarItem[];
}
export function createSidebarState() {
	return setContext("sidebarState", new SidebarState());
}

export function getSidebarState() {
	return getContext<SidebarState>("sidebarState");
}
