import type {
	BankCreate,
	BankDeleteMany,
	BankSearch,
	BankUpdate,
	BankUpdateMany
} from "$api/routes/bank/bank.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _BankRepository {
	path = PUBLIC_API_BASE_PATH + "/bank";

	async create(input: BankCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Bank>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: BankUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Bank>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Bank>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: BankUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Bank>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: BankDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: BankSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Bank[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: BankSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const BankRepository = new _BankRepository();
