import { nanoid } from "nanoid";
import { atom, type WritableAtom } from "nanostores";

export type Validator<T = any> = {
	validator: (value: T, options?: any) => boolean;
	errorMessage: string;
	options?: any;
};

export class FormControl<T = any> {
	id: string;
	initialValue: T | undefined;
	writableValue: WritableAtom<T | undefined>;
	isFocused = atom(false);
	errors = atom<string[]>([]);
	hasError = atom(false);
	validators: Validator<T>[];
	constructor({
		id,
		value,
		validators
	}: {
		id?: string;
		value?: T;
		validators?: Validator<T>[];
	} = {}) {
		this.id = id ?? nanoid(4);
		this.initialValue = value;
		this.writableValue = atom(value);
		this.validators = validators ?? [];
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.writableValue.subscribe((value) => {
			this.validate();
		});
		this.errors.subscribe((errors) => {
			this.validateErrors([...errors]);
		});
	}

	validate() {
		const errors: string[] = [];
		const value = this.writableValue.get();
		if (value) {
			for (const validator of this.validators) {
				const valid = validator.validator(value, validator.options);
				if (!valid) {
					errors.push(validator.errorMessage);
				}
			}
		}
		this.errors.set(errors);
	}

	private validateErrors(errors: string[]) {
		if (errors.length > 0) {
			this.hasError.set(true);
		} else {
			this.hasError.set(false);
		}
	}
}
