import type {
  RolePermissionCreate,
  RolePermissionDeleteMany,
  RolePermissionSearch,
  RolePermissionUpdate,
  RolePermissionUpdateMany
} from "$api/routes/role-permission/role-permission.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _RolePermissionRepository {
  path = PUBLIC_API_BASE_PATH + "/role-permission";

  async create(input: RolePermissionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.RolePermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: RolePermissionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.RolePermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.RolePermission>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: RolePermissionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.RolePermission>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: RolePermissionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: RolePermissionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.RolePermission[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const RolePermissionRepository = new _RolePermissionRepository();
