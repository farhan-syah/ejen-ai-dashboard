import type {
  DamagedProductItemCreate,
  DamagedProductItemDeleteMany,
  DamagedProductItemSearch,
  DamagedProductItemUpdate,
  DamagedProductItemUpdateMany
} from "$api/routes/damaged-product-item/damaged-product-item.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _DamagedProductItemRepository {
  path = PUBLIC_API_BASE_PATH + "/damaged-product-item";

  async create(input: DamagedProductItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.DamagedProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: DamagedProductItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.DamagedProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.DamagedProductItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: DamagedProductItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.DamagedProductItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: DamagedProductItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: DamagedProductItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.DamagedProductItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: DamagedProductItemSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DamagedProductItemRepository = new _DamagedProductItemRepository();
