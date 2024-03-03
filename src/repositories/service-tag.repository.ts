import type {
	ServiceTagCreate,
	ServiceTagDeleteMany,
	ServiceTagSearch,
	ServiceTagUpdate,
	ServiceTagUpdateMany
} from "$api/routes/service-tag/service-tag.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _ServiceTagRepository {
	path = PUBLIC_API_BASE_PATH + "/service-tag";

	async create(input: ServiceTagCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.ServiceTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: ServiceTagUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.ServiceTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.ServiceTag>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: ServiceTagUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.ServiceTag>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: ServiceTagDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: ServiceTagSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.ServiceTag[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: ServiceTagSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ServiceTagRepository = new _ServiceTagRepository();
