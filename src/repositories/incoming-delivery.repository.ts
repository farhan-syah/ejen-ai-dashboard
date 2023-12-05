import type {
  IncomingDeliveryDeleteMany,
  IncomingDeliverySearch,
  IncomingDeliveryUncheckedCreateInput,
  IncomingDeliveryUncheckedUpdateInput,
  IncomingDeliveryUpdateMany
} from "$api/routes/incoming-delivery/incoming-delivery.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _IncomingDeliveryRepository {
  path = PUBLIC_API_BASE_PATH + "/incoming-delivery";

  async create(input: IncomingDeliveryUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.IncomingDelivery>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: IncomingDeliveryUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.IncomingDelivery>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.IncomingDelivery>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: IncomingDeliveryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.IncomingDelivery>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: IncomingDeliveryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: IncomingDeliverySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.IncomingDelivery[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const IncomingDeliveryRepository = new _IncomingDeliveryRepository();
