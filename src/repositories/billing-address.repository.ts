import type {
  BillingAddressCreate,
  BillingAddressDeleteMany,
  BillingAddressSearch,
  BillingAddressUpdate,
  BillingAddressUpdateMany
} from "$api/routes/billing-address/billing-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _BillingAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/billing-address";

  async create(input: BillingAddressCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.BillingAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: BillingAddressUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.BillingAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.BillingAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: BillingAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.BillingAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: BillingAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: BillingAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.BillingAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const BillingAddressRepository = new _BillingAddressRepository();
