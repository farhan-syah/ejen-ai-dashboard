import type {
  UsageEventCreate,
  UsageEventDeleteMany,
  UsageEventSearch,
  UsageEventUpdate,
  UsageEventUpdateMany
} from "$api/routes/usage-event/usage-event.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UsageEventRepository {
  path = PUBLIC_API_BASE_PATH + "/usage-event";

  async create(input: UsageEventCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.UsageEvent>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UsageEventUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UsageEvent>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UsageEvent>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UsageEventUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UsageEvent>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UsageEventDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UsageEventSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UsageEvent[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UsageEventSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const UsageEventRepository = new _UsageEventRepository();
