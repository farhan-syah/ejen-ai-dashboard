<script lang="ts">
  import type { OrganizationSearch } from "$api/routes/organization/organization.schema";
  import { goto } from "$app/navigation";
  import { Button, PageTitle, Table, createTableContext } from "$lib/components";
  import Card from "$lib/components/card/Card.svelte";
  import { delay } from "$lib/utils";
  import { OrganizationRepository } from "$repositories";
  import { organizationColumns, toOrganizationCSV, type _Organization } from "./Organizations";

  const tableContext = createTableContext<_Organization, OrganizationSearch>({
    filter: { where: {}, query: { limit: 20 } },
    columns: organizationColumns,
    limit: 20,
    selectable: true,
    selectByKey: "id",
    onSearch: async (f) => {
      if (f) return OrganizationRepository.search(f);
      return [];
    },
    onCount: async (f) => {
      if (f) return OrganizationRepository.count(f);
      return 0;
    },
    onGetSelected: async (selected) => {
      return OrganizationRepository.search({
        where: { id: { in: selected as string[] } }
      });
    },
    toCSV: toOrganizationCSV,
    bulkActions: {
      "Bulk Action A": async (selected) => {
        await delay(3000);
      },
      "Bulk Action B": async () => {
        await delay(3000);
        throw "Bulk Action Error Example";
      }
    }
  });
</script>

<PageTitle
  title="Organizations"
  breadcrumbs={[{ label: "Organizations", path: "/organizations", currentPage: true }]}
>
  <div slot="action" class="mt-0.5">
    <Button
      link="/organizations/add"
      label="Add Organization"
      onClick={() => {
        goto("/organizations/add");
      }}
      class="button-xs"
    />
  </div>
</PageTitle>

<Card>
  <Table context={tableContext} />
</Card>