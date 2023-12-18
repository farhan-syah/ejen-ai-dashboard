import type { Static } from "@sinclair/typebox";
export declare const IncomingDeliveryItemQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type IncomingDeliveryItemQuery = Static<typeof IncomingDeliveryItemQuerySchema>;
export declare const IncomingDeliveryItemIdSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type IncomingDeliveryItemId = Static<typeof IncomingDeliveryItemIdSchema>;
export declare const IncomingDeliveryItemUncheckedCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryItemUncheckedCreateInput = Static<typeof IncomingDeliveryItemUncheckedCreateInputSchema>;
export declare const IncomingDeliveryItemUncheckedUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryItemUncheckedUpdateInput = Static<typeof IncomingDeliveryItemUncheckedUpdateInputSchema>;
export declare const IncomingDeliveryItemActionEnum: {
    search: string;
};
export type IncomingDeliveryItemActionEnum = (typeof IncomingDeliveryItemActionEnum)[keyof typeof IncomingDeliveryItemActionEnum];
export declare const IncomingDeliveryItemSearchWhereSchema: import("@sinclair/typebox").TObject<{}>;
export declare const IncomingDeliveryItemSearchSchema: import("@sinclair/typebox").TObject<{
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
export type IncomingDeliveryItemSearch = Static<typeof IncomingDeliveryItemSearchSchema>;
export declare const IncomingDeliveryItemActionSchema: import("@sinclair/typebox").TObject<{
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
export type IncomingDeliveryItemAction = Static<typeof IncomingDeliveryItemActionSchema>;
export declare const IncomingDeliveryItemCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryItemCreateData = Static<typeof IncomingDeliveryItemCreateDataSchema>;
export declare const IncomingDeliveryItemCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliveryItemCreate = Static<typeof IncomingDeliveryItemCreateSchema>;
export declare const IncomingDeliveryItemUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type IncomingDeliveryItemUpdateData = Static<typeof IncomingDeliveryItemUpdateDataSchema>;
export declare const IncomingDeliveryItemUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type IncomingDeliveryItemUpdate = Static<typeof IncomingDeliveryItemUpdateSchema>;
export declare const IncomingDeliveryItemUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type IncomingDeliveryItemUpdateMany = Static<typeof IncomingDeliveryItemUpdateManySchema>;
export declare const IncomingDeliveryItemDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
export type IncomingDeliveryItemDeleteMany = Static<typeof IncomingDeliveryItemDeleteManySchema>;
