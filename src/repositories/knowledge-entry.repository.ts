import type {
  KnowledgeEntryCreate,
  KnowledgeEntryDeleteMany,
  KnowledgeEntrySearch,
  KnowledgeEntryUpdate,
  KnowledgeEntryUpdateMany
} from "$api/routes/knowledge-entry/knowledge-entry.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _KnowledgeEntryRepository {
  path = PUBLIC_API_BASE_PATH + "/knowledge-entry";

  async create(input: KnowledgeEntryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.KnowledgeEntry>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: KnowledgeEntryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.KnowledgeEntry>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.KnowledgeEntry>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: KnowledgeEntryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.KnowledgeEntry>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: KnowledgeEntryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: KnowledgeEntrySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.KnowledgeEntry[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
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
