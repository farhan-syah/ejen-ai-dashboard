import type {
  PromotionFreeGiftDeleteMany,
  PromotionFreeGiftSearch,
  PromotionFreeGiftUncheckedCreateInput,
  PromotionFreeGiftUncheckedUpdateInput,
  PromotionFreeGiftUpdateMany
} from "$api/routes/promotion-free-gift/promotion-free-gift.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PromotionFreeGiftRepository {
  path = PUBLIC_API_BASE_PATH + "/promotion-free-gift";

  async create(input: PromotionFreeGiftUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.PromotionFreeGift>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PromotionFreeGiftUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PromotionFreeGift>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PromotionFreeGift>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PromotionFreeGiftUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PromotionFreeGift>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PromotionFreeGiftDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PromotionFreeGiftSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PromotionFreeGift[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PromotionFreeGiftRepository = new _PromotionFreeGiftRepository();
