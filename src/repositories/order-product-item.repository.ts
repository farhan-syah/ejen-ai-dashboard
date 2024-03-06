import type {
  OrderProductItemCreate,
  OrderProductItemDeleteMany,
  OrderProductItemSearch,
  OrderProductItemUpdate,
  OrderProductItemUpdateMany
} from "$api/routes/order-product-item/order-product-item.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrderProductItemRepository {
  path = PUBLIC_API_BASE_PATH + "/order-product-item";

  async create(input: OrderProductItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrderProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrderProductItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrderProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrderProductItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrderProductItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrderProductItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrderProductItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrderProductItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrderProductItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: OrderProductItemSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const OrderProductItemRepository = new _OrderProductItemRepository();
