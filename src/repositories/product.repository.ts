import type {
  ProductCreate,
  ProductDeleteMany,
  ProductSearch,
  ProductUpdate,
  ProductUpdateMany
} from "$api/routes/product/product.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductRepository {
  path = PUBLIC_API_BASE_PATH + "/product";

  async create(input: ProductCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Product>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Product>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Product>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Product>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Product[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ProductRepository = new _ProductRepository();
