import type {
  AgentTypeCreate,
  AgentTypeDeleteMany,
  AgentTypeSearch,
  AgentTypeUpdate,
  AgentTypeUpdateMany
} from "$api/routes/agent-type/agent-type.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AgentTypeRepository {
  path = PUBLIC_API_BASE_PATH + "/agent-type";

  async create(input: AgentTypeCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.AgentType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AgentTypeUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.AgentType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.AgentType>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AgentTypeUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.AgentType>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AgentTypeDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AgentTypeSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.AgentType[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AgentTypeSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const AgentTypeRepository = new _AgentTypeRepository();
