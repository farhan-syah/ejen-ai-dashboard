import type {
  ReturnCreate,
  ReturnDeleteMany,
  ReturnSearch,
  ReturnUpdate,
  ReturnUpdateMany
} from "$api/routes/return/return.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ReturnRepository {
  path = PUBLIC_API_BASE_PATH + "/return";

  async create(input: ReturnCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Return>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ReturnUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Return>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Return>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ReturnUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Return>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ReturnDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ReturnSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Return[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ReturnSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ReturnRepository = new _ReturnRepository();
