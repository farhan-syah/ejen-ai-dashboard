import type {
  OpeningHoursDeleteMany,
  OpeningHoursSearch,
  OpeningHoursUncheckedCreateInput,
  OpeningHoursUncheckedUpdateInput,
  OpeningHoursUpdateMany
} from "$api/routes/opening-hours/opening-hours.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OpeningHoursRepository {
  path = PUBLIC_API_BASE_PATH + "/opening-hours";

  async create(input: OpeningHoursUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.OpeningHours>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OpeningHoursUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OpeningHours>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OpeningHours>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OpeningHoursUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OpeningHours>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OpeningHoursDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OpeningHoursSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OpeningHours[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OpeningHoursRepository = new _OpeningHoursRepository();
