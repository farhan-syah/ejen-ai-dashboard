import type { Static, TSchema } from "@sinclair/typebox";
export declare const PrismaQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
type PrismaQuery = Static<typeof PrismaQuerySchema>;
export declare function buildSelectQuery<T>(defaultSelectValue?: T, input?: PrismaQuery): T | undefined;
export declare const PrismaStringFilterSchema: import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
    not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
}>, import("@sinclair/typebox").TString]>>;
export type PrismaStringFilter = Static<typeof PrismaStringFilterSchema>;
export declare const PrismaDateTimeFilterSchema: import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
    in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
    lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
    gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
    gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
    not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
}>, import("@sinclair/typebox").TString]>>;
export type PrismaDateTimeFilter = Static<typeof PrismaDateTimeFilterSchema>;
export declare const PrismaListFilter: <T extends TSchema>(schema: T) => import("@sinclair/typebox").TObject<{
    every: T extends import("@sinclair/typebox").TOptional<infer S extends TSchema> ? import("@sinclair/typebox").TOptional<S> : import("@sinclair/typebox").Ensure<import("@sinclair/typebox").TOptional<T>>;
    some: T extends import("@sinclair/typebox").TOptional<infer S extends TSchema> ? import("@sinclair/typebox").TOptional<S> : import("@sinclair/typebox").Ensure<import("@sinclair/typebox").TOptional<T>>;
    none: T extends import("@sinclair/typebox").TOptional<infer S extends TSchema> ? import("@sinclair/typebox").TOptional<S> : import("@sinclair/typebox").Ensure<import("@sinclair/typebox").TOptional<T>>;
}>;
export {};
