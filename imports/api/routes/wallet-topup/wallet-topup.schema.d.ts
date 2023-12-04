import type { Static } from "@sinclair/typebox";
export declare const WalletTopupQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type WalletTopupQuery = Static<typeof WalletTopupQuerySchema>;
export declare const WalletTopupIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type WalletTopupId = Static<typeof WalletTopupIdSchema>;
export declare const WalletTopupUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTopupUncheckedCreateInput = Static<typeof WalletTopupUncheckedCreateInputSchema>;
export declare const WalletTopupUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTopupUncheckedUpdateInput = Static<typeof WalletTopupUncheckedUpdateInputSchema>;
export declare const WalletTopupActionEnum: {
    search: string;
};
export type WalletTopupActionEnum = (typeof WalletTopupActionEnum)[keyof typeof WalletTopupActionEnum];
export declare const WalletTopupSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const WalletTopupSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTopupSearch = Static<typeof WalletTopupSearchSchema>;
export declare const WalletTopupActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTopupAction = Static<typeof WalletTopupActionSchema>;
export declare const WalletTopupCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTopupCreateData = Static<typeof WalletTopupCreateDataSchema>;
export declare const WalletTopupCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTopupCreate = Static<typeof WalletTopupCreateSchema>;
export declare const WalletTopupUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTopupUpdateData = Static<typeof WalletTopupUpdateDataSchema>;
export declare const WalletTopupUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTopupUpdate = Static<typeof WalletTopupUpdateSchema>;
export declare const WalletTopupUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type WalletTopupUpdateMany = Static<typeof WalletTopupUpdateManySchema>;
export declare const WalletTopupDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type WalletTopupDeleteMany = Static<typeof WalletTopupDeleteManySchema>;
