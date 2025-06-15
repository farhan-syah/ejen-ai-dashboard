import type {
  AgentTypeIntegrationCreate,
  AgentTypeIntegrationDeleteMany,
  AgentTypeIntegrationSearch,
  AgentTypeIntegrationUpdate,
  AgentTypeIntegrationUpdateMany
} from "$api/routes/agent-type-integration/agent-type-integration.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AgentTypeIntegrationRepository {
  path = PUBLIC_API_BASE_PATH + "/agent-type-integration";

  async create(input: AgentTypeIntegrationCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.AgentTypeIntegration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AgentTypeIntegrationUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.AgentTypeIntegration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.AgentTypeIntegration>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AgentTypeIntegrationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.AgentTypeIntegration>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AgentTypeIntegrationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AgentTypeIntegrationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.AgentTypeIntegration[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AgentTypeIntegrationSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const AgentTypeIntegrationRepository = new _AgentTypeIntegrationRepository();
