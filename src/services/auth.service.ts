import type { LoginInput } from "$api/routes/auth/auth.schema";
import { UserState } from "$applications";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import type { ReceivedToken } from "$types";
import { HttpService } from "./http.service";

class _AuthService {
	path = PUBLIC_API_BASE_PATH + "/auth";

	async login(input: LoginInput) {
		const url = this.path + "/login";

		const token = await HttpService.post<ReceivedToken>(url, {
			body: JSON.stringify(input),
			credentials: "include"
		});

		const cookie = token.cookie;
		if (cookie) {
			cookie.forEach((c) => {
				document.cookie = c;
			});
		}

		UserState.accessToken.set(token.accessToken);
		UserState.refreshToken.set(token.refreshToken);
		UserState.permissions.set(token.permissions);
	}

	async refresh() {
		const url = this.path + "/refresh";

		const token = await HttpService.get<ReceivedToken>(url, {
			auth: "refreshToken",
			credentials: "include"
		});

		UserState.accessToken.set(token.accessToken);
		UserState.refreshToken.set(token.refreshToken);
		UserState.permissions.set(token.permissions);
	}
}

export const AuthService = new _AuthService();
