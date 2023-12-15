import type {
  OrderProductCreate,
  OrderProductDeleteMany,
  OrderProductSearch,
  OrderProductUpdate,
  OrderProductUpdateMany
} from "$api/routes/order-product/order-product.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrderProductRepository {
  path = PUBLIC_API_BASE_PATH + "/order-product";

  async create(input: OrderProductCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrderProduct>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrderProductUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrderProduct>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrderProduct>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrderProductUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrderProduct>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrderProductDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrderProductSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrderProduct[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OrderProductRepository = new _OrderProductRepository();
