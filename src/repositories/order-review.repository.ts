import type {
  OrderReviewDeleteMany,
  OrderReviewSearch,
  OrderReviewUncheckedCreateInput,
  OrderReviewUncheckedUpdateInput,
  OrderReviewUpdateMany
} from "$api/routes/order-review/order-review.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrderReviewRepository {
  path = PUBLIC_API_BASE_PATH + "/order-review";

  async create(input: OrderReviewUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.OrderReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrderReviewUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrderReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrderReview>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrderReviewUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrderReview>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrderReviewDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrderReviewSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrderReview[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OrderReviewRepository = new _OrderReviewRepository();
