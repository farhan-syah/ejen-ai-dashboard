import type {
  ShippingAddressDeleteMany,
  ShippingAddressSearch,
  ShippingAddressUncheckedCreateInput,
  ShippingAddressUncheckedUpdateInput,
  ShippingAddressUpdateMany
} from "$api/routes/shipping-address/shipping-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ShippingAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/shipping-address";

  async create(input: ShippingAddressUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.ShippingAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ShippingAddressUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ShippingAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ShippingAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ShippingAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ShippingAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ShippingAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ShippingAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ShippingAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ShippingAddressRepository = new _ShippingAddressRepository();
