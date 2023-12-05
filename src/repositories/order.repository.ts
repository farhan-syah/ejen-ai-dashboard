import type {
  OrderDeleteMany,
  OrderSearch,
  OrderUncheckedCreateInput,
  OrderUncheckedUpdateInput,
  OrderUpdateMany
} from "$api/routes/order/order.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrderRepository {
  path = PUBLIC_API_BASE_PATH + "/order";

  async create(input: OrderUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.Order>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrderUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Order>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Order>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrderUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Order>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrderDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrderSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Order[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const OrderRepository = new _OrderRepository();
