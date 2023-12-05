import type {
  ProductTaxDeleteMany,
  ProductTaxSearch,
  ProductTaxUncheckedCreateInput,
  ProductTaxUncheckedUpdateInput,
  ProductTaxUpdateMany
} from "$api/routes/product-tax/product-tax.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductTaxRepository {
  path = PUBLIC_API_BASE_PATH + "/product-tax";

  async create(input: ProductTaxUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductTax>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductTaxUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductTax>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductTax>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductTaxUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductTax>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductTaxDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductTaxSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductTax[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ProductTaxRepository = new _ProductTaxRepository();
