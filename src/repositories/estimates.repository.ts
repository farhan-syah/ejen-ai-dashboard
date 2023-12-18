import type {
  EstimatesCreate,
  EstimatesDeleteMany,
  EstimatesSearch,
  EstimatesUpdate,
  EstimatesUpdateMany
} from "$api/routes/estimates/estimates.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _EstimatesRepository {
  path = PUBLIC_API_BASE_PATH + "/estimates";

  async create(input: EstimatesCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Estimates>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: EstimatesUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Estimates>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Estimates>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: EstimatesUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Estimates>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: EstimatesDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: EstimatesSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Estimates[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: EstimatesSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const EstimatesRepository = new _EstimatesRepository();
