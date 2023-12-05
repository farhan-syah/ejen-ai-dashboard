import type {
  UserGroupTypeDeleteMany,
  UserGroupTypeSearch,
  UserGroupTypeUncheckedCreateInput,
  UserGroupTypeUncheckedUpdateInput,
  UserGroupTypeUpdateMany
} from "$api/routes/user-group-type/user-group-type.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserGroupTypeRepository {
  path = PUBLIC_API_BASE_PATH + "/user-group-type";

  async create(input: UserGroupTypeUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.UserGroupType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserGroupTypeUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserGroupType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserGroupType>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserGroupTypeUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserGroupType>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserGroupTypeDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserGroupTypeSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserGroupType[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const UserGroupTypeRepository = new _UserGroupTypeRepository();
