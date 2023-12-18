import type {
  OrganizationPermissionCreate,
  OrganizationPermissionDeleteMany,
  OrganizationPermissionSearch,
  OrganizationPermissionUpdate,
  OrganizationPermissionUpdateMany
} from "$api/routes/organization-permission/organization-permission.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrganizationPermissionRepository {
  path = PUBLIC_API_BASE_PATH + "/organization-permission";

  async create(input: OrganizationPermissionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrganizationPermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrganizationPermissionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrganizationPermission>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrganizationPermission>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrganizationPermissionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrganizationPermission>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrganizationPermissionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrganizationPermissionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrganizationPermission[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: OrganizationPermissionSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const OrganizationPermissionRepository = new _OrganizationPermissionRepository();
