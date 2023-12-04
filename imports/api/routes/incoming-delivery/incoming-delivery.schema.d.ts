import type { Static } from "@sinclair/typebox";
export declare const IncomingDeliveryQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type IncomingDeliveryQuery = Static<typeof IncomingDeliveryQuerySchema>;
export declare const IncomingDeliveryIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type IncomingDeliveryId = Static<typeof IncomingDeliveryIdSchema>;
export declare const IncomingDeliveryUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryUncheckedCreateInput = Static<typeof IncomingDeliveryUncheckedCreateInputSchema>;
export declare const IncomingDeliveryUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryUncheckedUpdateInput = Static<typeof IncomingDeliveryUncheckedUpdateInputSchema>;
export declare const IncomingDeliveryActionEnum: {
    search: string;
};
export type IncomingDeliveryActionEnum = (typeof IncomingDeliveryActionEnum)[keyof typeof IncomingDeliveryActionEnum];
export declare const IncomingDeliverySearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const IncomingDeliverySearchSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliverySearch = Static<typeof IncomingDeliverySearchSchema>;
export declare const IncomingDeliveryActionSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    where: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliveryAction = Static<typeof IncomingDeliveryActionSchema>;
export declare const IncomingDeliveryCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryCreateData = Static<typeof IncomingDeliveryCreateDataSchema>;
export declare const IncomingDeliveryCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliveryCreate = Static<typeof IncomingDeliveryCreateSchema>;
export declare const IncomingDeliveryUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryUpdateData = Static<typeof IncomingDeliveryUpdateDataSchema>;
export declare const IncomingDeliveryUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliveryUpdate = Static<typeof IncomingDeliveryUpdateSchema>;
export declare const IncomingDeliveryUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type IncomingDeliveryUpdateMany = Static<typeof IncomingDeliveryUpdateManySchema>;
export declare const IncomingDeliveryDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type IncomingDeliveryDeleteMany = Static<typeof IncomingDeliveryDeleteManySchema>;
