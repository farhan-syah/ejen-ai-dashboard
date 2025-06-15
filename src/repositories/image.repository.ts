import type {
  ImageCreate,
  ImageDeleteMany,
  ImageSearch,
  ImageUpdate,
  ImageUpdateMany
} from "$api/routes/image/image.schema";
import * as Prisma from "@prisma/client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _ImageRepository {
  path = PUBLIC_API_BASE_PATH + "/image";

  async create(input: ImageCreate) {
    const url = this.path;
    return await HttpService.post<Prisma.Image>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ImageUpdate) {
    const url = `${this.path}/${id}`;
    return await HttpService.patch<Prisma.Image>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.get<Prisma.Image>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ImageUpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = `${this.path}/${id}`;
    return await HttpService.delete<Prisma.Image>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ImageDeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ImageSearch) {
    const url = `${this.path}/search`;
    return await HttpService.post<Prisma.Image[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async count(input: ImageSearch) {
    const url = `${this.path}/count`;
    return await HttpService.post<number>(url, {
      body: JSON.stringify(input),
      auth: "accessToken"
    });
  }
}

export const ImageRepository = new _ImageRepository();
