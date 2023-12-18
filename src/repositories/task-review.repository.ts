import type {
  TaskReviewCreate,
  TaskReviewDeleteMany,
  TaskReviewSearch,
  TaskReviewUpdate,
  TaskReviewUpdateMany
} from "$api/routes/task-review/task-review.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _TaskReviewRepository {
  path = PUBLIC_API_BASE_PATH + "/task-review";

  async create(input: TaskReviewCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.TaskReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: TaskReviewUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.TaskReview>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.TaskReview>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: TaskReviewUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.TaskReview>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: TaskReviewDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: TaskReviewSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.TaskReview[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: TaskReviewSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const TaskReviewRepository = new _TaskReviewRepository();
