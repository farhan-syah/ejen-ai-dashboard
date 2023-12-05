import type {
  RegionDeleteMany,
  RegionSearch,
  RegionUncheckedCreateInput,
  RegionUncheckedUpdateInput,
  RegionUpdateMany
} from "$api/routes/region/region.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _RegionRepository {
  path = PUBLIC_API_BASE_PATH + "/region";

  async create(input: RegionUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.Region>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: RegionUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Region>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Region>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: RegionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Region>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: RegionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: RegionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Region[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const RegionRepository = new _RegionRepository();
