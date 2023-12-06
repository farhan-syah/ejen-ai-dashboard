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
	constructor() {
		this.width.subscribe((width) => {
			if (width < Breakpoint.md) {
				this.layout.set("mobile");
			} else if (width < Breakpoint.lg) {
				this.layout.set("tablet");
			} else {
				this.isSidebarOpen = atom(true);
				this.layout.set("desktop");
			}
		});
	}
}

export const AppState = new _App();
export type AppState = typeof AppState;
