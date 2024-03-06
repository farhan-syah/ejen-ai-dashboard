import type {
  InvoiceCreate,
  InvoiceDeleteMany,
  InvoiceSearch,
  InvoiceUpdate,
  InvoiceUpdateMany
} from "$api/routes/invoice/invoice.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _InvoiceRepository {
  path = PUBLIC_API_BASE_PATH + "/invoice";

  async create(input: InvoiceCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Invoice>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: InvoiceUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Invoice>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Invoice>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: InvoiceUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Invoice>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: InvoiceDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: InvoiceSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Invoice[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: InvoiceSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const InvoiceRepository = new _InvoiceRepository();
