import type {
	FilesCreate,
	FilesDeleteMany,
	FilesSearch,
	FilesUpdate,
	FilesUpdateMany
} from "$api/routes/files/files.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _FilesRepository {
	path = PUBLIC_API_BASE_PATH + "/files";

	async create(input: FilesCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.Files>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: FilesUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.Files>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.Files>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: FilesUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.Files>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: FilesDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: FilesSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.Files[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: FilesSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const FilesRepository = new _FilesRepository();
