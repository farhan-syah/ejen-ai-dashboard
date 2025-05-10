import type {
  AgentCreate,
  AgentDeleteMany,
  AgentSearch,
  AgentUpdate,
  AgentUpdateMany
} from "$api/routes/agent/agent.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AgentRepository {
  path = PUBLIC_API_BASE_PATH + "/agent";

  async create(input: AgentCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Agent>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AgentUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Agent>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Agent>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AgentUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Agent>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AgentDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AgentSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Agent[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AgentSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const AgentRepository = new _AgentRepository();
