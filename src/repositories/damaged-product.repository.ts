import type {
	DamagedProductCreate,
	DamagedProductDeleteMany,
	DamagedProductSearch,
	DamagedProductUpdate,
	DamagedProductUpdateMany
} from "$api/routes/damaged-product/damaged-product.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _DamagedProductRepository {
	path = PUBLIC_API_BASE_PATH + "/damaged-product";

	async create(input: DamagedProductCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.DamagedProduct>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: DamagedProductUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.DamagedProduct>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.DamagedProduct>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: DamagedProductUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.DamagedProduct>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: DamagedProductDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: DamagedProductSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.DamagedProduct[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: DamagedProductSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DamagedProductRepository = new _DamagedProductRepository();
