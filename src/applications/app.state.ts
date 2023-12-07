import { persistentAtom } from "@nanostores/persistent";
import { atom, type WritableAtom } from "nanostores";
import { Breakpoint } from "../variables";

class _App {
	width: WritableAtom<number> = atom(0);
	height: WritableAtom<number> = atom(0);
	loading: WritableAtom<boolean> = atom(false);
	error: WritableAtom<any> = atom(undefined);
	layout: WritableAtom<"mobile" | "tablet" | "desktop" | undefined> = atom(undefined);
	fullScreenElement: WritableAtom<Element | null> = atom(null);
	isSidebarOpen = atom(false);
	showOverlay = atom(false);
	lockedSidebarPosition: WritableAtom<string>;
	constructor() {
		this.lockedSidebarPosition = persistentAtom<string>("sb", "close");
		this.width.subscribe((width) => {
			if (width < Breakpoint.md) {
				this.layout.set("mobile");
			} else if (width < Breakpoint.lg) {
				this.layout.set("tablet");
			} else {
				this.showOverlay.set(false);
				this.layout.set("desktop");
				const lockedPosition = this.lockedSidebarPosition.get();
				this.isSidebarOpen.set(lockedPosition == "open" ? true : false);
			}
		});
	}
}

export const AppState = new _App();
export type AppState = typeof AppState;
