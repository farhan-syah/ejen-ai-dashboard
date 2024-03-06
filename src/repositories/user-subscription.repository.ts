import type {
  UserSubscriptionCreate,
  UserSubscriptionDeleteMany,
  UserSubscriptionSearch,
  UserSubscriptionUpdate,
  UserSubscriptionUpdateMany
} from "$api/routes/user-subscription/user-subscription.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserSubscriptionRepository {
  path = PUBLIC_API_BASE_PATH + "/user-subscription";

  async create(input: UserSubscriptionCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.UserSubscription>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserSubscriptionUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserSubscription>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserSubscription>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserSubscriptionUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserSubscription>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserSubscriptionDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserSubscriptionSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserSubscription[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UserSubscriptionSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UserSubscriptionRepository = new _UserSubscriptionRepository();
