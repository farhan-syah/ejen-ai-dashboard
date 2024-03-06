import type {
  UserTagCreate,
  UserTagDeleteMany,
  UserTagSearch,
  UserTagUpdate,
  UserTagUpdateMany
} from "$api/routes/user-tag/user-tag.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserTagRepository {
  path = PUBLIC_API_BASE_PATH + "/user-tag";

  async create(input: UserTagCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.UserTag>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserTagUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.UserTag>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.UserTag>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserTagUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.UserTag>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserTagDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserTagSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.UserTag[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UserTagSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UserTagRepository = new _UserTagRepository();
