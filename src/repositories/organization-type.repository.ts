import type {
  OrganizationTypeCreate,
  OrganizationTypeDeleteMany,
  OrganizationTypeSearch,
  OrganizationTypeUpdate,
  OrganizationTypeUpdateMany
} from "$api/routes/organization-type/organization-type.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrganizationTypeRepository {
  path = PUBLIC_API_BASE_PATH + "/organization-type";

  async create(input: OrganizationTypeCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrganizationType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrganizationTypeUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrganizationType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrganizationType>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrganizationTypeUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrganizationType>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrganizationTypeDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrganizationTypeSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrganizationType[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OrganizationTypeRepository = new _OrganizationTypeRepository();
