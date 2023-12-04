import type { Static } from "@sinclair/typebox";
export declare const ResponseBodySchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TInteger;
    code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type ResponseBody = Static<typeof ResponseBodySchema>;
export declare const ErrorResponseSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TInteger;
    code: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type ErrorResponse = Static<typeof ErrorResponseSchema>;
