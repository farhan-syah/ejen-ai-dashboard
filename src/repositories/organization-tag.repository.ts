import type {
	OrganizationTagCreate,
	OrganizationTagDeleteMany,
	OrganizationTagSearch,
	OrganizationTagUpdate,
	OrganizationTagUpdateMany
} from "$api/routes/organization-tag/organization-tag.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _OrganizationTagRepository {
	path = PUBLIC_API_BASE_PATH + "/organization-tag";

	async create(input: OrganizationTagCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.OrganizationTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: OrganizationTagUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.OrganizationTag>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.OrganizationTag>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: OrganizationTagUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.OrganizationTag>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: OrganizationTagDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: OrganizationTagSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.OrganizationTag[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: OrganizationTagSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const OrganizationTagRepository = new _OrganizationTagRepository();
