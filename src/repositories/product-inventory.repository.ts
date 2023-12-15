import type {
  ProductInventoryCreate,
  ProductInventoryDeleteMany,
  ProductInventorySearch,
  ProductInventoryUpdate,
  ProductInventoryUpdateMany
} from "$api/routes/product-inventory/product-inventory.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductInventoryRepository {
  path = PUBLIC_API_BASE_PATH + "/product-inventory";

  async create(input: ProductInventoryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductInventory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductInventoryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductInventory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductInventory>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductInventoryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductInventory>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductInventoryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductInventorySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductInventory[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ProductInventoryRepository = new _ProductInventoryRepository();
