import type {
	AccountsCreate,
	AccountsDeleteMany,
	AccountsSearch,
	AccountsUpdate,
	AccountsUpdateMany
} from "$api/routes/accounts/accounts.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _AccountsRepository {
	path = PUBLIC_API_BASE_PATH + "/accounts";

	async create(input: AccountsCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Accounts>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: AccountsUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Accounts>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Accounts>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: AccountsUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Accounts>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: AccountsDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: AccountsSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Accounts[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: AccountsSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const AccountsRepository = new _AccountsRepository();
