import type {
  UserGroupDeleteMany,
  UserGroupSearch,
  UserGroupUncheckedCreateInput,
  UserGroupUncheckedUpdateInput,
  UserGroupUpdateMany
} from "$api/routes/user-group/user-group.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserGroupRepository {
  path = PUBLIC_API_BASE_PATH + "/user-group";

  async create(input: UserGroupUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.UserGroup>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserGroupUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserGroup>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserGroup>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserGroupUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserGroup>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserGroupDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserGroupSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserGroup[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const UserGroupRepository = new _UserGroupRepository();
