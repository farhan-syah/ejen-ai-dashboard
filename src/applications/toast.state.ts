import { createToastItem, type ToastItem, type ToastOption } from "$lib/components";
import { atom } from "nanostores";
import { getContext, setContext } from "svelte";

class ToastState {
	items = atom<Record<string, ToastItem>>({});

	add(option: ToastOption) {
		const currentItems = this.items.get();
		const newToast = createToastItem(option);

		currentItems[newToast.key] = newToast;
		this.items.set({ ...currentItems });
	}

	dismiss(key: string) {
		const currentItems = this.items.get();
		delete currentItems[key];
		this.items.set({ ...currentItems });
	}

	info(option: Omit<ToastOption, "type">) {
		this.add({ ...option, type: "info" });
	}
	success(option: Omit<ToastOption, "type">) {
		this.add({ ...option, type: "success" });
	}
	warning(option: Omit<ToastOption, "type">) {
		this.add({ ...option, type: "warning" });
	}
	error(option: Omit<ToastOption, "type">) {
		this.add({ ...option, type: "error" });
	}
}

export function createToastState() {
	return setContext("toastState", new ToastState());
}

export function getToastState() {
	return getContext<ToastState>("toastState");
}
