import type {
  WarehouseCreate,
  WarehouseDeleteMany,
  WarehouseSearch,
  WarehouseUpdate,
  WarehouseUpdateMany
} from "$api/routes/warehouse/warehouse.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WarehouseRepository {
  path = PUBLIC_API_BASE_PATH + "/warehouse";

  async create(input: WarehouseCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Warehouse>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WarehouseUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Warehouse>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Warehouse>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WarehouseUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Warehouse>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WarehouseDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WarehouseSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Warehouse[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: WarehouseSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const WarehouseRepository = new _WarehouseRepository();
