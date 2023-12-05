import type {
  UserGroupAddressDeleteMany,
  UserGroupAddressSearch,
  UserGroupAddressUncheckedCreateInput,
  UserGroupAddressUncheckedUpdateInput,
  UserGroupAddressUpdateMany
} from "$api/routes/user-group-address/user-group-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserGroupAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/user-group-address";

  async create(input: UserGroupAddressUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.UserGroupAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserGroupAddressUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserGroupAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserGroupAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserGroupAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserGroupAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserGroupAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserGroupAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserGroupAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const UserGroupAddressRepository = new _UserGroupAddressRepository();
