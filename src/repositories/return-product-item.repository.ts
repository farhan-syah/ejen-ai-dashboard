import type {
  ReturnProductItemCreate,
  ReturnProductItemDeleteMany,
  ReturnProductItemSearch,
  ReturnProductItemUpdate,
  ReturnProductItemUpdateMany
} from "$api/routes/return-product-item/return-product-item.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ReturnProductItemRepository {
  path = PUBLIC_API_BASE_PATH + "/return-product-item";

  async create(input: ReturnProductItemCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ReturnProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ReturnProductItemUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ReturnProductItem>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ReturnProductItem>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ReturnProductItemUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ReturnProductItem>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ReturnProductItemDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ReturnProductItemSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ReturnProductItem[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ReturnProductItemSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ReturnProductItemRepository = new _ReturnProductItemRepository();
