import { createToastItem, type ToastItem, type ToastOption } from "$lib/components";
import { atom } from "nanostores";

class _ToastState {
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
}

export const ToastState = new _ToastState();
