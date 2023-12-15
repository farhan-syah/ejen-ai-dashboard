import type {
  PromotionBundleItemCreate,
  PromotionBundleItemDeleteMany,
  PromotionBundleItemSearch,
  PromotionBundleItemUpdate,
  PromotionBundleItemUpdateMany
} from "$api/routes/promotion-bundle-item/promotion-bundle-item.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PromotionBundleItemRepository {
  path = PUBLIC_API_BASE_PATH + "/promotion-bundle-item";

  async create(input: PromotionBundleItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.PromotionBundleItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PromotionBundleItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PromotionBundleItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PromotionBundleItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PromotionBundleItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PromotionBundleItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PromotionBundleItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PromotionBundleItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PromotionBundleItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PromotionBundleItemRepository = new _PromotionBundleItemRepository();
