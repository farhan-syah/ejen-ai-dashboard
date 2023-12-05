import type {
  WalletTopupDeleteMany,
  WalletTopupSearch,
  WalletTopupUncheckedCreateInput,
  WalletTopupUncheckedUpdateInput,
  WalletTopupUpdateMany
} from "$api/routes/wallet-topup/wallet-topup.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WalletTopupRepository {
  path = PUBLIC_API_BASE_PATH + "/wallet-topup";

  async create(input: WalletTopupUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.WalletTopup>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WalletTopupUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.WalletTopup>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.WalletTopup>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WalletTopupUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.WalletTopup>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WalletTopupDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WalletTopupSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.WalletTopup[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const WalletTopupRepository = new _WalletTopupRepository();
