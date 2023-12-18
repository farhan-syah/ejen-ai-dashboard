import type { Static } from "@sinclair/typebox";
export declare const PromotionBundleItemQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type PromotionBundleItemQuery = Static<typeof PromotionBundleItemQuerySchema>;
export declare const PromotionBundleItemIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type PromotionBundleItemId = Static<typeof PromotionBundleItemIdSchema>;
export declare const PromotionBundleItemUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleItemUncheckedCreateInput = Static<typeof PromotionBundleItemUncheckedCreateInputSchema>;
export declare const PromotionBundleItemUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleItemUncheckedUpdateInput = Static<typeof PromotionBundleItemUncheckedUpdateInputSchema>;
export declare const PromotionBundleItemActionEnum: {
    search: string;
};
export type PromotionBundleItemActionEnum = (typeof PromotionBundleItemActionEnum)[keyof typeof PromotionBundleItemActionEnum];
export declare const PromotionBundleItemSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const PromotionBundleItemSearchSchema: import("@sinclair/typebox").TObject<{
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
export type PromotionBundleItemSearch = Static<typeof PromotionBundleItemSearchSchema>;
export declare const PromotionBundleItemActionSchema: import("@sinclair/typebox").TObject<{
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
export type PromotionBundleItemAction = Static<typeof PromotionBundleItemActionSchema>;
export declare const PromotionBundleItemCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleItemCreateData = Static<typeof PromotionBundleItemCreateDataSchema>;
export declare const PromotionBundleItemCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleItemCreate = Static<typeof PromotionBundleItemCreateSchema>;
export declare const PromotionBundleItemUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionBundleItemUpdateData = Static<typeof PromotionBundleItemUpdateDataSchema>;
export declare const PromotionBundleItemUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionBundleItemUpdate = Static<typeof PromotionBundleItemUpdateSchema>;
export declare const PromotionBundleItemUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type PromotionBundleItemUpdateMany = Static<typeof PromotionBundleItemUpdateManySchema>;
export declare const PromotionBundleItemDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type PromotionBundleItemDeleteMany = Static<typeof PromotionBundleItemDeleteManySchema>;
