import type {
  AgentIntegrationCreate,
  AgentIntegrationDeleteMany,
  AgentIntegrationSearch,
  AgentIntegrationUpdate,
  AgentIntegrationUpdateMany
} from "$api/routes/agent-integration/agent-integration.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AgentIntegrationRepository {
  path = PUBLIC_API_BASE_PATH + "/agent-integration";

  async create(input: AgentIntegrationCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.AgentIntegration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AgentIntegrationUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.AgentIntegration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.AgentIntegration>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AgentIntegrationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.AgentIntegration>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AgentIntegrationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AgentIntegrationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.AgentIntegration[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AgentIntegrationSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const AgentIntegrationRepository = new _AgentIntegrationRepository();
