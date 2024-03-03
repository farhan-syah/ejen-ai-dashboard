import type {
	CartItemCreate,
	CartItemDeleteMany,
	CartItemSearch,
	CartItemUpdate,
	CartItemUpdateMany
} from "$api/routes/cart-item/cart-item.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _CartItemRepository {
	path = PUBLIC_API_BASE_PATH + "/cart-item";

	async create(input: CartItemCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.CartItem>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: CartItemUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.CartItem>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.CartItem>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: CartItemUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.CartItem>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: CartItemDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: CartItemSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.CartItem[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: CartItemSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const CartItemRepository = new _CartItemRepository();
