import type {
	DeliveryProductCreate,
	DeliveryProductDeleteMany,
	DeliveryProductSearch,
	DeliveryProductUpdate,
	DeliveryProductUpdateMany
} from "$api/routes/delivery-product/delivery-product.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _DeliveryProductRepository {
	path = PUBLIC_API_BASE_PATH + "/delivery-product";

	async create(input: DeliveryProductCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.DeliveryProduct>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: DeliveryProductUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.DeliveryProduct>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.DeliveryProduct>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: DeliveryProductUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.DeliveryProduct>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: DeliveryProductDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: DeliveryProductSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.DeliveryProduct[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: DeliveryProductSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DeliveryProductRepository = new _DeliveryProductRepository();
