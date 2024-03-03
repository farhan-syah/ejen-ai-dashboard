import type {
	SubscriptionCreate,
	SubscriptionDeleteMany,
	SubscriptionSearch,
	SubscriptionUpdate,
	SubscriptionUpdateMany
} from "$api/routes/subscription/subscription.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _SubscriptionRepository {
	path = PUBLIC_API_BASE_PATH + "/subscription";

	async create(input: SubscriptionCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Subscription>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: SubscriptionUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Subscription>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Subscription>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: SubscriptionUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Subscription>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: SubscriptionDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: SubscriptionSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Subscription[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: SubscriptionSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SubscriptionRepository = new _SubscriptionRepository();
