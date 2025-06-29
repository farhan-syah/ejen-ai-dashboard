import type { Static } from "@sinclair/typebox";
export declare const LoginSchema: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TString;
    includeCookie: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    isPersistant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export type LoginInput = Static<typeof LoginSchema>;
export declare const RegisterSchema: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        Active: "Active";
        Inactive: "Inactive";
        Disabled: "Disabled";
        Blacklisted: "Blacklisted";
    }>>;
}>;
export type RegisterInput = Static<typeof RegisterSchema>;
export declare const AuthPayloadSchema: import("@sinclair/typebox").TObject<{
    sub: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export type AuthPayload = Static<typeof AuthPayloadSchema>;
export declare const AuthResponseSchema: import("@sinclair/typebox").TObject<{
    accessToken: import("@sinclair/typebox").TString;
    refreshToken: import("@sinclair/typebox").TString;
    cookie: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export type AuthResponse = Static<typeof AuthResponseSchema>;
export declare const PermissionRequestSchema: import("@sinclair/typebox").TObject<{
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    roleId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type PermissionRequest = Static<typeof PermissionRequestSchema>;
