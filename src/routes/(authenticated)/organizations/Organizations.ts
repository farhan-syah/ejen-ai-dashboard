import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { Organization } from "@prisma/client";
import OrganizationActions from "./_/actions/OrganizationActions.svelte";

export type _Organization = Organization & {};

export const organizationColumns: TableColumn<Organization>[] = [
  {
    key: "id",
    label: "ID",
    visible: true,
    sortable: true
  },
  {
    key: "name",
    label: "Name",
    visible: true,
    sortable: true
  },
  {
    key: "description",
    label: "Description",
    visible: true,
    sortable: true
  },
  {
    key: "id",
    label: "Action",
    visible: true,
    content: OrganizationActions
  }
];

type CSVRow = {
  ID: string;
  name: string;
  description?: string | null;
};

const row: CSVRow = {
  ID: "",
  name: "",
  description: ""
};

const rowHeaders = Object.keys(row);

export function toOrganizationCSV(organizations: Organization[]) {
  const data: CSVRow[] = [];
  const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
  const fileName = "organizations " + date + ".csv";

  organizations.forEach((item) => {
    const csv: CSVRow = {
      ID: item.id,
      name: item.name,
      description: item.description
    };
    data.push(csv);
  });

  return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}