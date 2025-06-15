import { isLength, isStrongPassword, type StrongPasswordOptions } from "validator";
import type { FormControl } from "./form-control";
import { logger } from "$lib/utils/logger";

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

	static match(
		controller: FormControl,
		options?: { errorMessage?: string }
	): Validator<number | string> {
		return {
			validator: (v) => v === controller.value,
			errorMessage: options?.errorMessage ?? "Value doesn't match"
		};
	}

	static isStrongPassword(options?: {
		passwordOptions?: StrongPasswordOptions & { returnScore?: false | undefined };
		errorMessage?: string;
	}) {
		const defaultPasswordOptions: StrongPasswordOptions & { returnScore?: false | undefined } = {
			minLength: 8,
			minUppercase: 0,
			minNumbers: 1,
			minSymbols: 1
		};

		const _options: StrongPasswordOptions & { returnScore?: false | undefined } = {
			...defaultPasswordOptions,
			...options?.passwordOptions
		};

		return {
			validator: (v: string) => {
				return isStrongPassword(v, _options);
			},
			errorMessage:
				options?.errorMessage ??
				`Password must include:` +
					Object.entries(_options)
						.filter(
							([key, value]) =>
								["minLength", "minLowercase", "minUppercase", "minNumbers", "minSymbols"].includes(
									key
								) && value > 0
						)
						.map(([key, value]) => {
							switch (key) {
								case "minLength":
									return `at least ${value} characters`;
								case "minLowercase":
									return `${value} lowercase letter${value > 1 ? "s" : ""}`;
								case "minUppercase":
									return `${value} uppercase letter${value > 1 ? "s" : ""}`;
								case "minNumbers":
									return `${value} number${value > 1 ? "s" : ""}`;
								case "minSymbols":
									return `${value} symbol${value > 1 ? "s" : ""}`;
								default:
									return "";
							}
						})
						.filter(Boolean)
						.join(", ")
						.replace(/,([^,]*)$/, " and$1") +
					"."
		};
	}
}
