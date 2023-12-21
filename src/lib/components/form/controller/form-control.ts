import { nanoid } from "nanoid";
import { atom, computed, type ReadableAtom, type WritableAtom } from "nanostores";

export type Validator<T = string> = {
	validator: (value: T, options?: any) => boolean;
	errorMessage: string;
	options?: any;
};

export class FormControl<T = any> {
	id: string;
	name: string;
	initialValue: T | undefined;
	writableValue: WritableAtom<T | undefined>;
	isFocused = atom(false);
	errors = atom<string[]>([]);
	hasError = atom(false);
	validators: Validator<T>[];
	valid: ReadableAtom<boolean>;
	required: boolean;
	touched = atom(false);
	dirty = atom(false);
	constructor({
		id,
		name,
		value,
		validators,
		required
	}: {
		id?: string;
		name?: string;
		value?: T;
		validators?: Validator<T>[];
		required?: boolean;
	} = {}) {
		this.id = id ?? nanoid(6);
		this.name = name ?? nanoid(6);
		this.initialValue = value;
		this.writableValue = atom(value);
		this.validators = validators ?? [];
		this.required = required ?? false;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.writableValue.listen(() => {
			this.validate();
		});
		this.errors.listen((errors) => {
			this.validateErrors([...errors]);
		});

		this.valid = computed([this.writableValue, this.hasError], (value, hasError) => {
			if (!required) {
				return !hasError;
			} else {
				return value != null && !hasError;
			}
		});
	}

	get value() {
		return this.writableValue.get();
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
		} else {
			if (this.required && this.dirty.get() == true) {
				errors.push("This field is required");
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
