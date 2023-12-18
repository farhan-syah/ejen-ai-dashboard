import type {
  UserCreate,
  UserDeleteMany,
  UserSearch,
  UserUpdate,
  UserUpdateMany
} from "$api/routes/user/user.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserRepository {
  path = PUBLIC_API_BASE_PATH + "/user";

  async create(input: UserCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.User>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: UserUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.User>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.User>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: UserUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.User>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: UserDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: UserSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.User[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: UserSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UserRepository = new _UserRepository();
