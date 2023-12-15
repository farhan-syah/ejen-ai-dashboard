import type { LoginInput } from "$api/routes/auth/auth.schema";
import { browser } from "$app/environment";
import { UserState } from "$applications";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { UserRepository, UserSettingRepository } from "$repositories";
import type { DecodedToken, ReceivedToken } from "$types";
import { jwtDecode } from "jwt-decode";
import { HttpService } from "./http.service";

class _AuthService {
	path = PUBLIC_API_BASE_PATH + "/auth";

	constructor() {
		UserState.accessToken.subscribe((token) => {
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

	async refreshToken() {
		const url = this.path + "/refresh";

		if (UserState.refreshToken.get()) {
			const token = await HttpService.get<ReceivedToken>(url, {
				auth: "refreshToken",
				credentials: "include"
			}).catch((e) => {
				console.log(e);
				this.logout();
			});

			if (token) this.saveToken(token);
		} else {
			if (UserState.user.get()) {
				this.logout;
			}
		}
	}

	async getPermissions(roleId: string) {
		const url = this.path + "/permissions";
		const permissions = await HttpService.post<string[]>(url, {
			body: JSON.stringify({ roleId: roleId }),
			auth: "accessToken"
		});
		return permissions;
	}

	private saveToken(receivedToken: ReceivedToken) {
		UserState.accessToken.set(receivedToken.accessToken);
		UserState.refreshToken.set(receivedToken.refreshToken);
	}

	private async clearToken() {
		UserState.refreshToken.set(undefined);
		UserState.accessToken.set(undefined);
		UserState.permissions.set([]);
	}

	private validateAccessToken(accessToken: string) {
		const decodedToken: DecodedToken = jwtDecode(accessToken);
		const validExpiry = this.validateTokenExpiry(decodedToken);
		return { validExpiry, decodedToken };
	}

	private validateTokenExpiry(token: DecodedToken): boolean {
		return new Date() < new Date((token.exp - 60) * 1000);
	}

	refreshUser() {
		if (browser) {
			const token = UserState.accessToken.get();
			// const currentRoleId = UserState.setting.c
			if (token) {
				this.fetchUserFromLocalAccessToken(token);
			}
		}
	}

	private async fetchUserFromLocalAccessToken(token: string) {
		const { validExpiry, decodedToken } = this.validateAccessToken(token);
		if (validExpiry) {
			const user = await UserRepository.get(decodedToken.sub);
			const setting = await UserSettingRepository.get(decodedToken.sub);
			if (setting.defaultUserRole) {
				const permissions = await this.getPermissions(setting.defaultUserRole);
				UserState.permissions.set(permissions);
			}
			UserState.setting.set(setting);
			UserState.user.set(user);
		} else {
			this.refreshToken();
		}
	}

	async logout() {
		await this.clearToken();
		UserState.user.set(undefined);
	}
}

export const AuthService = new _AuthService();
export type AuthService = typeof AuthService;
