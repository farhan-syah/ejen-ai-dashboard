import { atom, computed, type ReadableAtom, type WritableAtom } from "nanostores";
import type { FormControl } from ".";

export class FormGroup<T extends Record<string, any> = Record<string, any>> {
	controllers: FormControl[];
	valid: ReadableAtom<boolean>;
	value: WritableAtom<T> = atom({});
	constructor(controllers: FormControl[]) {
		this.controllers = controllers;

		const validReadables: ReadableAtom<boolean>[] = [];

		controllers.forEach((controller) => {
			validReadables.push(controller.valid);

			controller.writableValue.subscribe((v) => {
				const newRecord: Record<string, any> = {};
				newRecord[controller.name] = v;
				const currentValue = this.value.get();
				const newValue = { ...currentValue, ...newRecord };
				this.value.set(newValue);
			});
		});
		this.valid = computed(validReadables, (...arr) => arr.every((value) => value === true));
	}
}
