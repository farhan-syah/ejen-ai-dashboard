import type {
  ShopCreate,
  ShopDeleteMany,
  ShopSearch,
  ShopUpdate,
  ShopUpdateMany
} from "$api/routes/shop/shop.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ShopRepository {
  path = PUBLIC_API_BASE_PATH + "/shop";

  async create(input: ShopCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Shop>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ShopUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Shop>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Shop>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ShopUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Shop>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ShopDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ShopSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Shop[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ShopSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ShopRepository = new _ShopRepository();
