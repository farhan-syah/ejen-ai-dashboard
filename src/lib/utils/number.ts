export function isOdd(num: number): boolean {
	return num % 2 === 0;
}

export function formatNumber(
	input: number | string | null | undefined,
	decimalPlaces: number
): string {
	try {
		// Convert the input to a number
		const number: number = typeof input === "string" ? parseFloat(input) : Number(input);

		// Check if the conversion was successful
		if (isNaN(number)) {
			throw new Error("Invalid input");
		}

		// Round the number to the specified decimal places
		const roundedNumber: number = Number(number.toFixed(decimalPlaces));

		// Convert the rounded number to a string
		let formattedNumber: string = roundedNumber.toString();

		// Add ".00" if the decimal part is empty or has fewer decimal places than required
		const decimalIndex = formattedNumber.indexOf(".");
		if (decimalIndex === -1) {
			formattedNumber += "." + "0".repeat(decimalPlaces);
		} else {
			const currentDecimalPlaces = formattedNumber.length - decimalIndex - 1;
			if (currentDecimalPlaces < decimalPlaces) {
				formattedNumber += "0".repeat(decimalPlaces - currentDecimalPlaces);
			}
		}

		return formattedNumber;
	} catch (error) {
		// Handle the case where the input cannot be converted to a number
		return "Invalid input";
	}
}
