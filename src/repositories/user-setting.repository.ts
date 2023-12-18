import type {
  UserSettingCreate,
  UserSettingDeleteMany,
  UserSettingSearch,
  UserSettingUpdate,
  UserSettingUpdateMany
} from "$api/routes/user-setting/user-setting.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserSettingRepository {
  path = PUBLIC_API_BASE_PATH + "/user-setting";

  async create(input: UserSettingCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.UserSetting>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserSettingUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserSetting>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserSetting>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserSettingUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserSetting>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserSettingDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserSettingSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserSetting[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UserSettingSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UserSettingRepository = new _UserSettingRepository();
