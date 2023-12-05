import type {
  PurchaseOrderDeleteMany,
  PurchaseOrderSearch,
  PurchaseOrderUncheckedCreateInput,
  PurchaseOrderUncheckedUpdateInput,
  PurchaseOrderUpdateMany
} from "$api/routes/purchase-order/purchase-order.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _PurchaseOrderRepository {
  path = PUBLIC_API_BASE_PATH + "/purchase-order";

  async create(input: PurchaseOrderUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.PurchaseOrder>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: PurchaseOrderUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.PurchaseOrder>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.PurchaseOrder>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: PurchaseOrderUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.PurchaseOrder>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: PurchaseOrderDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: PurchaseOrderSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.PurchaseOrder[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const PurchaseOrderRepository = new _PurchaseOrderRepository();
