import type {
  BankAccountCreate,
  BankAccountDeleteMany,
  BankAccountSearch,
  BankAccountUpdate,
  BankAccountUpdateMany
} from "$api/routes/bank-account/bank-account.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _BankAccountRepository {
  path = PUBLIC_API_BASE_PATH + "/bank-account";

  async create(input: BankAccountCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.BankAccount>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: BankAccountUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.BankAccount>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.BankAccount>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: BankAccountUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.BankAccount>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: BankAccountDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: BankAccountSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.BankAccount[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: BankAccountSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const BankAccountRepository = new _BankAccountRepository();
