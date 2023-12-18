import type { Static } from "@sinclair/typebox";
export declare const ProductTaxQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type ProductTaxQuery = Static<typeof ProductTaxQuerySchema>;
export declare const ProductTaxIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type ProductTaxId = Static<typeof ProductTaxIdSchema>;
export declare const ProductTaxUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductTaxUncheckedCreateInput = Static<typeof ProductTaxUncheckedCreateInputSchema>;
export declare const ProductTaxUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductTaxUncheckedUpdateInput = Static<typeof ProductTaxUncheckedUpdateInputSchema>;
export declare const ProductTaxActionEnum: {
    search: string;
};
export type ProductTaxActionEnum = (typeof ProductTaxActionEnum)[keyof typeof ProductTaxActionEnum];
export declare const ProductTaxSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const ProductTaxSearchSchema: import("@sinclair/typebox").TObject<{
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
export type ProductTaxSearch = Static<typeof ProductTaxSearchSchema>;
export declare const ProductTaxActionSchema: import("@sinclair/typebox").TObject<{
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
export type ProductTaxAction = Static<typeof ProductTaxActionSchema>;
export declare const ProductTaxCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductTaxCreateData = Static<typeof ProductTaxCreateDataSchema>;
export declare const ProductTaxCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductTaxCreate = Static<typeof ProductTaxCreateSchema>;
export declare const ProductTaxUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductTaxUpdateData = Static<typeof ProductTaxUpdateDataSchema>;
export declare const ProductTaxUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductTaxUpdate = Static<typeof ProductTaxUpdateSchema>;
export declare const ProductTaxUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type ProductTaxUpdateMany = Static<typeof ProductTaxUpdateManySchema>;
export declare const ProductTaxDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type ProductTaxDeleteMany = Static<typeof ProductTaxDeleteManySchema>;
