import type { Static } from "@sinclair/typebox";
export declare const OrganizationTypeQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type OrganizationTypeQuery = Static<typeof OrganizationTypeQuerySchema>;
export declare const OrganizationTypeIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type OrganizationTypeId = Static<typeof OrganizationTypeIdSchema>;
export declare const OrganizationTypeUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationTypeUncheckedCreateInput = Static<typeof OrganizationTypeUncheckedCreateInputSchema>;
export declare const OrganizationTypeUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationTypeUncheckedUpdateInput = Static<typeof OrganizationTypeUncheckedUpdateInputSchema>;
export declare const OrganizationTypeActionEnum: {
    search: string;
};
export type OrganizationTypeActionEnum = (typeof OrganizationTypeActionEnum)[keyof typeof OrganizationTypeActionEnum];
export declare const OrganizationTypeSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const OrganizationTypeSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationTypeSearch = Static<typeof OrganizationTypeSearchSchema>;
export declare const OrganizationTypeActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationTypeAction = Static<typeof OrganizationTypeActionSchema>;
export declare const OrganizationTypeCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationTypeCreateData = Static<typeof OrganizationTypeCreateDataSchema>;
export declare const OrganizationTypeCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationTypeCreate = Static<typeof OrganizationTypeCreateSchema>;
export declare const OrganizationTypeUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type OrganizationTypeUpdateData = Static<typeof OrganizationTypeUpdateDataSchema>;
export declare const OrganizationTypeUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type OrganizationTypeUpdate = Static<typeof OrganizationTypeUpdateSchema>;
export declare const OrganizationTypeUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type OrganizationTypeUpdateMany = Static<typeof OrganizationTypeUpdateManySchema>;
export declare const OrganizationTypeDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type OrganizationTypeDeleteMany = Static<typeof OrganizationTypeDeleteManySchema>;
