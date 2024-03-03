import type {
	ServiceVariationCreate,
	ServiceVariationDeleteMany,
	ServiceVariationSearch,
	ServiceVariationUpdate,
	ServiceVariationUpdateMany
} from "$api/routes/service-variation/service-variation.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _ServiceVariationRepository {
	path = PUBLIC_API_BASE_PATH + "/service-variation";

	async create(input: ServiceVariationCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.ServiceVariation>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: ServiceVariationUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.ServiceVariation>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.ServiceVariation>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: ServiceVariationUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.ServiceVariation>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: ServiceVariationDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: ServiceVariationSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.ServiceVariation[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: ServiceVariationSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const ServiceVariationRepository = new _ServiceVariationRepository();
