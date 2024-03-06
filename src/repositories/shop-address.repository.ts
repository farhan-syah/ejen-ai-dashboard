import type {
  ShopAddressCreate,
  ShopAddressDeleteMany,
  ShopAddressSearch,
  ShopAddressUpdate,
  ShopAddressUpdateMany
} from "$api/routes/shop-address/shop-address.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ShopAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/shop-address";

  async create(input: ShopAddressCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ShopAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ShopAddressUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ShopAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ShopAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ShopAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ShopAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ShopAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ShopAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ShopAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ShopAddressSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ShopAddressRepository = new _ShopAddressRepository();
