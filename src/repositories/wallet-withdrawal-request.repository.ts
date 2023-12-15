import type {
  WalletWithdrawalRequestCreate,
  WalletWithdrawalRequestDeleteMany,
  WalletWithdrawalRequestSearch,
  WalletWithdrawalRequestUpdate,
  WalletWithdrawalRequestUpdateMany
} from "$api/routes/wallet-withdrawal-request/wallet-withdrawal-request.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _WalletWithdrawalRequestRepository {
  path = PUBLIC_API_BASE_PATH + "/wallet-withdrawal-request";

  async create(input: WalletWithdrawalRequestCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.WalletWithdrawalRequest>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: WalletWithdrawalRequestUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.WalletWithdrawalRequest>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.WalletWithdrawalRequest>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: WalletWithdrawalRequestUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.WalletWithdrawalRequest>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: WalletWithdrawalRequestDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: WalletWithdrawalRequestSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.WalletWithdrawalRequest[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const WalletWithdrawalRequestRepository = new _WalletWithdrawalRequestRepository();
