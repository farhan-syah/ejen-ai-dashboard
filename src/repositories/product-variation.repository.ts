import type {
  ProductVariationCreate,
  ProductVariationDeleteMany,
  ProductVariationSearch,
  ProductVariationUpdate,
  ProductVariationUpdateMany
} from "$api/routes/product-variation/product-variation.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ProductVariationRepository {
  path = PUBLIC_API_BASE_PATH + "/product-variation";

  async create(input: ProductVariationCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.ProductVariation>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ProductVariationUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.ProductVariation>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.ProductVariation>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ProductVariationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.ProductVariation>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ProductVariationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ProductVariationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.ProductVariation[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ProductVariationSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ProductVariationRepository = new _ProductVariationRepository();
