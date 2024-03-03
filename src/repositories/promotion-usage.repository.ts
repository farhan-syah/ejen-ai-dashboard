import type {
	PromotionUsageCreate,
	PromotionUsageDeleteMany,
	PromotionUsageSearch,
	PromotionUsageUpdate,
	PromotionUsageUpdateMany
} from "$api/routes/promotion-usage/promotion-usage.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _PromotionUsageRepository {
	path = PUBLIC_API_BASE_PATH + "/promotion-usage";

	async create(input: PromotionUsageCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.PromotionUsage>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: PromotionUsageUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.PromotionUsage>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.PromotionUsage>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: PromotionUsageUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.PromotionUsage>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: PromotionUsageDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: PromotionUsageSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.PromotionUsage[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: PromotionUsageSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const PromotionUsageRepository = new _PromotionUsageRepository();
