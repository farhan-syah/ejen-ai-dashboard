export class Error {
	error: string;
	statusCode?: number;
	statusText?: string;
	message?: string | string[];

	constructor(obj: any) {
		this.error = obj.error;
		this.message = obj.message;
	}
}

export function parseError(e: any): Error {
	if (typeof e === "string") return new Error({ error: e, message: e });
	if (!e) return new Error({ error: "Unknown Error" });

	const error = new Error({
		error: e.data?.error ?? e.statusText ?? e.code ?? e.error ?? "Unknown error",
	});

	error.statusCode = e.status ?? e.data?.statusCode ?? 400;
	error.statusText = e.statusText;
	error.message = e.data?.message ?? e.message ?? e.toString();

	return error;
}
