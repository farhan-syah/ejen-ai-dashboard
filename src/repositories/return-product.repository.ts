import type {
  ReturnProductDeleteMany,
  ReturnProductSearch,
  ReturnProductUncheckedCreateInput,
  ReturnProductUncheckedUpdateInput,
  ReturnProductUpdateMany
} from "$api/routes/return-product/return-product.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ReturnProductRepository {
  path = PUBLIC_API_BASE_PATH + "/return-product";

  async create(input: ReturnProductUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.ReturnProduct>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ReturnProductUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ReturnProduct>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ReturnProduct>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ReturnProductUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ReturnProduct>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ReturnProductDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ReturnProductSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ReturnProduct[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ReturnProductRepository = new _ReturnProductRepository();
