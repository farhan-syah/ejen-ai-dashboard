import * as fs from "fs";
import * as path from "path";
import { input } from "@inquirer/prompts";

// --- Helper Functions ---
function toKebabCase(str: string): string {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function toCamelCase(str: string): string {
	const s = str.charAt(0).toLowerCase() + str.slice(1);
	return s.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toTitleCase(str: string): string {
	let title = str.replace(/([A-Z])/g, " $1").trim();
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
  import { delay } from "$lib/utils";
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
import type { %%SINGULAR_PASCAL%% } from "@prisma/client";
import %%SINGULAR_PASCAL%%Actions from "./_/actions/%%SINGULAR_PASCAL%%Actions.svelte";

export type _%%SINGULAR_PASCAL%% = %%SINGULAR_PASCAL%% & {};

export const %%SINGULAR_CAMEL%%Columns: TableColumn<%%SINGULAR_PASCAL%%>[] = [
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
    content: %%SINGULAR_PASCAL%%Actions
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

export function to%%SINGULAR_PASCAL%%CSV(%%PLURAL_CAMEL%%: %%SINGULAR_PASCAL%%[]) {
  const data: CSVRow[] = [];
  const date: string = formatLocalDate(new Date(), "yy-MM-dd hh-mm aa");
  const fileName = "%%PLURAL_CAMEL%% " + date + ".csv";

  %%PLURAL_CAMEL%%.forEach((item) => {
    const csv: CSVRow = {
      ID: item.id,
      name: item.name,
      description: item.description
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

// --- [id] Route Templates ---

// Template for: src/routes/(authenticated)/{plural-kebab-case}/[id]/+page.svelte
const TPL_ID_ROOT_PAGE_SVELTE = `
<script lang="ts">
  import { Guard } from "$lib/components";
  import %%SINGULAR_PASCAL%% from "./%%SINGULAR_PASCAL%%.svelte";
</script>

<Guard
  requiredPermissions={[
    "%%SINGULAR_PASCAL%%.manage",
    "%%SINGULAR_PASCAL%%.view",
    "%%SINGULAR_PASCAL%%.update",
    "%%SINGULAR_PASCAL%%.delete"
  ]}
  redirect
  redirectPath="/%%PLURAL_KEBAB%%"
>
  <%%SINGULAR_PASCAL%% />
</Guard>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/[id]/{SingularName}.svelte
const TPL_ID_ENTITY_SVELTE = `
<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { getToastState } from "$applications/toast.state";
  import { PageTitle } from "$lib/components";
  import { %%SINGULAR_PASCAL%%Repository } from "$repositories";
  import { onMount } from "svelte";
  import { create%%SINGULAR_PASCAL%%Context } from "./%%SINGULAR_PASCAL%%";
  import %%SINGULAR_PASCAL%%Details from "./%%SINGULAR_PASCAL%%Details.svelte";

  const id = $page.params.id;
  const toast = getToastState();
  const context = create%%SINGULAR_PASCAL%%Context({
    fetch%%SINGULAR_PASCAL%%Callback: async (ctx) => {
      const result = await %%SINGULAR_PASCAL%%Repository.get(id).catch(async (e) => {
        await goto("/%%PLURAL_KEBAB%%"); // Redirect to plural list page
        toast.error({ message: "%%SINGULAR_TITLE%% not found" });
      });
      if (result) {
        ctx.%%SINGULAR_CAMEL%%.set(result);
      }
    }
  });

  const %%SINGULAR_CAMEL%% = context.%%SINGULAR_CAMEL%%;

  onMount(() => {
    context.fetch%%SINGULAR_PASCAL%%();
  });
</script>

{#if $%%SINGULAR_CAMEL%%}
  <PageTitle
    title="%%SINGULAR_TITLE%% - {$%%SINGULAR_CAMEL%%.name}"
    id={$%%SINGULAR_CAMEL%%.id}
    breadcrumbs={[
      { label: "%%PLURAL_TITLE%%", path: "/%%PLURAL_KEBAB%%" },
      { label: \`Edit \${$%%SINGULAR_CAMEL%%.name}\`, path: "/%%PLURAL_KEBAB%%/" + id, currentPage: true }
    ]}
  />
  <div class="p-5 border-slate-200 border-t-0 bg-white rounded-b-md shadow-md">
    <%%SINGULAR_PASCAL%%Details />
  </div>
{/if}
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/[id]/{SingularName}.ts
const TPL_ID_ENTITY_TS = `
import { UserState } from "$applications";
import { validatePermissions } from "$lib/components";
import type { %%SINGULAR_PASCAL%% } from "@prisma/client";
import { atom, computed, type WritableAtom } from "nanostores";
import { getContext, setContext } from "svelte";

export type _%%SINGULAR_PASCAL%% = %%SINGULAR_PASCAL%% & {};

export type %%SINGULAR_PASCAL%%ContextOption = {
  fetch%%SINGULAR_PASCAL%%Callback: (context: %%SINGULAR_PASCAL%%Context) => Promise<_%%SINGULAR_PASCAL%% | void>;
};

export class %%SINGULAR_PASCAL%%Context {
  %%SINGULAR_CAMEL%%: WritableAtom<_%%SINGULAR_PASCAL%% | undefined> = atom(undefined); // Ensure it can be undefined initially

  private readonly fetch%%SINGULAR_PASCAL%%Callback: (context: this) => Promise<_%%SINGULAR_PASCAL%% | void>;

  constructor(obj: %%SINGULAR_PASCAL%%ContextOption) {
    this.fetch%%SINGULAR_PASCAL%%Callback = obj.fetch%%SINGULAR_PASCAL%%Callback;
  }

  hasEditPermission = computed([UserState.permissions], (permissions) => {
    return validatePermissions(["%%SINGULAR_PASCAL%%.manage", "%%SINGULAR_PASCAL%%.update"], permissions);
  });

  async fetch%%SINGULAR_PASCAL%%() {
    this.fetch%%SINGULAR_PASCAL%%Callback(this);
  }
}

export function create%%SINGULAR_PASCAL%%Context(option: %%SINGULAR_PASCAL%%ContextOption) {
  return setContext("%%SINGULAR_CAMEL%%Context", new %%SINGULAR_PASCAL%%Context(option));
}

export function get%%SINGULAR_PASCAL%%Context() {
  return getContext<%%SINGULAR_PASCAL%%Context>("%%SINGULAR_CAMEL%%Context");
}
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/[id]/{SingularName}DeleteButton.svelte
const TPL_ID_DELETE_BUTTON_SVELTE = `
<script lang="ts">
  import { goto } from "$app/navigation";
  import { getAppState } from "$applications";
  import { getToastState } from "$applications/toast.state";
  import { Button, Dialog } from "$lib/components";
  import { %%SINGULAR_PASCAL%%Repository } from "$repositories";
  import { atom } from "nanostores";
  import type { _%%SINGULAR_PASCAL%% } from "./%%SINGULAR_PASCAL%%";

  export let %%SINGULAR_CAMEL%%: _%%SINGULAR_PASCAL%%; // Changed from 'product'
  const isDialogOpen = atom(false);
  const appState = getAppState();
  const toastState = getToastState();

  async function handleDelete%%SINGULAR_PASCAL%%() {
    try {
      isDialogOpen.set(false);
      appState.loading.set(true);
      await %%SINGULAR_PASCAL%%Repository.delete(%%SINGULAR_CAMEL%%.id);
      await goto("/%%PLURAL_KEBAB%%", { replaceState: true }); // Redirect to plural list
      toastState.success({ key: %%SINGULAR_CAMEL%%.id, message: "%%SINGULAR_TITLE%% has been deleted" });
    } catch (error) {
      appState.error.set(error);
    } finally {
      appState.loading.set(false);
    }
  }
</script>

<Button
  class="button-slate"
  onClick={() => {
    isDialogOpen.set(true);
  }}
>
  <div slot="label">
    <iconify-icon icon="bx:trash"></iconify-icon>
  </div>
</Button>

<Dialog isOpen={isDialogOpen}>
  <div class="w-96 flex flex-col gap-3">
    <div class="font-semibold">Delete Confirmation</div>
    <div>Are you sure you want to delete this %%SINGULAR_CAMEL%%? This action is irreversible.</div>
    <div class="flex gap-2">
      <Button label="Yes" onClick={handleDelete%%SINGULAR_PASCAL%%} />
      <Button
        label="No"
        class="button-red"
        onClick={() => {
          isDialogOpen.set(false);
        }}
      />
    </div>
  </div>
</Dialog>
`;

// Template for: src/routes/(authenticated)/{plural-kebab-case}/[id]/{SingularName}Details.svelte
const TPL_ID_DETAILS_SVELTE = `
<script lang="ts">
  import type { %%SINGULAR_PASCAL%%UpdateInput } from "$api/routes/%%SINGULAR_KEBAB%%/%%SINGULAR_KEBAB%%.schema";
  import { getAppState } from "$applications";
  import { getToastState } from "$applications/toast.state";
  import {
    Button,
    FormControl,
    FormDebugger,
    FormGroup,
    Guard,
    TextAreaField,
    TextField,
    Tooltip
  } from "$lib/components";
  import { %%SINGULAR_PASCAL%%Repository } from "$repositories";
  import { atom } from "nanostores";
  import { get%%SINGULAR_PASCAL%%Context } from "./%%SINGULAR_PASCAL%%";
  import %%SINGULAR_PASCAL%%DeleteButton from "./%%SINGULAR_PASCAL%%DeleteButton.svelte";

  const context = get%%SINGULAR_PASCAL%%Context();
  const %%SINGULAR_CAMEL%% = context.%%SINGULAR_CAMEL%%;
  const hasEditPermission = context.hasEditPermission;

  const appState = getAppState();
  const toastState = getToastState();
  const editable = atom(false);

  const idController = new FormControl({
    name: "id",
    value: $%%SINGULAR_CAMEL%%?.id // Add optional chaining as %%SINGULAR_CAMEL%% can be undefined initially
  });

  const nameController = new FormControl({
    name: "name",
    value: $%%SINGULAR_CAMEL%%?.name,
    required: true
  });

  const descriptionController = new FormControl({
    name: "description",
    value: $%%SINGULAR_CAMEL%%?.description
  });

  // Update form controllers when %%SINGULAR_CAMEL%% data is loaded
  $: if ($%%SINGULAR_CAMEL%%) {
    idController.value = $%%SINGULAR_CAMEL%%.id;
    nameController.value = $%%SINGULAR_CAMEL%%.name;
    descriptionController.value = $%%SINGULAR_CAMEL%%.description;
    form.resetValue(); // Reset form with new initial values
  }


  const form = new FormGroup<%%SINGULAR_PASCAL%%UpdateInput>([nameController, descriptionController]); // Added descriptionController
  const valid = form.valid;

  async function handleSaveForm() {
    if (!$%%SINGULAR_CAMEL%%) return; // Guard against undefined %%SINGULAR_CAMEL%%
    try {
      appState.loading.set(true);
      const data = form.value.get() as %%SINGULAR_PASCAL%%UpdateInput;
      await %%SINGULAR_PASCAL%%Repository.update($%%SINGULAR_CAMEL%%.id, {
        data: data
      });
      await context.fetch%%SINGULAR_PASCAL%%();
      editable.set(false);
      toastState.add({
        type: "success",
        message: "Changes have been saved"
      });
    } catch (error) {
      appState.error.set(error);
    } finally {
      appState.loading.set(false);
    }
  }
</script>

{#if $%%SINGULAR_CAMEL%%}
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-5 gap-4 gap-x-6">
      <div class="col-span-5 lg:col-span-2 grid gap-4 auto-rows-min">
        <TextField controller={idController} label="ID" class="col-span-2" disabled>
          <div slot="postfix" class="text-blue-500 h-full border-l bg-white rounded-r pointer">
            <Tooltip
              tooltip="Copy"
              class="h-full flex items-center p-2 "
              onClick={async () => {
                if (idController.value) {
                  await navigator.clipboard.writeText(idController.value);
                  toastState.add({
                    type: "info",
                    key: "id",
                    message: "Copied"
                  });
                }
              }}
            >
              <iconify-icon icon="bx:copy"></iconify-icon>
            </Tooltip>
          </div>
        </TextField>

        <TextField
          controller={nameController}
          label="Name"
          class="col-span-2"
          disabled={!$editable}
        />
        <TextAreaField
          controller={descriptionController}
          label="Description"
          class="col-span-2"
          textareaClass="h-32"
          resizable={false}
          disabled={!$editable}
        />
      </div>
    </div>
    <div class="col-span-2">
      {#if $hasEditPermission}
        <div class="flex gap-2">
          {#if $editable}
            <Button
              valid={$valid}
              label="Save Changes"
              class="button-green"
              onClick={handleSaveForm}
            />
            <Button
              label="Cancel"
              class="button-red"
              onClick={() => {
                editable.set(false);
                if ($%%SINGULAR_CAMEL%%) { // Ensure %%SINGULAR_CAMEL%% exists before resetting
                  nameController.value = $%%SINGULAR_CAMEL%%.name;
                  descriptionController.value = $%%SINGULAR_CAMEL%%.description;
                }
                form.resetValue();
              }}
            />
            <Guard requiredPermissions={["%%SINGULAR_PASCAL%%.manage", "%%SINGULAR_PASCAL%%.delete"]}>
              <%%SINGULAR_PASCAL%%DeleteButton %%SINGULAR_CAMEL%%={$%%SINGULAR_CAMEL%%} />
            </Guard>
          {:else}
            <Button
              label="Edit"
              class="button-cyan"
              onClick={() => {
                editable.set(true);
              }}
            />
          {/if}
        </div>
      {/if}
      <FormDebugger formGroup={form} />
    </div>
  </div>
{/if}
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
	const idPath = path.join(basePath, "[id]");

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
			processed = processed.replace(
				new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
				(replacements as any)[key]
			);
		}
		return processed.trim();
	}

	const filesToCreate = [
		// Root of the plural entity
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
		// _/actions
		{
			filePath: path.join(basePath, "_", "actions", `${singularNamePascal}Actions.svelte`),
			content: processTemplate(TPL_ACTIONS_SVELTE)
		},
		{
			filePath: path.join(basePath, "_", "actions", `${singularNamePascal}ActionView.svelte`),
			content: processTemplate(TPL_ACTION_VIEW_SVELTE)
		},
		// add route
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
		},
		// [id] route
		{
			filePath: path.join(idPath, `+page.svelte`),
			content: processTemplate(TPL_ID_ROOT_PAGE_SVELTE)
		},
		{
			filePath: path.join(idPath, `${singularNamePascal}.svelte`),
			content: processTemplate(TPL_ID_ENTITY_SVELTE)
		},
		{
			filePath: path.join(idPath, `${singularNamePascal}.ts`),
			content: processTemplate(TPL_ID_ENTITY_TS)
		},
		{
			filePath: path.join(idPath, `${singularNamePascal}DeleteButton.svelte`),
			content: processTemplate(TPL_ID_DELETE_BUTTON_SVELTE)
		},
		{
			filePath: path.join(idPath, `${singularNamePascal}Details.svelte`),
			content: processTemplate(TPL_ID_DETAILS_SVELTE)
		}
	];

	const directoriesToCreate = [
		basePath,
		idPath, // Ensure [id] directory is created
		path.join(basePath, "_"),
		path.join(basePath, "_", "actions"),
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
		// Ensure parent directory exists before writing file, especially for [id] files
		const parentDir = path.dirname(file.filePath);
		if (!fs.existsSync(parentDir)) {
			fs.mkdirSync(parentDir, { recursive: true });
			console.log(`Created directory (implicit): ${parentDir}`);
		}
		fs.writeFileSync(file.filePath, file.content);
		console.log(`Created file: ${file.filePath}`);
	}

	console.log("Route generation complete!");
	console.log(`\nNext steps:
1. Update Prisma schema for "${singularNamePascal}" if not already done.
2. Create/update "$api/routes/${singularKebab}/${singularKebab}.schema" (e.g., ${singularNamePascal}Search, ${singularNamePascal}CreateInput, ${singularNamePascal}UpdateInput types).
3. Implement "${singularNamePascal}Repository" in "$repositories" (ensure it has .get(), .update(), .delete() methods).
4. Review all generated files for any entity-specific adjustments (e.g., form fields, API calls, table columns, breadcrumbs, permissions).
5. Ensure all custom Svelte components used in templates (like Guard, specific form fields if any beyond TextField/TextAreaField) are correctly imported and available.`);
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
