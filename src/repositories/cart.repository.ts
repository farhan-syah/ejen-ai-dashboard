import type {
  CartDeleteMany,
  CartSearch,
  CartUncheckedCreateInput,
  CartUncheckedUpdateInput,
  CartUpdateMany
} from "$api/routes/cart/cart.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _CartRepository {
  path = PUBLIC_API_BASE_PATH + "/cart";

  async create(input: CartUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.Cart>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: CartUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Cart>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Cart>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: CartUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Cart>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: CartDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: CartSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Cart[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const CartRepository = new _CartRepository();
