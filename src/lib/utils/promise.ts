export function isPromise<T>(obj: PromiseLike<T>) {
	return (
		!!obj &&
		(typeof obj === "object" || typeof obj === "function") &&
		typeof obj.then === "function"
	);
}
