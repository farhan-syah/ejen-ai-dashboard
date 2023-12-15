import type {
  PromotionConditionCreate,
  PromotionConditionDeleteMany,
  PromotionConditionSearch,
  PromotionConditionUpdate,
  PromotionConditionUpdateMany
} from "$api/routes/promotion-condition/promotion-condition.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PromotionConditionRepository {
  path = PUBLIC_API_BASE_PATH + "/promotion-condition";

  async create(input: PromotionConditionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.PromotionCondition>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PromotionConditionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PromotionCondition>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PromotionCondition>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PromotionConditionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PromotionCondition>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PromotionConditionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PromotionConditionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PromotionCondition[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PromotionConditionRepository = new _PromotionConditionRepository();
