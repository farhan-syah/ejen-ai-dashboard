import type { Static } from "@sinclair/typebox";
export declare const PromotionBundleQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type PromotionBundleQuery = Static<typeof PromotionBundleQuerySchema>;
export declare const PromotionBundleIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type PromotionBundleId = Static<typeof PromotionBundleIdSchema>;
export declare const PromotionBundleUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleUncheckedCreateInput = Static<typeof PromotionBundleUncheckedCreateInputSchema>;
export declare const PromotionBundleUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleUncheckedUpdateInput = Static<typeof PromotionBundleUncheckedUpdateInputSchema>;
export declare const PromotionBundleActionEnum: {
    search: string;
};
export type PromotionBundleActionEnum = (typeof PromotionBundleActionEnum)[keyof typeof PromotionBundleActionEnum];
export declare const PromotionBundleSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const PromotionBundleSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleSearch = Static<typeof PromotionBundleSearchSchema>;
export declare const PromotionBundleActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleAction = Static<typeof PromotionBundleActionSchema>;
export declare const PromotionBundleCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleCreateData = Static<typeof PromotionBundleCreateDataSchema>;
export declare const PromotionBundleCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleCreate = Static<typeof PromotionBundleCreateSchema>;
export declare const PromotionBundleUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleUpdateData = Static<typeof PromotionBundleUpdateDataSchema>;
export declare const PromotionBundleUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleUpdate = Static<typeof PromotionBundleUpdateSchema>;
export declare const PromotionBundleUpdateManySchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleUpdateMany = Static<typeof PromotionBundleUpdateManySchema>;
export declare const PromotionBundleDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type PromotionBundleDeleteMany = Static<typeof PromotionBundleDeleteManySchema>;
