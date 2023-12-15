import type {
  PromotionCreate,
  PromotionDeleteMany,
  PromotionSearch,
  PromotionUpdate,
  PromotionUpdateMany
} from "$api/routes/promotion/promotion.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PromotionRepository {
  path = PUBLIC_API_BASE_PATH + "/promotion";

  async create(input: PromotionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Promotion>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PromotionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Promotion>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Promotion>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PromotionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Promotion>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PromotionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PromotionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Promotion[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PromotionRepository = new _PromotionRepository();
