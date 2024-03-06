import type {
  DeliveryProductItemCreate,
  DeliveryProductItemDeleteMany,
  DeliveryProductItemSearch,
  DeliveryProductItemUpdate,
  DeliveryProductItemUpdateMany
} from "$api/routes/delivery-product-item/delivery-product-item.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _DeliveryProductItemRepository {
  path = PUBLIC_API_BASE_PATH + "/delivery-product-item";

  async create(input: DeliveryProductItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.DeliveryProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: DeliveryProductItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.DeliveryProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.DeliveryProductItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: DeliveryProductItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.DeliveryProductItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: DeliveryProductItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: DeliveryProductItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.DeliveryProductItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: DeliveryProductItemSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DeliveryProductItemRepository = new _DeliveryProductItemRepository();
