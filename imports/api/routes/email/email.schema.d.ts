import { type Static } from "@sinclair/typebox";
export declare const EmailSchema: import("@sinclair/typebox").TObject<{
    to: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    recepientName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    logoUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type EmailInput = Static<typeof EmailSchema>;
export declare const EmailAction: {
    sendVerificationEmailToUser: string;
    sendEmailChangeConfirmationEmailToUser: string;
    sendEmailChangedToUser: string;
    sendResetPasswordEmailToUser: string;
    sendPasswordChangedEmailToUser: string;
};
export type EmailAction = (typeof EmailAction)[keyof typeof EmailAction];
export declare const SendEmailToUserSchema: import("@sinclair/typebox").TObject<{
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendEmailToUserSchema = Static<typeof SendEmailToUserSchema>;
export declare const SendVerificationEmailToUserSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendVerificationEmailToUserInput = Static<typeof SendVerificationEmailToUserSchema>;
export declare const SendEmailChangeConfirmationEmailToUserSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendEmailChangeConfirmationEmailToUserInput = Static<typeof SendVerificationEmailToUserSchema>;
export declare const SendEmailChangedToUserSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendEmailChangedToUserInput = Static<typeof SendEmailChangedToUserSchema>;
export declare const SendResetPasswordEmailToUserSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendResetPasswordEmailToUserInput = Static<typeof SendResetPasswordEmailToUserSchema>;
export declare const SendPasswordChangedEmailToUserSchema: import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>;
export type SendPasswordChangedEmailToUserInput = Static<typeof SendPasswordChangedEmailToUserSchema>;
export declare const EmailActionSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>, import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>, import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>, import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>, import("@sinclair/typebox").TObject<{
    action: import("@sinclair/typebox").TLiteral<string>;
    sendToUserId: import("@sinclair/typebox").TString;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TLiteral<"true">>;
}>]>;
export type EmailActionInput = Static<typeof SendVerificationEmailToUserSchema>;
