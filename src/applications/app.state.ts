import type { CallbackFunction } from "$types";
import { persistentAtom } from "@nanostores/persistent";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";
import { Breakpoint } from "../variables";

class ConfirmationDialogState {
	isOpen: WritableAtom<boolean> = atom(false);
	title: WritableAtom<string | undefined> = atom(undefined);
	message: WritableAtom<string | undefined> = atom(undefined);
	onConfirm: WritableAtom<CallbackFunction | undefined> = atom(undefined);
	onCancel: WritableAtom<CallbackFunction | undefined> = atom(undefined);
	openDialog(obj: {
		title?: string;
		message?: string;
		onConfirm?: (...args: any[]) => any | Promise<any>;
		onCancel?: (...args: any[]) => any | Promise<any>;
	}) {
		if (!this.isOpen.get()) {
			if (obj.title) this.title.set(obj.title);
			if (obj.message) this.message.set(obj.message);
			if (obj.onConfirm) this.onConfirm.set(obj.onConfirm);
			if (obj.onCancel) this.onCancel.set(obj.onCancel);
			this.isOpen.set(true);
		}
	}

	closeDialog() {
		if (this.isOpen.get()) {
			this.isOpen.set(false);
			this.reset();
		}
	}

	reset() {
		this.title.set(undefined);
		this.message.set(undefined);
		this.onConfirm.set(undefined);
		this.onCancel.set(undefined);
	}
}

class AppState {
	width: WritableAtom<number> = atom(0);
	height: WritableAtom<number> = atom(0);
	loading: WritableAtom<boolean> = atom(false);
	error: WritableAtom<any> = atom(undefined);
	layout: WritableAtom<"mobile" | "tablet" | "desktop" | undefined> = atom(undefined);
	fullScreenElement: WritableAtom<Element | null> = atom(null);
	isSidebarOpen = atom(false);
	showOverlay = atom(false);
	lockedSidebarPosition: WritableAtom<string>;
	confirmationDialog = new ConfirmationDialogState();
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

	startLoading() {
		if (!this.loading.get()) {
			this.loading.set(true);
		}
	}

	stopLoading() {
		if (this.loading.get()) {
			this.loading.set(false);
		}
	}
}

export function createAppState() {
	return setContext("appState", new AppState());
}

export function getAppState() {
	return getContext<AppState>("appState");
}
