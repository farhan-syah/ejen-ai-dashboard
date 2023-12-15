import type {
  FilesCreate,
  FilesDeleteMany,
  FilesSearch,
  FilesUpdate,
  FilesUpdateMany
} from "$api/routes/files/files.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _FilesRepository {
  path = PUBLIC_API_BASE_PATH + "/files";

  async create(input: FilesCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Files>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: FilesUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Files>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Files>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: FilesUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Files>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: FilesDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: FilesSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Files[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const FilesRepository = new _FilesRepository();
