import type {
  SystemSettingsCreate,
  SystemSettingsDeleteMany,
  SystemSettingsSearch,
  SystemSettingsUpdate,
  SystemSettingsUpdateMany
} from "$api/routes/system-settings/system-settings.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _SystemSettingsRepository {
  path = PUBLIC_API_BASE_PATH + "/system-settings";

  async create(input: SystemSettingsCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.SystemSettings>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: SystemSettingsUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.SystemSettings>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.SystemSettings>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: SystemSettingsUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.SystemSettings>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: SystemSettingsDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: SystemSettingsSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.SystemSettings[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: SystemSettingsSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SystemSettingsRepository = new _SystemSettingsRepository();
