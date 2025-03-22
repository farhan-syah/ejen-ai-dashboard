import type { Static } from "@sinclair/typebox";
export declare const AgentTypeQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type AgentTypeQuery = Static<typeof AgentTypeQuerySchema>;
export declare const AgentTypeCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type AgentTypeCreateInput = Static<typeof AgentTypeCreateInputSchema>;
export declare const AgentTypeUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type AgentTypeUpdateInput = Static<typeof AgentTypeUpdateInputSchema>;
export declare const AgentTypeSearchWhereSchema: import("@sinclair/typebox").TObject<{
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
export type AgentTypeSearchWhere = Static<typeof AgentTypeSearchWhereSchema>;
export declare const AgentTypeSearchSchema: import("@sinclair/typebox").TObject<{
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
export type AgentTypeSearch = Static<typeof AgentTypeSearchSchema>;
export declare const AgentTypeCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type AgentTypeCreateData = Static<typeof AgentTypeCreateDataSchema>;
export declare const AgentTypeCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type AgentTypeCreate = Static<typeof AgentTypeCreateSchema>;
export declare const AgentTypeUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type AgentTypeUpdateData = Static<typeof AgentTypeUpdateDataSchema>;
export declare const AgentTypeUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type AgentTypeUpdate = Static<typeof AgentTypeUpdateSchema>;
export declare const AgentTypeUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type AgentTypeUpdateMany = Static<typeof AgentTypeUpdateManySchema>;
export declare const AgentTypeDeleteManySchema: import("@sinclair/typebox").TObject<{
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
export type AgentTypeDeleteMany = Static<typeof AgentTypeDeleteManySchema>;
