import type { UploadBody, UploadResponse } from "$api/routes/upload/upload.schema";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services";

class _UploadService {
	path = PUBLIC_API_BASE_PATH + "/upload";

	async upload(body: UploadBody) {
		const formData = new FormData();
		formData.append("file", body.file);
		if (body.filePath) {
			formData.append("filePath", body.filePath);
		}
		if (body.fileName) {
			formData.append("fileName", body.fileName);
		}
		const url = this.path;
		return await HttpService.multipart<UploadResponse>(url, {
			body: formData,
			auth: "accessToken"
		});
	}
}

export const UploadService = new _UploadService();
