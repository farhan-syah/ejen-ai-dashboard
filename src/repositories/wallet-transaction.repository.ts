import type {
  WalletTransactionDeleteMany,
  WalletTransactionSearch,
  WalletTransactionUncheckedCreateInput,
  WalletTransactionUncheckedUpdateInput,
  WalletTransactionUpdateMany
} from "$api/routes/wallet-transaction/wallet-transaction.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WalletTransactionRepository {
  path = PUBLIC_API_BASE_PATH + "/wallet-transaction";

  async create(input: WalletTransactionUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.WalletTransaction>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WalletTransactionUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.WalletTransaction>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.WalletTransaction>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WalletTransactionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.WalletTransaction>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WalletTransactionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WalletTransactionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.WalletTransaction[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const WalletTransactionRepository = new _WalletTransactionRepository();
