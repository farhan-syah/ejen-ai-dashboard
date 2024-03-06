import type {
  OrganizationCreate,
  OrganizationDeleteMany,
  OrganizationSearch,
  OrganizationUpdate,
  OrganizationUpdateMany
} from "$api/routes/organization/organization.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrganizationRepository {
  path = PUBLIC_API_BASE_PATH + "/organization";

  async create(input: OrganizationCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Organization>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrganizationUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Organization>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Organization>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrganizationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Organization>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrganizationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrganizationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Organization[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: OrganizationSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const OrganizationRepository = new _OrganizationRepository();
