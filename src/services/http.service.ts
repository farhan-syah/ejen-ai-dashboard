import type { ErrorResponse } from "$api/types/response";
import { UserState } from "$applications";

class _HttpService {
	constructor(private userState: typeof UserState) {}

	async get<T = any>(
		url: RequestInfo,
		{
			headers,
			auth,
			credentials
		}: {
			headers?: Record<string, string>;
			auth?: "accessToken" | "refreshToken" | "apiKey" | undefined;
			credentials?: RequestCredentials;
		}
	) {
		const _headers: Record<string, string> = {
			...headers
		};

		if (auth === "accessToken") {
			_headers["authorization"] = `Bearer ${this.userState.accessToken.get()}`;
		}
		if (auth === "refreshToken") {
			_headers["authorization"] = `Bearer ${this.userState.refreshToken.get()}`;
		}
		const result = await fetch(url, { headers: _headers, credentials });

		const responseBody = await result.json();
		if (result.ok) return responseBody as T;

		const error: ErrorResponse = {
			status: responseBody.status ?? result.status,
			code: responseBody.code ?? result.status,
			message: responseBody.message ?? result.statusText
		};
		throw error;
	}

	async post<T = any>(
		url: RequestInfo,
		{
			body,
			headers,
			auth,
			credentials
		}: {
			body?: BodyInit | null;
			headers?: Record<string, string>;
			auth?: "accessToken" | "refreshToken" | "apiKey" | undefined;
			credentials?: RequestCredentials;
		}
	) {
		const _headers: Record<string, string> = {
			"content-type": "application/json",
			...headers
		};

		if (auth === "accessToken") {
			_headers["authorization"] = `Bearer ${this.userState.accessToken.get()}`;
		}
		if (auth === "refreshToken") {
			_headers["authorization"] = `Bearer ${this.userState.refreshToken.get()}`;
		}

		const result = await fetch(url, {
			method: "POST",
			body: body,
			headers: _headers,
			credentials
		});

		const responseBody = await result.json();
		if (result.ok) return responseBody as T;

		const error: ErrorResponse = {
			status: responseBody.status ?? result.status,
			code: responseBody.code ?? result.status,
			message: responseBody.message ?? result.statusText
		};
		throw error;
	}

	async patch<T = any>(
		url: RequestInfo,
		{
			body,
			headers,
			auth,
			credentials
		}: {
			body?: BodyInit | null;
			headers?: Record<string, string>;
			auth?: "accessToken" | "refreshToken" | "apiKey" | undefined;
			credentials?: RequestCredentials;
		}
	) {
		const _headers: Record<string, string> = {
			"content-type": "application/json",
			...headers
		};

		if (auth === "accessToken") {
			_headers["authorization"] = `Bearer ${this.userState.accessToken.get()}`;
		}
		if (auth === "refreshToken") {
			_headers["authorization"] = `Bearer ${this.userState.refreshToken.get()}`;
		}

		const result = await fetch(url, {
			method: "PATCH",
			body: body,
			headers: _headers,
			credentials
		});

		const responseBody = await result.json();
		if (result.ok) return responseBody as T;

		const error: ErrorResponse = {
			status: responseBody.status ?? result.status,
			code: responseBody.code ?? result.status,
			message: responseBody.message ?? result.statusText
		};
		throw error;
	}

	async delete<T = any>(
		url: RequestInfo,
		{
			body,
			headers,
			auth,
			credentials
		}: {
			body?: BodyInit | null;
			headers?: Record<string, string>;
			auth?: "accessToken" | "refreshToken" | "apiKey" | undefined;
			credentials?: RequestCredentials;
		}
	) {
		const _headers: Record<string, string> = {
			"content-type": "application/json",
			...headers
		};

		if (auth === "accessToken") {
			_headers["authorization"] = `Bearer ${this.userState.accessToken.get()}`;
		}
		if (auth === "refreshToken") {
			_headers["authorization"] = `Bearer ${this.userState.refreshToken.get()}`;
		}
		const result = await fetch(url, {
			method: "DELETE",
			body: body ?? JSON.stringify({}),
			headers: _headers,
			credentials
		});

		const responseBody = await result.json();
		if (result.ok) return responseBody as T;

		const error: ErrorResponse = {
			status: responseBody.status ?? result.status,
			code: responseBody.code ?? result.status,
			message: responseBody.message ?? result.statusText
		};
		throw error;
	}
}

export const HttpService = new _HttpService(UserState);
