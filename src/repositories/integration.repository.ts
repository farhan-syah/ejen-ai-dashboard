import type {
  IntegrationCreate,
  IntegrationDeleteMany,
  IntegrationSearch,
  IntegrationUpdate,
  IntegrationUpdateMany
} from "$api/routes/integration/integration.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _IntegrationRepository {
  path = PUBLIC_API_BASE_PATH + "/integration";

  async create(input: IntegrationCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Integration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: IntegrationUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Integration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Integration>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: IntegrationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Integration>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: IntegrationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: IntegrationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Integration[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: IntegrationSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const IntegrationRepository = new _IntegrationRepository();
