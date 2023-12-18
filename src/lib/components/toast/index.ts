import { nanoid } from "nanoid";
import Toast from "./Toast.svelte";
export { Toast };

export type ToastType = "info" | "success" | "warning" | "error";
export type ToastOption = { key?: string; type: ToastType; message: string; duration?: number };

export type ToastItem = {
	key: string;
	type: ToastType;
	message: string;
	duration: number;
};

export function createToastItem(options: ToastOption): ToastItem {
	return {
		key: options.key ?? nanoid(6),
		type: options.type,
		message: options.message,
		duration: options.duration ?? 3500
	};
}
