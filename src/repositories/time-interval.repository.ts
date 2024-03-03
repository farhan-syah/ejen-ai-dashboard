import type {
	TimeIntervalCreate,
	TimeIntervalDeleteMany,
	TimeIntervalSearch,
	TimeIntervalUpdate,
	TimeIntervalUpdateMany
} from "$api/routes/time-interval/time-interval.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import * as Prisma from "@prisma/client";

class _TimeIntervalRepository {
	path = PUBLIC_API_BASE_PATH + "/time-interval";

	async create(input: TimeIntervalCreate) {
		const url = this.path;
		return await HttpService.post<Prisma.TimeInterval>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: TimeIntervalUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.TimeInterval>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.TimeInterval>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: TimeIntervalUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.TimeInterval>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: TimeIntervalDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: TimeIntervalSearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.TimeInterval[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: TimeIntervalSearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const TimeIntervalRepository = new _TimeIntervalRepository();
