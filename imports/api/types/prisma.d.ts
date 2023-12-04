import type { Static } from "@sinclair/typebox";
export declare const PrismaQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    additionalFields: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
type PrismaQuery = Static<typeof PrismaQuerySchema>;
export declare function buildSelectQuery<T>(defaultSelectValue?: T, input?: PrismaQuery): T | undefined;
export declare const UserStatus: {
    Active: "Active";
    Inactive: "Inactive";
    Disabled: "Disabled";
    Blacklisted: "Blacklisted";
};
export {};
