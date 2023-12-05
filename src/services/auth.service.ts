import type { LoginInput } from "$api/routes/auth/auth.schema";
import { browser } from "$app/environment";
import { UserState } from "$applications";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import type { DecodedToken, ReceivedToken } from "$types";
import { jwtDecode } from "jwt-decode";
import { HttpService } from "./http.service";

class _AuthService {
	path = PUBLIC_API_BASE_PATH + "/auth";

	constructor(private userState: UserState) {
		this.userState.accessToken.subscribe((token) => {
			if (browser) {
				if (token) {
					this.fetchUserFromLocalAccessToken(token);
				}
			}
		});
	}

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

		this.saveToken(token);
	}

	async refresh() {
		const url = this.path + "/refresh";

		const token = await HttpService.get<ReceivedToken>(url, {
			auth: "refreshToken",
			credentials: "include"
		});

		this.saveToken(token);
	}

	private saveToken(receivedToken: ReceivedToken) {
		this.userState.accessToken.set(receivedToken.accessToken);
		this.userState.refreshToken.set(receivedToken.refreshToken);
		this.userState.permissions.set(receivedToken.permissions);
	}

	private validateAccessToken(accessToken: string) {
		const decodedToken: DecodedToken = jwtDecode(accessToken);
		const validExpiry = this.validateTokenExpiry(decodedToken);

		if (validExpiry) {
			//
		} else {
			//
		}
	}

	private validateTokenExpiry(token: DecodedToken): boolean {
		return new Date() < new Date(token.exp * 1000);
	}

	private fetchUserFromLocalAccessToken(token: string) {
		this.validateAccessToken(token);
	}
}

export const AuthService = new _AuthService(UserState);
