import type { Static } from "@sinclair/typebox";
export declare const PermissionQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type PermissionQuery = Static<typeof PermissionQuerySchema>;
export declare const PermissionIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type PermissionId = Static<typeof PermissionIdSchema>;
export declare const PermissionUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PermissionUncheckedCreateInput = Static<typeof PermissionUncheckedCreateInputSchema>;
export declare const PermissionUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PermissionUncheckedUpdateInput = Static<typeof PermissionUncheckedUpdateInputSchema>;
export declare const PermissionActionEnum: {
    search: string;
};
export type PermissionActionEnum = (typeof PermissionActionEnum)[keyof typeof PermissionActionEnum];
export declare const PermissionSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const PermissionSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PermissionSearch = Static<typeof PermissionSearchSchema>;
export declare const PermissionActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PermissionAction = Static<typeof PermissionActionSchema>;
export declare const PermissionCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PermissionCreateData = Static<typeof PermissionCreateDataSchema>;
export declare const PermissionCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PermissionCreate = Static<typeof PermissionCreateSchema>;
export declare const PermissionUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PermissionUpdateData = Static<typeof PermissionUpdateDataSchema>;
export declare const PermissionUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PermissionUpdate = Static<typeof PermissionUpdateSchema>;
export declare const PermissionUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type PermissionUpdateMany = Static<typeof PermissionUpdateManySchema>;
export declare const PermissionDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type PermissionDeleteMany = Static<typeof PermissionDeleteManySchema>;
