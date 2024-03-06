import type {
  ProductItemCreate,
  ProductItemDeleteMany,
  ProductItemSearch,
  ProductItemUpdate,
  ProductItemUpdateMany
} from "$api/routes/product-item/product-item.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductItemRepository {
  path = PUBLIC_API_BASE_PATH + "/product-item";

  async create(input: ProductItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ProductItemSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ProductItemRepository = new _ProductItemRepository();
