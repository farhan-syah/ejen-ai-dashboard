import type {
  WalletCreate,
  WalletDeleteMany,
  WalletSearch,
  WalletUpdate,
  WalletUpdateMany
} from "$api/routes/wallet/wallet.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WalletRepository {
  path = PUBLIC_API_BASE_PATH + "/wallet";

  async create(input: WalletCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Wallet>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WalletUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Wallet>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Wallet>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WalletUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Wallet>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WalletDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WalletSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Wallet[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: WalletSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const WalletRepository = new _WalletRepository();
