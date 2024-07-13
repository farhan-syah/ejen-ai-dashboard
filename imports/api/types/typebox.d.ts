import { type TSchema } from "@sinclair/typebox";
export declare const Nullable: <T extends TSchema>(schema: T) => import("@sinclair/typebox").TUnion<[T, import("@sinclair/typebox").TNull]>;
