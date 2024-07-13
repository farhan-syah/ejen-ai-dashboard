import type {
	UnitCreate,
	UnitDeleteMany,
	UnitSearch,
	UnitUpdate,
	UnitUpdateMany
} from "$api/routes/unit/unit.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _UnitRepository {
	path = PUBLIC_API_BASE_PATH + "/unit";

	async create(input: UnitCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Unit>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: UnitUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Unit>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Unit>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: UnitUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Unit>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: UnitDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: UnitSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Unit[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: UnitSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UnitRepository = new _UnitRepository();
