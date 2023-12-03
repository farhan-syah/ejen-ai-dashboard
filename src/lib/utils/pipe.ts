export function toCurrency(input: number, locale = "en-MY", currency = "MYR"): string {
	return Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(input);
}

export function toCurrencyFromCent(input: number, locale = "en-MY", currency = "MYR"): string {
	return Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(input / 100);
}
