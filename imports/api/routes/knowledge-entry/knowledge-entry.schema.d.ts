import type { Static } from "@sinclair/typebox";
export declare const KnowledgeEntryQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type KnowledgeEntryQuery = Static<typeof KnowledgeEntryQuerySchema>;
export declare const KnowledgeEntryCreateInputSchema: import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
    knowledgeBaseId: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        TEXT: "TEXT";
        FILE: "FILE";
    }>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
}>;
export type KnowledgeEntryCreateInput = Static<typeof KnowledgeEntryCreateInputSchema>;
export declare const KnowledgeEntryCreateFormInputSchema: import("elysia/dist/type-system/types").TForm<{
    title: import("@sinclair/typebox").TString;
    knowledgeBaseId: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        TEXT: "TEXT";
        FILE: "FILE";
    }>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
}>;
export type KnowledgeEntryCreateFormInput = Static<typeof KnowledgeEntryCreateFormInputSchema>;
export declare const KnowledgeEntryUpdateInputSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>, import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    knowledgeBaseId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TString]>>;
    originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        TEXT: "TEXT";
        FILE: "FILE";
    }>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
    fileStorageUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    contentSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    errorMessage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type KnowledgeEntryUpdateInput = Static<typeof KnowledgeEntryUpdateInputSchema>;
export declare const KnowledgeEntrySearchWhereSchema: import("@sinclair/typebox").TObject<{
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
export type KnowledgeEntrySearchWhere = Static<typeof KnowledgeEntrySearchWhereSchema>;
export declare const KnowledgeEntrySearchSchema: import("@sinclair/typebox").TObject<{
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
export type KnowledgeEntrySearch = Static<typeof KnowledgeEntrySearchSchema>;
export declare const KnowledgeEntryCreateDataSchema: import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
    knowledgeBaseId: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        TEXT: "TEXT";
        FILE: "FILE";
    }>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
}>;
export type KnowledgeEntryCreateData = Static<typeof KnowledgeEntryCreateDataSchema>;
export declare const KnowledgeEntryCreateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        knowledgeBaseId: import("@sinclair/typebox").TString;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            TEXT: "TEXT";
            FILE: "FILE";
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            PENDING: "PENDING";
            EXTRACTING: "EXTRACTING";
            CHUNKING: "CHUNKING";
            EMBEDDING: "EMBEDDING";
            READY: "READY";
            FAILED: "FAILED";
        }>>;
        metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type KnowledgeEntryCreate = Static<typeof KnowledgeEntryCreateSchema>;
export declare const KnowledgeEntryUpdateDataSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>, import("@sinclair/typebox").TEnum<{
        PENDING: "PENDING";
        EXTRACTING: "EXTRACTING";
        CHUNKING: "CHUNKING";
        EMBEDDING: "EMBEDDING";
        READY: "READY";
        FAILED: "FAILED";
    }>]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    knowledgeBaseId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TString]>>;
    originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        TEXT: "TEXT";
        FILE: "FILE";
    }>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
    fileStorageUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    originalFileSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    contentSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    errorMessage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type KnowledgeEntryUpdateData = Static<typeof KnowledgeEntryUpdateDataSchema>;
export declare const KnowledgeEntryUpdateSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TEnum<{
            PENDING: "PENDING";
            EXTRACTING: "EXTRACTING";
            CHUNKING: "CHUNKING";
            EMBEDDING: "EMBEDDING";
            READY: "READY";
            FAILED: "FAILED";
        }>, import("@sinclair/typebox").TEnum<{
            PENDING: "PENDING";
            EXTRACTING: "EXTRACTING";
            CHUNKING: "CHUNKING";
            EMBEDDING: "EMBEDDING";
            READY: "READY";
            FAILED: "FAILED";
        }>]>>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        knowledgeBaseId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TString]>>;
        originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            TEXT: "TEXT";
            FILE: "FILE";
        }>>;
        metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
        fileStorageUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        contentSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        errorMessage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export type KnowledgeEntryUpdate = Static<typeof KnowledgeEntryUpdateSchema>;
export declare const KnowledgeEntryUpdateManySchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TEnum<{
            PENDING: "PENDING";
            EXTRACTING: "EXTRACTING";
            CHUNKING: "CHUNKING";
            EMBEDDING: "EMBEDDING";
            READY: "READY";
            FAILED: "FAILED";
        }>, import("@sinclair/typebox").TEnum<{
            PENDING: "PENDING";
            EXTRACTING: "EXTRACTING";
            CHUNKING: "CHUNKING";
            EMBEDDING: "EMBEDDING";
            READY: "READY";
            FAILED: "FAILED";
        }>]>>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        knowledgeBaseId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TString]>>;
        originalContentType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            TEXT: "TEXT";
            FILE: "FILE";
        }>>;
        metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<File>>;
        fileStorageUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        originalFileSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        contentSize: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        errorMessage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
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
export type KnowledgeEntryUpdateMany = Static<typeof KnowledgeEntryUpdateManySchema>;
export declare const KnowledgeEntryDeleteManySchema: import("@sinclair/typebox").TObject<{
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
export type KnowledgeEntryDeleteMany = Static<typeof KnowledgeEntryDeleteManySchema>;
