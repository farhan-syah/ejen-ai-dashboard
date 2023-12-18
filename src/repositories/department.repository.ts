import type {
  DepartmentCreate,
  DepartmentDeleteMany,
  DepartmentSearch,
  DepartmentUpdate,
  DepartmentUpdateMany
} from "$api/routes/department/department.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _DepartmentRepository {
  path = PUBLIC_API_BASE_PATH + "/department";

  async create(input: DepartmentCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Department>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: DepartmentUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Department>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Department>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: DepartmentUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Department>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: DepartmentDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: DepartmentSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Department[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: DepartmentSearch) {
    const url = `${this.path}/count`;
		return await HttpService.post<number>(url, {
			body: JSON.stringify(input),
			auth: "accessToken"
		});
	}
}

export const DepartmentRepository = new _DepartmentRepository();
