import type {
  LeadCreate,
  LeadDeleteMany,
  LeadSearch,
  LeadUpdate,
  LeadUpdateMany
} from "$api/routes/lead/lead.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _LeadRepository {
  path = PUBLIC_API_BASE_PATH + "/lead";

  async create(input: LeadCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Lead>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: LeadUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Lead>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Lead>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: LeadUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Lead>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: LeadDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: LeadSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Lead[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: LeadSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const LeadRepository = new _LeadRepository();
