import type {
	SubscriptionFeatureCreate,
	SubscriptionFeatureDeleteMany,
	SubscriptionFeatureSearch,
	SubscriptionFeatureUpdate,
	SubscriptionFeatureUpdateMany
} from "$api/routes/subscription-feature/subscription-feature.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _SubscriptionFeatureRepository {
	path = PUBLIC_API_BASE_PATH + "/subscription-feature";

	async create(input: SubscriptionFeatureCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.SubscriptionFeature>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: SubscriptionFeatureUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.SubscriptionFeature>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.SubscriptionFeature>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: SubscriptionFeatureUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.SubscriptionFeature>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: SubscriptionFeatureDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: SubscriptionFeatureSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.SubscriptionFeature[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: SubscriptionFeatureSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SubscriptionFeatureRepository = new _SubscriptionFeatureRepository();
