import type {
  OrderServiceCreate,
  OrderServiceDeleteMany,
  OrderServiceSearch,
  OrderServiceUpdate,
  OrderServiceUpdateMany
} from "$api/routes/order-service/order-service.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _OrderServiceRepository {
  path = PUBLIC_API_BASE_PATH + "/order-service";

  async create(input: OrderServiceCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.OrderService>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: OrderServiceUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.OrderService>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.OrderService>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: OrderServiceUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.OrderService>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: OrderServiceDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: OrderServiceSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.OrderService[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: OrderServiceSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const OrderServiceRepository = new _OrderServiceRepository();
