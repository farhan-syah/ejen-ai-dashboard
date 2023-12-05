import type {
  PromotionBundleDeleteMany,
  PromotionBundleSearch,
  PromotionBundleUncheckedCreateInput,
  PromotionBundleUncheckedUpdateInput,
  PromotionBundleUpdateMany
} from "$api/routes/promotion-bundle/promotion-bundle.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PromotionBundleRepository {
  path = PUBLIC_API_BASE_PATH + "/promotion-bundle";

  async create(input: PromotionBundleUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.PromotionBundle>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PromotionBundleUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PromotionBundle>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PromotionBundle>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PromotionBundleUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PromotionBundle>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PromotionBundleDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PromotionBundleSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PromotionBundle[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PromotionBundleRepository = new _PromotionBundleRepository();
