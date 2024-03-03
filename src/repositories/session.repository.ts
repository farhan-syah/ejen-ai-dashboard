import type {
	SessionCreate,
	SessionDeleteMany,
	SessionSearch,
	SessionUpdate,
	SessionUpdateMany
} from "$api/routes/session/session.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _SessionRepository {
	path = PUBLIC_API_BASE_PATH + "/session";

	async create(input: SessionCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Session>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: SessionUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Session>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Session>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: SessionUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Session>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: SessionDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: SessionSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Session[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: SessionSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const SessionRepository = new _SessionRepository();
