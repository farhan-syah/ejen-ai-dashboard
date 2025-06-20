import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { Organization } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _Organization = Organization & {};

export type OrganizationContextOption = {
  fetchOrganizationCallback: (context: OrganizationContext) => Promise<_Organization | void>;
};

export class OrganizationContext {
  organization: WritableAtom<_Organization | undefined> = atom(undefined); // Ensure it can be undefined initially

  private readonly fetchOrganizationCallback: (context: this) => Promise<_Organization | void>;

  constructor(obj: OrganizationContextOption) {
    this.fetchOrganizationCallback = obj.fetchOrganizationCallback;
  }

  hasEditPermission = computed([UserState.permissions], (permissions) => {
    return validatePermissions(["Organization.manage", "Organization.update"], permissions);
  });

  async fetchOrganization() {
    this.fetchOrganizationCallback(this);
  }
}

export function createOrganizationContext(option: OrganizationContextOption) {
  return setContext("organizationContext", new OrganizationContext(option));
}

export function getOrganizationContext() {
  return getContext<OrganizationContext>("organizationContext");
}