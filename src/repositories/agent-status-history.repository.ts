import type {
  AgentStatusHistoryCreate,
  AgentStatusHistoryDeleteMany,
  AgentStatusHistorySearch,
  AgentStatusHistoryUpdate,
  AgentStatusHistoryUpdateMany
} from "$api/routes/agent-status-history/agent-status-history.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AgentStatusHistoryRepository {
  path = PUBLIC_API_BASE_PATH + "/agent-status-history";

  async create(input: AgentStatusHistoryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.AgentStatusHistory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AgentStatusHistoryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.AgentStatusHistory>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.AgentStatusHistory>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AgentStatusHistoryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.AgentStatusHistory>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AgentStatusHistoryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AgentStatusHistorySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.AgentStatusHistory[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AgentStatusHistorySearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const AgentStatusHistoryRepository = new _AgentStatusHistoryRepository();
