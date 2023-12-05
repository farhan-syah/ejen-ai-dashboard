import type {
  UserAddressDeleteMany,
  UserAddressSearch,
  UserAddressUncheckedCreateInput,
  UserAddressUncheckedUpdateInput,
  UserAddressUpdateMany
} from "$api/routes/user-address/user-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/user-address";

  async create(input: UserAddressUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.UserAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserAddressUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const UserAddressRepository = new _UserAddressRepository();
