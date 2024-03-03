import type {
	IncomingDeliveryItemCreate,
	IncomingDeliveryItemDeleteMany,
	IncomingDeliveryItemSearch,
	IncomingDeliveryItemUpdate,
	IncomingDeliveryItemUpdateMany
} from "$api/routes/incoming-delivery-item/incoming-delivery-item.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _IncomingDeliveryItemRepository {
	path = PUBLIC_API_BASE_PATH + "/incoming-delivery-item";

	async create(input: IncomingDeliveryItemCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.IncomingDeliveryItem>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: IncomingDeliveryItemUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.IncomingDeliveryItem>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.IncomingDeliveryItem>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: IncomingDeliveryItemUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.IncomingDeliveryItem>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: IncomingDeliveryItemDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: IncomingDeliveryItemSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.IncomingDeliveryItem[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: IncomingDeliveryItemSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const IncomingDeliveryItemRepository = new _IncomingDeliveryItemRepository();
