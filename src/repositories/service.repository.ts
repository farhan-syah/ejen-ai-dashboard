import type {
  ServiceCreate,
  ServiceDeleteMany,
  ServiceSearch,
  ServiceUpdate,
  ServiceUpdateMany
} from "$api/routes/service/service.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ServiceRepository {
  path = PUBLIC_API_BASE_PATH + "/service";

  async create(input: ServiceCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Service>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ServiceUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Service>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Service>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ServiceUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Service>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ServiceDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ServiceSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Service[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ServiceRepository = new _ServiceRepository();
