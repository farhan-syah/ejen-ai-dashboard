import * as fs from "fs";
import * as path from "path";
import { input } from "@inquirer/prompts"; // Added for interactive prompts

// --- Helper Functions ---
function toKebabCase(str: string): string {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function toCamelCase(str: string): string {
	const s = str.charAt(0).toLowerCase() + str.slice(1);
	return s.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toTitleCase(str: string): string {
	// Add space before capital letters, then capitalize first letter of each word if needed
	let title = str.replace(/([A-Z])/g, " $1").trim();
	// Ensure first letter is capitalized even if input was camelCase initially
	return title.charAt(0).toUpperCase() + title.slice(1);
}

// --- File Templates ---

// Template for: src/routes/(authenticated)/{plural-kebab-case}/+page.svelte
const TPL_ROOT_PAGE_SVELTE = `
<script lang="ts">
  import %%PLURAL_PASCAL%% from "./%%PLURAL_PASCAL%%.svelte";
</script>

<%%PLURAL_PASCAL%%></%%PLURAL_PASCAL%%>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/{PluralName}.svelte
const TPL_ENTITY_PLURAL_SVELTE = `
<script lang="ts">
  import type { %%SINGULAR_PASCAL%%Search } from "$api/routes/%%SINGULAR_KEBAB%%/%%SINGULAR_KEBAB%%.schema";
  import { goto } from "$app/navigation";
  import { Button, PageTitle, Table, createTableContext } from "$lib/components";
  import Card from "$lib/components/card/Card.svelte";
  import { delay } from "$lib/utils"; // Assuming delay is a general utility
  import { %%SINGULAR_PASCAL%%Repository } from "$repositories";
  import { %%SINGULAR_CAMEL%%Columns, to%%SINGULAR_PASCAL%%CSV, type _%%SINGULAR_PASCAL%% } from "./%%PLURAL_PASCAL%%";

  const tableContext = createTableContext<_%%SINGULAR_PASCAL%%, %%SINGULAR_PASCAL%%Search>({
    filter: { where: {}, query: { limit: 20 } },
    columns: %%SINGULAR_CAMEL%%Columns,
    limit: 20,
    selectable: true,
    selectByKey: "id",
    onSearch: async (f) => {
      if (f) return %%SINGULAR_PASCAL%%Repository.search(f);
      return [];
    },
    onCount: async (f) => {
      if (f) return %%SINGULAR_PASCAL%%Repository.count(f);
      return 0;
    },
    onGetSelected: async (selected) => {
      return %%SINGULAR_PASCAL%%Repository.search({
        where: { id: { in: selected as string[] } }
      });
    },
    toCSV: to%%SINGULAR_PASCAL%%CSV,
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
  title="%%PLURAL_TITLE%%"
  breadcrumbs={[{ label: "%%PLURAL_TITLE%%", path: "/%%PLURAL_KEBAB%%", currentPage: true }]}
>
  <div slot="action" class="mt-0.5">
    <Button
      link="/%%PLURAL_KEBAB%%/add"
      label="Add %%SINGULAR_TITLE%%"
      onClick={() => {
        goto("/%%PLURAL_KEBAB%%/add");
      }}
      class="button-xs"
    />
  </div>
</PageTitle>

<Card>
  <Table context={tableContext} />
</Card>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/{PluralName}.ts
const TPL_ENTITY_PLURAL_TS = `
import type { TableColumn } from "$lib/components";
import { formatLocalDate } from "$lib/utils/date";
import { CSV } from "$types";
import type { %%SINGULAR_PASCAL%% } from "@prisma/client"; // Assuming Prisma client type
import %%SINGULAR_PASCAL%%Actions from "./_/actions/%%SINGULAR_PASCAL%%Actions.svelte";

export type _%%SINGULAR_PASCAL%% = %%SINGULAR_PASCAL%% & {}; // Extend if needed

export const %%SINGULAR_CAMEL%%Columns: TableColumn<%%SINGULAR_PASCAL%%>[] = [
  {
    key: "id",
    label: "ID",
    visible: true,
    sortable: true
  },
  {
    key: "name", // Assuming a 'name' field
    label: "Name",
    visible: true,
    sortable: true
  },
  {
    key: "description", // Assuming a 'description' field
    label: "Description",
    visible: true,
    sortable: true
  },
  {
    key: "id", // Or another key for actions
    label: "Action",
    visible: true,
    content: %%SINGULAR_PASCAL%%Actions
  }
];

type CSVRow = {
  ID: string;
  name: string;
  description?: string | null;
  // Add other fields from %%SINGULAR_PASCAL%% that you want in the CSV
};

const row: CSVRow = {
  ID: "",
  name: "",
  description: ""
};

const rowHeaders = Object.keys(row);

export function to%%SINGULAR_PASCAL%%CSV(%%PLURAL_CAMEL%%: %%SINGULAR_PASCAL%%[]) {
  const data: CSVRow[] = [];
  const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
  const fileName = "%%PLURAL_CAMEL%% " + date + ".csv";

  %%PLURAL_CAMEL%%.forEach((item) => {
    const csv: CSVRow = {
      ID: item.id,
      name: item.name, // Assuming 'name' field
      description: item.description // Assuming 'description' field
    };
    data.push(csv);
  });

  return new CSV<CSVRow>({ columnKeys: rowHeaders, data, fileName });
}
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/_/actions/{SingularName}Actions.svelte
const TPL_ACTIONS_SVELTE = `
<script lang="ts">
  import type { _%%SINGULAR_PASCAL%% } from "../../%%PLURAL_PASCAL%%";
  import %%SINGULAR_PASCAL%%ActionView from "./%%SINGULAR_PASCAL%%ActionView.svelte";
  export let data: _%%SINGULAR_PASCAL%%;
</script>

<div class="flex flex-wrap gap-1">
  <%%SINGULAR_PASCAL%%ActionView %%SINGULAR_CAMEL%%={data} />
</div>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/_/actions/{SingularName}ActionView.svelte
const TPL_ACTION_VIEW_SVELTE = `
<script lang="ts">
  import { goto } from "$app/navigation";
  import { IconWithTooltip } from "$lib/components";
  import type { _%%SINGULAR_PASCAL%% } from "../../%%PLURAL_PASCAL%%";
  export let %%SINGULAR_CAMEL%%: _%%SINGULAR_PASCAL%%;
</script>

<IconWithTooltip
  icon="material-symbols:docs-outline"
  class="text-blue-500 text-xl font-bold pointer rounded-sm w-min p-0.25"
  tooltip="View Details"
  link={\`/%%PLURAL_KEBAB%%/\${%%SINGULAR_CAMEL%%.id}\`}
  onClick={() => {
    goto(\`/%%PLURAL_KEBAB%%/\${%%SINGULAR_CAMEL%%.id}\`);
  }}
/>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/add/+page.svelte
const TPL_ADD_ROOT_PAGE_SVELTE = `
<script lang="ts">
  import %%SINGULAR_PASCAL%%Add from "./%%SINGULAR_PASCAL%%Add.svelte";
</script>

<%%SINGULAR_PASCAL%%Add />
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/add/{SingularName}Add.svelte
const TPL_ADD_ENTITY_SVELTE = `
<script lang="ts">
  import { PageTitle } from "$lib/components";
  import Card from "$lib/components/card/Card.svelte";
  import %%SINGULAR_PASCAL%%AddForm from "./%%SINGULAR_PASCAL%%AddForm.svelte";
</script>

<PageTitle
  title="Add %%SINGULAR_TITLE%%"
  breadcrumbs={[
    { label: "%%PLURAL_TITLE%%", path: "/%%PLURAL_KEBAB%%" },
    { label: "Add", path: "/%%PLURAL_KEBAB%%/add", currentPage: true }
  ]}
/>

<Card>
  <%%SINGULAR_PASCAL%%AddForm />
</Card>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/add/{SingularName}AddForm.svelte
const TPL_ADD_FORM_SVELTE = `
<script lang="ts">
  import type { %%SINGULAR_PASCAL%%CreateInput } from "$api/routes/%%SINGULAR_KEBAB%%/%%SINGULAR_KEBAB%%.schema";
  import { goto } from "$app/navigation";
  import { getAppState } from "$applications";
  import { getToastState } from "$applications/toast.state";
  import {
    Button,
    FormControl,
    FormDebugger,
    FormGroup,
    TextField,
    TextAreaField
  } from "$lib/components";
  import { %%SINGULAR_PASCAL%%Repository } from "$repositories";
  import { faker } from "@faker-js/faker";

  const appState = getAppState();
  const toastState = getToastState();

  const nameController = new FormControl<string>({
    name: "name",
    required: true,
    faker: faker.lorem.words
  });

  const descriptionController = new FormControl<string | null>({
    name: "description",
    required: false,
    faker: faker.lorem.sentence
  });

  const form = new FormGroup<%%SINGULAR_PASCAL%%CreateInput>([
    nameController,
    descriptionController
  ]);
  const valid = form.valid;

  async function handleSaveForm() {
    try {
      appState.loading.set(true);
      const data = form.value.get();

      const createData: %%SINGULAR_PASCAL%%CreateInput = {
        name: data.name!,
        description: data.description
      };

      const %%SINGULAR_CAMEL%% = await %%SINGULAR_PASCAL%%Repository.create({
        data: createData
      });

      await goto(\`/%%PLURAL_KEBAB%%/\${%%SINGULAR_CAMEL%%.id}\`);
      toastState.success({
        message: "%%SINGULAR_TITLE%% has been created successfully"
      });
    } catch (error) {
      appState.error.set(error);
      toastState.error({
        message: \`Failed to create %%SINGULAR_TITLE%%\`
      });
    } finally {
      appState.loading.set(false);
    }
  }
</script>

<div class="grid grid-cols-6 gap-4">
  <TextField controller={nameController} label="Name" class="col-span-3" />
  <TextAreaField
    controller={descriptionController}
    label="Description"
    class="col-span-6"
    textareaClass="h-32"
    resizable={false}
  />

  <div class="flex gap-2 col-start-1 mt-4">
    <Button valid={$valid} onClick={handleSaveForm} label="Create %%SINGULAR_TITLE%%" />
    <Button label="Cancel" type="button" variant="secondary" onClick={() => history.back()} />
  </div>
</div>
<FormDebugger formGroup={form} class="mt-4" />
`;

// --- Core Generation Function ---
function generateRoute(singularNamePascal: string, pluralNamePascal: string) {
	const singularCamel = toCamelCase(singularNamePascal);
	const pluralCamel = toCamelCase(pluralNamePascal);
	const singularKebab = toKebabCase(singularNamePascal);
	const pluralKebab = toKebabCase(pluralNamePascal);
	const singularTitle = toTitleCase(singularNamePascal);
	const pluralTitle = toTitleCase(pluralNamePascal);

	const basePath = path.join("src", "routes", "(authenticated)", pluralKebab);

	const replacements = {
		"%%SINGULAR_PASCAL%%": singularNamePascal,
		"%%PLURAL_PASCAL%%": pluralNamePascal,
		"%%SINGULAR_CAMEL%%": singularCamel,
		"%%PLURAL_CAMEL%%": pluralCamel,
		"%%SINGULAR_KEBAB%%": singularKebab,
		"%%PLURAL_KEBAB%%": pluralKebab,
		"%%SINGULAR_TITLE%%": singularTitle,
		"%%PLURAL_TITLE%%": pluralTitle
	};

	function processTemplate(template: string): string {
		let processed = template;
		for (const key in replacements) {
			processed = processed.replace(new RegExp(key, "g"), (replacements as any)[key]);
		}
		return processed.trim();
	}

	const filesToCreate = [
		{
			filePath: path.join(basePath, "+page.svelte"),
			content: processTemplate(TPL_ROOT_PAGE_SVELTE)
		},
		{
			filePath: path.join(basePath, `${pluralNamePascal}.svelte`),
			content: processTemplate(TPL_ENTITY_PLURAL_SVELTE)
		},
		{
			filePath: path.join(basePath, `${pluralNamePascal}.ts`),
			content: processTemplate(TPL_ENTITY_PLURAL_TS)
		},
		{
			filePath: path.join(basePath, "_", "actions", `${singularNamePascal}Actions.svelte`),
			content: processTemplate(TPL_ACTIONS_SVELTE)
		},
		{
			filePath: path.join(basePath, "_", "actions", `${singularNamePascal}ActionView.svelte`),
			content: processTemplate(TPL_ACTION_VIEW_SVELTE)
		},
		{
			filePath: path.join(basePath, "add", `+page.svelte`),
			content: processTemplate(TPL_ADD_ROOT_PAGE_SVELTE)
		},
		{
			filePath: path.join(basePath, "add", `${singularNamePascal}Add.svelte`),
			content: processTemplate(TPL_ADD_ENTITY_SVELTE)
		},
		{
			filePath: path.join(basePath, "add", `${singularNamePascal}AddForm.svelte`),
			content: processTemplate(TPL_ADD_FORM_SVELTE)
		}
	];

	const directoriesToCreate = [
		basePath,
		path.join(basePath, "[id]"),
		path.join(basePath, "_"),
		path.join(basePath, "_", "actions"),
		// path.join(basePath, '_', 'columns'), // Removed as per icon column absence
		path.join(basePath, "add")
	];

	console.log(`Generating route for ${singularNamePascal} / ${pluralNamePascal}...`);

	for (const dir of directoriesToCreate) {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
			console.log(`Created directory: ${dir}`);
		}
	}

	for (const file of filesToCreate) {
		fs.writeFileSync(file.filePath, file.content);
		console.log(`Created file: ${file.filePath}`);
	}

	console.log("Route generation complete!");
	console.log(`\nNext steps:
1. Update Prisma schema for "${singularNamePascal}" if not already done.
2. Create/update "$api/routes/${singularKebab}/${singularKebab}.schema" (e.g., ${singularNamePascal}Search, ${singularNamePascal}CreateInput types).
3. Implement "${singularNamePascal}Repository" in "$repositories".
4. Implement the '[id]' route details (view/edit page, form) under "src/routes/(authenticated)/${pluralKebab}/[id]/".
5. Review all generated files for any entity-specific adjustments (e.g., form fields, API calls, table columns).`);
}

// --- Main function to run prompts ---
async function main() {
	const singularNamePascal = await input({
		message: "Enter the singular PascalCase name of the entity (e.g., KnowledgeBase, Product):",
		validate: (value) => {
			if (!value) return "Name cannot be empty.";
			if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
				return "Name must be in PascalCase (e.g., MyEntity).";
			}
			return true;
		}
	});

	const pluralNamePascal = await input({
		message: `Enter the plural PascalCase name for "${singularNamePascal}" (e.g., KnowledgeBases, Products):`,
		validate: (value) => {
			if (!value) return "Name cannot be empty.";
			if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
				return "Name must be in PascalCase (e.g., MyEntities).";
			}
			return true;
		}
	});

	generateRoute(singularNamePascal, pluralNamePascal);
}

main().catch(console.error);
