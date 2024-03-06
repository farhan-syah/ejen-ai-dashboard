import type {
  PermissionCreate,
  PermissionDeleteMany,
  PermissionSearch,
  PermissionUpdate,
  PermissionUpdateMany
} from "$api/routes/permission/permission.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PermissionRepository {
  path = PUBLIC_API_BASE_PATH + "/permission";

  async create(input: PermissionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Permission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PermissionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Permission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Permission>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PermissionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Permission>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PermissionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PermissionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Permission[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: PermissionSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const PermissionRepository = new _PermissionRepository();
