import type {
  PurchaseOrderItemCreate,
  PurchaseOrderItemDeleteMany,
  PurchaseOrderItemSearch,
  PurchaseOrderItemUpdate,
  PurchaseOrderItemUpdateMany
} from "$api/routes/purchase-order-item/purchase-order-item.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PurchaseOrderItemRepository {
  path = PUBLIC_API_BASE_PATH + "/purchase-order-item";

  async create(input: PurchaseOrderItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.PurchaseOrderItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PurchaseOrderItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PurchaseOrderItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PurchaseOrderItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PurchaseOrderItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PurchaseOrderItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PurchaseOrderItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PurchaseOrderItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PurchaseOrderItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PurchaseOrderItemRepository = new _PurchaseOrderItemRepository();
