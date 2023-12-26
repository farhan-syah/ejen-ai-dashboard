import type {
  CountryCreate,
  CountryDeleteMany,
  CountrySearch,
  CountryUpdate,
  CountryUpdateMany
} from "$api/routes/country/country.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _CountryRepository {
  path = PUBLIC_API_BASE_PATH + "/country";

  async create(input: CountryCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Country>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: CountryUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Country>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Country>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: CountryUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Country>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: CountryDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: CountrySearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Country[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: CountrySearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const CountryRepository = new _CountryRepository();
