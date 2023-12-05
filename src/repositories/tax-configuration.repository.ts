import type {
  TaxConfigurationDeleteMany,
  TaxConfigurationSearch,
  TaxConfigurationUncheckedCreateInput,
  TaxConfigurationUncheckedUpdateInput,
  TaxConfigurationUpdateMany
} from "$api/routes/tax-configuration/tax-configuration.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _TaxConfigurationRepository {
  path = PUBLIC_API_BASE_PATH + "/tax-configuration";

  async create(input: TaxConfigurationUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.TaxConfiguration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: TaxConfigurationUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.TaxConfiguration>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.TaxConfiguration>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: TaxConfigurationUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.TaxConfiguration>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: TaxConfigurationDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: TaxConfigurationSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.TaxConfiguration[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const TaxConfigurationRepository = new _TaxConfigurationRepository();
