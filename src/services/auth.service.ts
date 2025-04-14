import type { LoginInput } from "$api/routes/auth/auth.schema";
import { browser } from "$app/environment";
import { UserState } from "$applications";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { UserRepository, UserSettingRepository } from "$repositories";
import type { DecodedToken, ReceivedToken } from "$types";
import { jwtDecode } from "jwt-decode";
import { HttpService } from "./http.service";
import { navigating } from "$app/stores"; // SvelteKit navigation store

class _AuthService {
	path = PUBLIC_API_BASE_PATH + "/auth";
	sessionCookieName = "sessionId";

	constructor() {
		UserState.accessToken.subscribe((token) => {
			if (browser) {
				if (token) {
					this.fetchUserFromLocalAccessToken(token).catch(() => {
						this.logout();
					});
				}
			}
		});

		this.setupCookieMonitoring();
	}

	private setupCookieMonitoring() {
		if (browser) {
			// Initial check on load
			this.checkSessionCookie();

			// More frequent checks (every 10 seconds)
			setInterval(() => this.checkSessionCookie(), 10000);

			// Check on navigation events
			navigating.subscribe((navigation) => {
				if (navigation) {
					this.checkSessionCookie();
				}
			});

			// // Check on focus
			// window.addEventListener('focus', () => this.checkSessionCookie());

			// Listen for storage events (might catch some cookie changes)
			window.addEventListener("storage", () => this.checkSessionCookie());

			// Check when document becomes visible again
			document.addEventListener("visibilitychange", () => {
				if (document.visibilityState === "visible") {
					this.checkSessionCookie();
				}
			});
		}
	}

	private checkSessionCookie() {
		// Only run check if user is logged in
		if (UserState.user.get() && !this.hasSessionCookie()) {
			console.log("Session cookie not found, logging out");
			this.logout();
		}
	}

	private hasSessionCookie(): boolean {
		return document.cookie
			.split(";")
			.some((cookie) => cookie.trim().startsWith(`${this.sessionCookieName}=`));
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
		// Verify cookie exists after login
		this.checkSessionCookie();
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
				this.logout();
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
	}

	private validateAccessToken(accessToken: string) {
		const decodedToken: DecodedToken = jwtDecode(accessToken);
		const validExpiry = this.validateTokenExpiry(decodedToken);
		return { validExpiry, decodedToken };
	}

	private validateTokenExpiry(token: DecodedToken): boolean {
		return new Date() < new Date((token.exp - 60) * 1000);
	}

	checkTokenExpiry() {
		const token = UserState.accessToken.get();
		if (token) {
			const decodedToken: DecodedToken = jwtDecode(token);
			const validExpiry = this.validateTokenExpiry(decodedToken);
			if (!validExpiry) this.refreshToken();
		}
	}

	refreshUser() {
		if (browser) {
			const token = UserState.accessToken.get();
			if (token) {
				this.fetchUserFromLocalAccessToken(token);
			}
		}
		// Check cookie when refreshing user data
		this.checkSessionCookie();
	}

	private async fetchUserFromLocalAccessToken(token: string) {
		const { validExpiry, decodedToken } = this.validateAccessToken(token);
		if (validExpiry) {
			const user = await UserRepository.get(decodedToken.sub);
			const searchSettingResults = await UserSettingRepository.search({
				where: {
					userId: decodedToken.sub
				}
			});

			const setting = searchSettingResults.at(0);
			if (setting?.defaultUserRoleId) {
				const permissions = await this.getPermissions(setting.defaultUserRoleId);
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
		UserState.permissions.set([]);
		UserState.setting.set(undefined);
	}

	// Public method to manually check session status
	// Can be called from layouts or components
	checkSession() {
		if (browser) {
			this.checkSessionCookie();
		}
	}
}

export const AuthService = new _AuthService();
export type AuthService = typeof AuthService;
