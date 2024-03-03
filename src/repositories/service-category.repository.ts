import type {
	ServiceCategoryCreate,
	ServiceCategoryDeleteMany,
	ServiceCategorySearch,
	ServiceCategoryUpdate,
	ServiceCategoryUpdateMany
} from "$api/routes/service-category/service-category.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _ServiceCategoryRepository {
	path = PUBLIC_API_BASE_PATH + "/service-category";

	async create(input: ServiceCategoryCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.ServiceCategory>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: ServiceCategoryUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.ServiceCategory>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.ServiceCategory>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: ServiceCategoryUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.ServiceCategory>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: ServiceCategoryDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: ServiceCategorySearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.ServiceCategory[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: ServiceCategorySearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ServiceCategoryRepository = new _ServiceCategoryRepository();
