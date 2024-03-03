import type {
	SupplierTagCreate,
	SupplierTagDeleteMany,
	SupplierTagSearch,
	SupplierTagUpdate,
	SupplierTagUpdateMany
} from "$api/routes/supplier-tag/supplier-tag.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _SupplierTagRepository {
	path = PUBLIC_API_BASE_PATH + "/supplier-tag";

	async create(input: SupplierTagCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.SupplierTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: SupplierTagUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.SupplierTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.SupplierTag>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: SupplierTagUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.SupplierTag>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: SupplierTagDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: SupplierTagSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.SupplierTag[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: SupplierTagSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SupplierTagRepository = new _SupplierTagRepository();
