import type {
  AddressCreate,
  AddressDeleteMany,
  AddressSearch,
  AddressUpdate,
  AddressUpdateMany
} from "$api/routes/address/address.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _AddressRepository {
  path = PUBLIC_API_BASE_PATH + "/address";

  async create(input: AddressCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Address>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: AddressUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Address>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Address>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: AddressUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Address>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: AddressDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: AddressSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Address[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: AddressSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const AddressRepository = new _AddressRepository();
