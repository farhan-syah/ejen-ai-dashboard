import type { Static } from "@sinclair/typebox";
export declare const CredentialTypeQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type CredentialTypeQuery = Static<typeof CredentialTypeQuerySchema>;
export declare const CredentialTypeCreateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type CredentialTypeCreateInput = Static<typeof CredentialTypeCreateInputSchema>;
export declare const CredentialTypeUpdateInputSchema: import("@sinclair/typebox").TObject<{}>;
export type CredentialTypeUpdateInput = Static<typeof CredentialTypeUpdateInputSchema>;
export declare const CredentialTypeSearchWhereSchema: import("@sinclair/typebox").TObject<{
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
export type CredentialTypeSearchWhere = Static<typeof CredentialTypeSearchWhereSchema>;
export declare const CredentialTypeSearchSchema: import("@sinclair/typebox").TObject<{
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
export type CredentialTypeSearch = Static<typeof CredentialTypeSearchSchema>;
export declare const CredentialTypeCreateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type CredentialTypeCreateData = Static<typeof CredentialTypeCreateDataSchema>;
export declare const CredentialTypeCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type CredentialTypeCreate = Static<typeof CredentialTypeCreateSchema>;
export declare const CredentialTypeUpdateDataSchema: import("@sinclair/typebox").TObject<{}>;
export type CredentialTypeUpdateData = Static<typeof CredentialTypeUpdateDataSchema>;
export declare const CredentialTypeUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{}>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type CredentialTypeUpdate = Static<typeof CredentialTypeUpdateSchema>;
export declare const CredentialTypeUpdateManySchema: import("@sinclair/typebox").TObject<{
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
export type CredentialTypeUpdateMany = Static<typeof CredentialTypeUpdateManySchema>;
export declare const CredentialTypeDeleteManySchema: import("@sinclair/typebox").TObject<{
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
export type CredentialTypeDeleteMany = Static<typeof CredentialTypeDeleteManySchema>;
