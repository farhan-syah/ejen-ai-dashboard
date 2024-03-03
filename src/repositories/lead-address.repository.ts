import type {
	LeadAddressCreate,
	LeadAddressDeleteMany,
	LeadAddressSearch,
	LeadAddressUpdate,
	LeadAddressUpdateMany
} from "$api/routes/lead-address/lead-address.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _LeadAddressRepository {
	path = PUBLIC_API_BASE_PATH + "/lead-address";

	async create(input: LeadAddressCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.LeadAddress>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: LeadAddressUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.LeadAddress>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.LeadAddress>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: LeadAddressUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.LeadAddress>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: LeadAddressDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: LeadAddressSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.LeadAddress[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: LeadAddressSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const LeadAddressRepository = new _LeadAddressRepository();
