import type {
  AccountCreate,
  AccountDeleteMany,
  AccountSearch,
  AccountUpdate,
  AccountUpdateMany
} from "$api/routes/account/account.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AccountRepository {
  path = PUBLIC_API_BASE_PATH + "/account";

  async create(input: AccountCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Account>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AccountUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Account>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Account>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AccountUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Account>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AccountDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AccountSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Account[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AccountSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const AccountRepository = new _AccountRepository();
