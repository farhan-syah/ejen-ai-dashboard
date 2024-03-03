import type {
	TieredPricingCreate,
	TieredPricingDeleteMany,
	TieredPricingSearch,
	TieredPricingUpdate,
	TieredPricingUpdateMany
} from "$api/routes/tiered-pricing/tiered-pricing.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _TieredPricingRepository {
	path = PUBLIC_API_BASE_PATH + "/tiered-pricing";

	async create(input: TieredPricingCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.TieredPricing>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: TieredPricingUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.TieredPricing>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.TieredPricing>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: TieredPricingUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.TieredPricing>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: TieredPricingDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: TieredPricingSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.TieredPricing[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: TieredPricingSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const TieredPricingRepository = new _TieredPricingRepository();
