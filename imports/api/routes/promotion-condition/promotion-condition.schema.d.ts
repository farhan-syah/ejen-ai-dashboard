import type { Static } from "@sinclair/typebox";
export declare const PromotionConditionQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type PromotionConditionQuery = Static<typeof PromotionConditionQuerySchema>;
export declare const PromotionConditionIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type PromotionConditionId = Static<typeof PromotionConditionIdSchema>;
export declare const PromotionConditionUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionConditionUncheckedCreateInput = Static<typeof PromotionConditionUncheckedCreateInputSchema>;
export declare const PromotionConditionUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionConditionUncheckedUpdateInput = Static<typeof PromotionConditionUncheckedUpdateInputSchema>;
export declare const PromotionConditionActionEnum: {
    search: string;
};
export type PromotionConditionActionEnum = (typeof PromotionConditionActionEnum)[keyof typeof PromotionConditionActionEnum];
export declare const PromotionConditionSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const PromotionConditionSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionConditionSearch = Static<typeof PromotionConditionSearchSchema>;
export declare const PromotionConditionActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionConditionAction = Static<typeof PromotionConditionActionSchema>;
export declare const PromotionConditionCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionConditionCreateData = Static<typeof PromotionConditionCreateDataSchema>;
export declare const PromotionConditionCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionConditionCreate = Static<typeof PromotionConditionCreateSchema>;
export declare const PromotionConditionUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type PromotionConditionUpdateData = Static<typeof PromotionConditionUpdateDataSchema>;
export declare const PromotionConditionUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type PromotionConditionUpdate = Static<typeof PromotionConditionUpdateSchema>;
export declare const PromotionConditionUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type PromotionConditionUpdateMany = Static<typeof PromotionConditionUpdateManySchema>;
export declare const PromotionConditionDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type PromotionConditionDeleteMany = Static<typeof PromotionConditionDeleteManySchema>;
