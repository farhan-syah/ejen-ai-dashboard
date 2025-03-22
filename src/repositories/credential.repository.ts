import type {
  CredentialCreate,
  CredentialDeleteMany,
  CredentialSearch,
  CredentialUpdate,
  CredentialUpdateMany
} from "$api/routes/credential/credential.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _CredentialRepository {
  path = PUBLIC_API_BASE_PATH + "/credential";

  async create(input: CredentialCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Credential>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: CredentialUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Credential>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Credential>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: CredentialUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Credential>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: CredentialDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: CredentialSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Credential[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: CredentialSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const CredentialRepository = new _CredentialRepository();
