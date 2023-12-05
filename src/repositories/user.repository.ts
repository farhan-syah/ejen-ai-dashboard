import type {
	UserUncheckedCreateInput,
	UserUncheckedUpdateInput,
	UserUpdateMany
} from "$api/routes/user/user.schema";
import type { Prisma, User } from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _UserRepository {
	path = PUBLIC_API_BASE_PATH + "/user"; // kebabCaseName

	async create(input: UserUncheckedCreateInput) {
		const url = this.path;
		return await HttpService.post<User>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async update(id: string, input: UserUncheckedUpdateInput) {
		const url = `${this.path}/${id}`;
		return await HttpService.patch<User>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}

	async updateMany(input: UserUpdateMany) {
		const url = this.path;
		return await HttpService.patch<Prisma.BatchPayload>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const UserRepository = new _UserRepository();
