import type {
  ProductCategoryCreate,
  ProductCategoryDeleteMany,
  ProductCategorySearch,
  ProductCategoryUpdate,
  ProductCategoryUpdateMany
} from "$api/routes/product-category/product-category.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductCategoryRepository {
  path = PUBLIC_API_BASE_PATH + "/product-category";

  async create(input: ProductCategoryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductCategory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductCategoryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductCategory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductCategory>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductCategoryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductCategory>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductCategoryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductCategorySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductCategory[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ProductCategoryRepository = new _ProductCategoryRepository();
