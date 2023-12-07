import { atom } from "nanostores";
import { sidebarItems, type SidebarItem } from "../layout/sidebar/sidebar.config";
import { UserState } from "./user.state";

class _SidebarState {
	sidebarItems = atom<SidebarItem[]>([]);
	constructor() {
		UserState.permissions.listen((permissions) => {
			if (permissions.includes("All.manage")) {
				this.sidebarItems.set(sidebarItems);
			}
		});
	}
}

export const SidebarState = new _SidebarState();
