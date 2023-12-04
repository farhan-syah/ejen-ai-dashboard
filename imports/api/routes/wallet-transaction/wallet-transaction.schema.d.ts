import type { Static } from "@sinclair/typebox";
export declare const WalletTransactionQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type WalletTransactionQuery = Static<typeof WalletTransactionQuerySchema>;
export declare const WalletTransactionIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type WalletTransactionId = Static<typeof WalletTransactionIdSchema>;
export declare const WalletTransactionUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTransactionUncheckedCreateInput = Static<typeof WalletTransactionUncheckedCreateInputSchema>;
export declare const WalletTransactionUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTransactionUncheckedUpdateInput = Static<typeof WalletTransactionUncheckedUpdateInputSchema>;
export declare const WalletTransactionActionEnum: {
    search: string;
};
export type WalletTransactionActionEnum = (typeof WalletTransactionActionEnum)[keyof typeof WalletTransactionActionEnum];
export declare const WalletTransactionSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const WalletTransactionSearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTransactionSearch = Static<typeof WalletTransactionSearchSchema>;
export declare const WalletTransactionActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTransactionAction = Static<typeof WalletTransactionActionSchema>;
export declare const WalletTransactionCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTransactionCreateData = Static<typeof WalletTransactionCreateDataSchema>;
export declare const WalletTransactionCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTransactionCreate = Static<typeof WalletTransactionCreateSchema>;
export declare const WalletTransactionUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type WalletTransactionUpdateData = Static<typeof WalletTransactionUpdateDataSchema>;
export declare const WalletTransactionUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type WalletTransactionUpdate = Static<typeof WalletTransactionUpdateSchema>;
export declare const WalletTransactionUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type WalletTransactionUpdateMany = Static<typeof WalletTransactionUpdateManySchema>;
export declare const WalletTransactionDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type WalletTransactionDeleteMany = Static<typeof WalletTransactionDeleteManySchema>;
