import type {
  WarehouseAddressCreate,
  WarehouseAddressDeleteMany,
  WarehouseAddressSearch,
  WarehouseAddressUpdate,
  WarehouseAddressUpdateMany
} from "$api/routes/warehouse-address/warehouse-address.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WarehouseAddressRepository {
  path = PUBLIC_API_BASE_PATH + "/warehouse-address";

  async create(input: WarehouseAddressCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.WarehouseAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WarehouseAddressUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.WarehouseAddress>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.WarehouseAddress>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WarehouseAddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.WarehouseAddress>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WarehouseAddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WarehouseAddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.WarehouseAddress[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const WarehouseAddressRepository = new _WarehouseAddressRepository();
