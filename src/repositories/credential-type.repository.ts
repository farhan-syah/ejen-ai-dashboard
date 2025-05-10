import type {
  CredentialTypeCreate,
  CredentialTypeDeleteMany,
  CredentialTypeSearch,
  CredentialTypeUpdate,
  CredentialTypeUpdateMany
} from "$api/routes/credential-type/credential-type.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _CredentialTypeRepository {
  path = PUBLIC_API_BASE_PATH + "/credential-type";

  async create(input: CredentialTypeCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.CredentialType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: CredentialTypeUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.CredentialType>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.CredentialType>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: CredentialTypeUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.CredentialType>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: CredentialTypeDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: CredentialTypeSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.CredentialType[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: CredentialTypeSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const CredentialTypeRepository = new _CredentialTypeRepository();
