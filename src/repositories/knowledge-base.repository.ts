import type {
  KnowledgeBaseCreate,
  KnowledgeBaseDeleteMany,
  KnowledgeBaseSearch,
  KnowledgeBaseUpdate,
  KnowledgeBaseUpdateMany
} from "$api/routes/knowledge-base/knowledge-base.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _KnowledgeBaseRepository {
  path = PUBLIC_API_BASE_PATH + "/knowledge-base";

  async create(input: KnowledgeBaseCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.KnowledgeBase>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: KnowledgeBaseUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.KnowledgeBase>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.KnowledgeBase>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: KnowledgeBaseUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.KnowledgeBase>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: KnowledgeBaseDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: KnowledgeBaseSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.KnowledgeBase[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: KnowledgeBaseSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const KnowledgeBaseRepository = new _KnowledgeBaseRepository();
