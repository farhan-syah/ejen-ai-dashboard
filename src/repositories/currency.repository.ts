import type {
  CurrencyCreate,
  CurrencyDeleteMany,
  CurrencySearch,
  CurrencyUpdate,
  CurrencyUpdateMany
} from "$api/routes/currency/currency.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _CurrencyRepository {
  path = PUBLIC_API_BASE_PATH + "/currency";

  async create(input: CurrencyCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Currency>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: CurrencyUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Currency>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Currency>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: CurrencyUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Currency>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: CurrencyDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: CurrencySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Currency[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: CurrencySearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const CurrencyRepository = new _CurrencyRepository();
