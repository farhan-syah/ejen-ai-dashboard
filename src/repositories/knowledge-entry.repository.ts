import type {
	KnowledgeEntryCreate,
	KnowledgeEntryCreateFormInput,
	KnowledgeEntryDeleteMany,
	KnowledgeEntrySearch,
	KnowledgeEntryUpdate,
	KnowledgeEntryUpdateMany
} from "$api/routes/knowledge-entry/knowledge-entry.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";
import { logger } from "$lib/utils/logger";
class _KnowledgeEntryRepository {
	path = PUBLIC_API_BASE_PATH + "/knowledge-entry";

	async create(data: KnowledgeEntryCreateFormInput) {
		const url = this.path;

		const formData = new FormData();

		formData.append("title", data.title);
		formData.append("knowledgeBaseId", data.knowledgeBaseId);
		if (data.content) formData.append("content", data.content);
		if (data.file) formData.append("file", data.file);

		if (data.metadata) {
			for (const [key, value] of Object.entries(data.metadata)) {
				if (value) formData.append(`metadata[${key}]`, String(value));
			}
		}

		for (const [key, value] of formData.entries()) {
			logger.info(`FormData: ${key} =`, value);
		}

		return await HttpService.multipart<Prisma.KnowledgeEntry>(url, {
			body: formData,
			auth: "accessToken"
		});
	}

	async update(id: string, input: KnowledgeEntryUpdate) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<Prisma.KnowledgeEntry>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async get(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.get<Prisma.KnowledgeEntry>(url, {
			auth: "accessToken"
		});
	}

	async updateMany(input: KnowledgeEntryUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async delete(id: string) {
		const url = `${this.path}/${id}`;
		return await HttpService.delete<Prisma.KnowledgeEntry>(url, {
			auth: "accessToken"
		});
	}

	async deleteMany(input: KnowledgeEntryDeleteMany) {
		const url = this.path;
		return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async search(input: KnowledgeEntrySearch) {
		const url = `${this.path}/search`;
		return await HttpService.post<Prisma.KnowledgeEntry[]>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async count(input: KnowledgeEntrySearch) {
		const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const KnowledgeEntryRepository = new _KnowledgeEntryRepository();
