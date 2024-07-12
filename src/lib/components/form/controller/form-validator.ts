import { isLength } from "validator";

export type Validator<T = any> = {
	validator: (value: T, options?: any) => boolean;
	errorMessage: string;
	options?: any;
};

export class FormValidator {
	static length(
		length: number,
		options?: { errorMessage?: (length: number) => string }
	): Validator<number | string> {
		return {
			validator: (v) => isLength(v.toString(), { min: length, max: length }),
			errorMessage: options?.errorMessage
				? options.errorMessage(length)
				: `Length must be ${length}`
		};
	}
}
