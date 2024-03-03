import type {
	PurchaseBillCreate,
	PurchaseBillDeleteMany,
	PurchaseBillSearch,
	PurchaseBillUpdate,
	PurchaseBillUpdateMany
} from "$api/routes/purchase-bill/purchase-bill.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _PurchaseBillRepository {
	path = PUBLIC_API_BASE_PATH + "/purchase-bill";

	async create(input: PurchaseBillCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.PurchaseBill>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: PurchaseBillUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.PurchaseBill>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.PurchaseBill>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: PurchaseBillUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.PurchaseBill>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: PurchaseBillDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: PurchaseBillSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.PurchaseBill[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: PurchaseBillSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const PurchaseBillRepository = new _PurchaseBillRepository();
