import type { Static } from "@sinclair/typebox";
import type { ResponseBody } from "../../types/response";
export declare const UploadBodySchema: import("@sinclair/typebox").TObject<{
    file: any;
    fileName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    filePath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type UploadBody = Static<typeof UploadBodySchema>;
export type UploadResponse = ResponseBody & {
    key: string;
};
