import type {
  InventoryMovementCreate,
  InventoryMovementDeleteMany,
  InventoryMovementSearch,
  InventoryMovementUpdate,
  InventoryMovementUpdateMany
} from "$api/routes/inventory-movement/inventory-movement.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _InventoryMovementRepository {
  path = PUBLIC_API_BASE_PATH + "/inventory-movement";

  async create(input: InventoryMovementCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.InventoryMovement>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: InventoryMovementUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.InventoryMovement>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.InventoryMovement>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: InventoryMovementUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.InventoryMovement>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: InventoryMovementDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: InventoryMovementSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.InventoryMovement[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const InventoryMovementRepository = new _InventoryMovementRepository();
