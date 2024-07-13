import { getDuplicates } from "$lib/utils";
import { atom, computed, type ReadableAtom, type WritableAtom } from "nanostores";
import type { FormControl } from ".";

export class FormGroup<T extends Record<string, any> = Record<string, any>> {
	controllers: FormControl[];
	valid: ReadableAtom<boolean>;
	value: WritableAtom<T> = atom({});
	constructor(controllers: FormControl[]) {
		this.controllers = controllers;

		const names = controllers.map((c) => c.name);
		const duplicateNames = getDuplicates(names);
		if (duplicateNames.length > 0) {
			console.warn(`Duplicate names: [${duplicateNames}]`);
		}

		const validReadables: ReadableAtom<boolean>[] = [];
		controllers.forEach((controller) => {
			validReadables.push(controller.valid);
			controller.writableValue.subscribe((v) => {
				const newRecord: Record<string, any> = {};

				if (controller.transformOutput) {
					newRecord[controller.name] = controller.transformOutput(v);
				} else {
					newRecord[controller.name] = controller.allowNull && !v ? null : v;
				}

				const currentValue = this.value.get();

				const newValue = { ...currentValue, ...newRecord };
				this.value.set(newValue);
			});
		});
		this.valid = computed(validReadables, (...arr) => arr.every((value) => value === true));
	}

	resetValue() {
		this.controllers.forEach((controller) => {
			controller.resetValue();
		});
	}
}
