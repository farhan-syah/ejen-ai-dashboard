export async function delay(number: number) {
	return new Promise((resolve) => setTimeout(resolve, number));
}
