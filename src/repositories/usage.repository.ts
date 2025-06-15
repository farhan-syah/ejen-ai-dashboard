import type {
  UsageCreate,
  UsageDeleteMany,
  UsageSearch,
  UsageUpdate,
  UsageUpdateMany
} from "$api/routes/usage/usage.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UsageRepository {
  path = PUBLIC_API_BASE_PATH + "/usage";

  async create(input: UsageCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Usage>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UsageUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Usage>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Usage>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UsageUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Usage>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UsageDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UsageSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Usage[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UsageSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const UsageRepository = new _UsageRepository();
