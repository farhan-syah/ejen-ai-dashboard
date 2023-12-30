import type { Static } from "@sinclair/typebox";
export declare const ProductInventoryQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type ProductInventoryQuery = Static<typeof ProductInventoryQuerySchema>;
export declare const ProductInventoryCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductInventoryCreateInput = Static<typeof ProductInventoryCreateInputSchema>;
export declare const ProductInventoryUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductInventoryUpdateInput = Static<typeof ProductInventoryUpdateInputSchema>;
export declare const ProductInventorySearchWhereSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
        not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
    }>, import("@sinclair/typebox").TString]>>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
    }>, import("@sinclair/typebox").TString]>>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
        not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
    }>, import("@sinclair/typebox").TString]>>>;
}>;
export type ProductInventorySearchWhere = Static<typeof ProductInventorySearchWhereSchema>;
export declare const ProductInventorySearchSchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductInventorySearch = Static<typeof ProductInventorySearchSchema>;
export declare const ProductInventoryCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductInventoryCreateData = Static<typeof ProductInventoryCreateDataSchema>;
export declare const ProductInventoryCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductInventoryCreate = Static<typeof ProductInventoryCreateSchema>;
export declare const ProductInventoryUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type ProductInventoryUpdateData = Static<typeof ProductInventoryUpdateDataSchema>;
export declare const ProductInventoryUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductInventoryUpdate = Static<typeof ProductInventoryUpdateSchema>;
export declare const ProductInventoryUpdateManySchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>, import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>]>;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type ProductInventoryUpdateMany = Static<typeof ProductInventoryUpdateManySchema>;
export declare const ProductInventoryDeleteManySchema: import("@sinclair/typebox").TObject<{
    where: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>, import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            contains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            startsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            endsWith: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"insensitive">]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>]>;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
        updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            equals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            notIn: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TDate>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TString]>>;
            not: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TThis>;
        }>, import("@sinclair/typebox").TString]>>>;
    }>;
}>;
export type ProductInventoryDeleteMany = Static<typeof ProductInventoryDeleteManySchema>;
