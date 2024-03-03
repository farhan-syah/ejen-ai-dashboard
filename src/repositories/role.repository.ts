import type {
	RoleCreate,
	RoleDeleteMany,
	RoleSearch,
	RoleUpdate,
	RoleUpdateMany
} from "$api/routes/role/role.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _RoleRepository {
	path = PUBLIC_API_BASE_PATH + "/role";

	async create(input: RoleCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Role>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: RoleUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Role>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Role>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: RoleUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Role>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: RoleDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: RoleSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Role[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: RoleSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const RoleRepository = new _RoleRepository();
