import type {
  DeliveryCreate,
  DeliveryDeleteMany,
  DeliverySearch,
  DeliveryUpdate,
  DeliveryUpdateMany
} from "$api/routes/delivery/delivery.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _DeliveryRepository {
  path = PUBLIC_API_BASE_PATH + "/delivery";

  async create(input: DeliveryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Delivery>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: DeliveryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Delivery>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Delivery>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: DeliveryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Delivery>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: DeliveryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: DeliverySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Delivery[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: DeliverySearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DeliveryRepository = new _DeliveryRepository();
