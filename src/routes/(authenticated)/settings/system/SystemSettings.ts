import type { TabItem } from "$lib/components";
import { atom, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export const SystemSettingsTab = {
	general: "General",
	shipping: "Shipping",
	payments: "Payment",
	country: "Country",
	currency: "Currency",
	tax: "Tax",
	color: "Color"
};

export type SystemSettingsTab = (typeof SystemSettingsTab)[keyof typeof SystemSettingsTab];

export const systemSettingsTabs: TabItem[] = Object.entries(SystemSettingsTab).map((e) => {
	return {
		label: e[1],
		key: e[0]
	};
});

export const systemSettingkeys = Object.keys(SystemSettingsTab);

export type SystemSettingsContextOption = {
	index?: number;
};

export class SystemSettingsContext {
	index: WritableAtom<number>;

	constructor(obj: SystemSettingsContextOption = {}) {
		this.index = atom(obj.index ?? 0);
	}
}

export function createSystemSettingsContext(option?: SystemSettingsContextOption) {
	return setContext("systemSettingsContext", new SystemSettingsContext(option));
}

export function getSystemSettingsContext() {
	return getContext<SystemSettingsContext>("systemSettingsContext");
}
