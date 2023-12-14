import type { Static } from "@sinclair/typebox";
export declare const OrganizationPermissionQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type OrganizationPermissionQuery = Static<typeof OrganizationPermissionQuerySchema>;
export declare const OrganizationPermissionIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type OrganizationPermissionId = Static<typeof OrganizationPermissionIdSchema>;
export declare const OrganizationPermissionUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationPermissionUncheckedCreateInput = Static<typeof OrganizationPermissionUncheckedCreateInputSchema>;
export declare const OrganizationPermissionUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationPermissionUncheckedUpdateInput = Static<typeof OrganizationPermissionUncheckedUpdateInputSchema>;
export declare const OrganizationPermissionActionEnum: {
    search: string;
};
export type OrganizationPermissionActionEnum = (typeof OrganizationPermissionActionEnum)[keyof typeof OrganizationPermissionActionEnum];
export declare const OrganizationPermissionSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const OrganizationPermissionSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationPermissionSearch = Static<typeof OrganizationPermissionSearchSchema>;
export declare const OrganizationPermissionActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationPermissionAction = Static<typeof OrganizationPermissionActionSchema>;
export declare const OrganizationPermissionCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationPermissionCreateData = Static<typeof OrganizationPermissionCreateDataSchema>;
export declare const OrganizationPermissionCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationPermissionCreate = Static<typeof OrganizationPermissionCreateSchema>;
export declare const OrganizationPermissionUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationPermissionUpdateData = Static<typeof OrganizationPermissionUpdateDataSchema>;
export declare const OrganizationPermissionUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationPermissionUpdate = Static<typeof OrganizationPermissionUpdateSchema>;
export declare const OrganizationPermissionUpdateManySchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationPermissionUpdateMany = Static<typeof OrganizationPermissionUpdateManySchema>;
export declare const OrganizationPermissionDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type OrganizationPermissionDeleteMany = Static<typeof OrganizationPermissionDeleteManySchema>;
