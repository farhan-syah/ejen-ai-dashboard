import type {
  ProductItemInventoryCreate,
  ProductItemInventoryDeleteMany,
  ProductItemInventorySearch,
  ProductItemInventoryUpdate,
  ProductItemInventoryUpdateMany
} from "$api/routes/product-item-inventory/product-item-inventory.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductItemInventoryRepository {
  path = PUBLIC_API_BASE_PATH + "/product-item-inventory";

  async create(input: ProductItemInventoryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductItemInventory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductItemInventoryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductItemInventory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductItemInventory>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductItemInventoryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductItemInventory>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductItemInventoryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductItemInventorySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductItemInventory[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ProductItemInventorySearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ProductItemInventoryRepository = new _ProductItemInventoryRepository();
