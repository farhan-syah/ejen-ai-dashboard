import type { Static } from "@sinclair/typebox";
export declare const BusinessSettingsSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type BusinessSettings = Static<typeof BusinessSettingsSchema>;
export declare const PublicSettingsSchema: import("@sinclair/typebox").TObject<{
    adminAccess: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
        Staff: string;
        Guest: string;
    }>>>;
}>;
export type PublicSettings = Static<typeof PublicSettingsSchema>;
