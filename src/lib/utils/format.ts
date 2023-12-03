import type { Writable } from "svelte/store";

export function format(node: any, control: Writable<any>, formatFunction: (value?: any) => any) {
	function updateValue(e: any) {
		const value = formatFunction(node.value);
		if (value) node.value = value;
	}

	node.addEventListener("input", updateValue);
	node.addEventListener("paste", updateValue);

	// Format on intial hydration
	const value = formatFunction(node.value);
	if (value) node.value = value;

	return {
		destroy() {
			node.removeEventListener("input", updateValue);
			node.removeEventListener("paste", updateValue);
		},
	};
}

export function number(value: any) {
	return value;
}

export function pattern(value: any): any | undefined {
	const pattern = /^[-+]?\d+$/;
	if (pattern.test(value)) return value;
}
