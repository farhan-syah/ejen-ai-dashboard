import type {
	SupplierCreate,
	SupplierDeleteMany,
	SupplierSearch,
	SupplierUpdate,
	SupplierUpdateMany
} from "$api/routes/supplier/supplier.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _SupplierRepository {
	path = PUBLIC_API_BASE_PATH + "/supplier";

	async create(input: SupplierCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Supplier>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: SupplierUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Supplier>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Supplier>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: SupplierUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Supplier>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: SupplierDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: SupplierSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Supplier[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: SupplierSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SupplierRepository = new _SupplierRepository();
