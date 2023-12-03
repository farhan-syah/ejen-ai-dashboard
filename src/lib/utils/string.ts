export function capitalizeWord(word: string): string {
	return word
		.split(/[\s_]/g)
		.map((element) => {
			return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
		})
		.join(" ");
}

export function lowerCaseWord(word: string): string {
	return word
		.split(/[\s_]/g)
		.map((element) => {
			return element.charAt(0).toLowerCase() + element.slice(1).toLowerCase();
		})
		.join(" ");
}

/**
 * Converts a string to an integer if possible. Otherwise, will return undefined or a fallback value.
 * @param input A value to convert into a number.
 * @param or Fallback value if the conversion failed. Default to undefined, unless specified.

 */
export function tryParseInt(input: string | undefined | null, or?: number): number | undefined {
	if (typeof input === "string") {
		const val: number = parseInt(input);
		if (Number.isInteger(val)) return val;
	}
	return or;
}

export function tryParseInt4(input: string | undefined | null, or?: number): number | undefined {
	if (typeof input === "string") {
		const val: number = parseInt(input);
		if (Number.isInteger(val) && val < 2147483648) return val;
	}
	return or;
}

export function stringContains(source?: string, input?: string) {
	if (!source || !input) return false;
	return source.trim().toLowerCase().includes(input.toLowerCase());
}
