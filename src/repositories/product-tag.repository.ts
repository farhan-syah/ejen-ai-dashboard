import type {
  ProductTagCreate,
  ProductTagDeleteMany,
  ProductTagSearch,
  ProductTagUpdate,
  ProductTagUpdateMany
} from "$api/routes/product-tag/product-tag.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductTagRepository {
  path = PUBLIC_API_BASE_PATH + "/product-tag";

  async create(input: ProductTagCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductTag>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductTagUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductTag>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductTag>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductTagUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductTag>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductTagDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductTagSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductTag[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ProductTagSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ProductTagRepository = new _ProductTagRepository();
