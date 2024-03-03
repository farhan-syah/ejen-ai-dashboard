import type {
	PaymentMethodCreate,
	PaymentMethodDeleteMany,
	PaymentMethodSearch,
	PaymentMethodUpdate,
	PaymentMethodUpdateMany
} from "$api/routes/payment-method/payment-method.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _PaymentMethodRepository {
	path = PUBLIC_API_BASE_PATH + "/payment-method";

	async create(input: PaymentMethodCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.PaymentMethod>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: PaymentMethodUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.PaymentMethod>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.PaymentMethod>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: PaymentMethodUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.PaymentMethod>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: PaymentMethodDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: PaymentMethodSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.PaymentMethod[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: PaymentMethodSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const PaymentMethodRepository = new _PaymentMethodRepository();
