import { PUBLIC_API_BASE_PATH } from "$env/static/public";
class _PublicSettingsRepository {
	path = PUBLIC_API_BASE_PATH + "/settings/public";

	async get() {
		return fetch(this.path);
	}
}

export const PublicSettingsRepository = new _PublicSettingsRepository();
