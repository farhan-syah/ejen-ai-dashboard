import type {
  GroupPermissionDeleteMany,
  GroupPermissionSearch,
  GroupPermissionUncheckedCreateInput,
  GroupPermissionUncheckedUpdateInput,
  GroupPermissionUpdateMany
} from "$api/routes/group-permission/group-permission.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _GroupPermissionRepository {
  path = PUBLIC_API_BASE_PATH + "/group-permission";

  async create(input: GroupPermissionUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.GroupPermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: GroupPermissionUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.GroupPermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.GroupPermission>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: GroupPermissionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.GroupPermission>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: GroupPermissionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: GroupPermissionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.GroupPermission[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const GroupPermissionRepository = new _GroupPermissionRepository();
