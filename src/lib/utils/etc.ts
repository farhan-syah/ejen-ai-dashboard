export async function delay(number: number) {
	return new Promise((resolve) => setTimeout(resolve, number));
}

export function debounce(
	callback: (...args: any[]) => any,
	duration: number = 1000
): (...args: any[]) => any {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: any[]) => {
		clearTimeout(timeout);

		timeout = setTimeout(() => callback(...args), duration);
	};
}

export function asyncDebounce<T = any>(
	callback: (...args: any[]) => Promise<T | undefined>,
	duration: number = 1000
) {
	let t: { promise: Promise<unknown> | null; cancel: () => void } = {
		promise: null,
		cancel: () => void 0
	};
	return async (...args: any[]) => {
		try {
			t.cancel();
			t = deferred(duration);
			await t.promise;
			return await callback(...args);
		} catch (_) {
			/* prevent memory leak */
		}
	};
}

function deferred(duration: number) {
	let cancel: (reason?: any) => void = () => void 0;
	const promise = new Promise((resolve, reject) => {
		cancel = reject;
		setTimeout(resolve, duration);
	});
	return { promise, cancel };
}
