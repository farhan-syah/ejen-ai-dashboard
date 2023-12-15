import type {
  ProductReviewCreate,
  ProductReviewDeleteMany,
  ProductReviewSearch,
  ProductReviewUpdate,
  ProductReviewUpdateMany
} from "$api/routes/product-review/product-review.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductReviewRepository {
  path = PUBLIC_API_BASE_PATH + "/product-review";

  async create(input: ProductReviewCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductReviewUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductReview>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductReviewUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductReview>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductReviewDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductReviewSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductReview[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ProductReviewRepository = new _ProductReviewRepository();
