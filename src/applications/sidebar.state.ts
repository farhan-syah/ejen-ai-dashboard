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
				this.sidebarItems.set([]);
			}
		});
	}
}

export function createSidebarState() {
	return setContext("sidebarState", new SidebarState());
}

export function getSidebarState() {
	return getContext<SidebarState>("sidebarState");
}
