import type {
  TaskDeleteMany,
  TaskSearch,
  TaskUncheckedCreateInput,
  TaskUncheckedUpdateInput,
  TaskUpdateMany
} from "$api/routes/task/task.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _TaskRepository {
  path = PUBLIC_API_BASE_PATH + "/task";

  async create(input: TaskUncheckedCreateInput) {
    const url = this.path;
    return await HttpService.post<Prisma.Task>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: TaskUncheckedUpdateInput) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Task>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Task>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: TaskUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Task>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: TaskDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: TaskSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Task[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const TaskRepository = new _TaskRepository();
