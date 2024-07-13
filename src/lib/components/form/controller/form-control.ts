import { nanoid } from "nanoid";
import { atom, computed, type ReadableAtom, type WritableAtom } from "nanostores";
import { type Validator } from "./form-validator";

export class FormControl<T = any> {
	el?: HTMLInputElement | HTMLTextAreaElement;
	id: string;
	name: string;
	initialValue: T | null | undefined;
	writableValue: WritableAtom<T | null | undefined>;
	isFocused = atom(false);
	errors = atom<string[]>([]);
	hasError = atom(false);
	validators: Validator<T>[];
	valid: ReadableAtom<boolean>;
	required: boolean;
	touched = atom(false);
	dirty = atom(false);
	allowNull: boolean;
	onReset?: (control: FormControl<T>) => any;
	constructor({
		id,
		name,
		value,
		validators,
		required,
		onReset,
		allowNull
	}: {
		id?: string;
		name?: string;
		value?: T | null;
		validators?: Validator<T>[];
		required?: boolean;
		onReset?: (control: FormControl<T>) => any;
		allowNull?: boolean;
	} = {}) {
		this.id = id ?? nanoid(6);
		this.name = name ?? nanoid(6);
		this.initialValue = value;
		this.writableValue = atom(value);
		this.validators = validators ?? [];
		this.required = required ?? false;
		this.allowNull = allowNull ?? false;
		this.writableValue.listen(() => {
			this.validate();
		});
		this.onReset = onReset;
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
		if (value != null) {
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

	resetValue() {
		this.writableValue.set(this.initialValue);
		this.touched.set(false);
		this.dirty.set(false);
		if (this.onReset) {
			this.onReset(this);
		} else {
			if (this.el instanceof HTMLInputElement || this.el instanceof HTMLTextAreaElement) {
				this.el.value = this.initialValue?.toString() ?? "";
			}
		}
		this.validate();
	}
}
