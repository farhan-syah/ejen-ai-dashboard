import type {
  OrganizationAddressCreate,
  OrganizationAddressDeleteMany,
  OrganizationAddressSearch,
  OrganizationAddressUpdate,
  OrganizationAddressUpdateMany
} from "$api/routes/organization-address/organization-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrganizationAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/organization-address";

  async create(input: OrganizationAddressCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrganizationAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrganizationAddressUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrganizationAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrganizationAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrganizationAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrganizationAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrganizationAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrganizationAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrganizationAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OrganizationAddressRepository = new _OrganizationAddressRepository();
