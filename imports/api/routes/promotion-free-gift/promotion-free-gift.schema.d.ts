import type { Static } from "@sinclair/typebox";
export declare const PromotionFreeGiftQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type PromotionFreeGiftQuery = Static<typeof PromotionFreeGiftQuerySchema>;
export declare const PromotionFreeGiftIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type PromotionFreeGiftId = Static<typeof PromotionFreeGiftIdSchema>;
export declare const PromotionFreeGiftUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionFreeGiftUncheckedCreateInput = Static<typeof PromotionFreeGiftUncheckedCreateInputSchema>;
export declare const PromotionFreeGiftUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionFreeGiftUncheckedUpdateInput = Static<typeof PromotionFreeGiftUncheckedUpdateInputSchema>;
export declare const PromotionFreeGiftActionEnum: {
    search: string;
};
export type PromotionFreeGiftActionEnum = (typeof PromotionFreeGiftActionEnum)[keyof typeof PromotionFreeGiftActionEnum];
export declare const PromotionFreeGiftSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const PromotionFreeGiftSearchSchema: import("@sinclair/typebox").TObject<{
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
export type PromotionFreeGiftSearch = Static<typeof PromotionFreeGiftSearchSchema>;
export declare const PromotionFreeGiftActionSchema: import("@sinclair/typebox").TObject<{
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
export type PromotionFreeGiftAction = Static<typeof PromotionFreeGiftActionSchema>;
export declare const PromotionFreeGiftCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionFreeGiftCreateData = Static<typeof PromotionFreeGiftCreateDataSchema>;
export declare const PromotionFreeGiftCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionFreeGiftCreate = Static<typeof PromotionFreeGiftCreateSchema>;
export declare const PromotionFreeGiftUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionFreeGiftUpdateData = Static<typeof PromotionFreeGiftUpdateDataSchema>;
export declare const PromotionFreeGiftUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionFreeGiftUpdate = Static<typeof PromotionFreeGiftUpdateSchema>;
export declare const PromotionFreeGiftUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type PromotionFreeGiftUpdateMany = Static<typeof PromotionFreeGiftUpdateManySchema>;
export declare const PromotionFreeGiftDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type PromotionFreeGiftDeleteMany = Static<typeof PromotionFreeGiftDeleteManySchema>;
