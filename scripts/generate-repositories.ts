import * as fs from "fs";
import * as path from "path";

const overrideFiles = true;

const generateRepositoryFile = (modelName: string, kebabCaseName: string) => {
	const template = `import type {
  ${modelName}Create,
  ${modelName}DeleteMany,
  ${modelName}Search,
  ${modelName}Update,
  ${modelName}UpdateMany
} from "$api/routes/${kebabCaseName}/${kebabCaseName}.schema";
import type * as Prisma from "$api/types/prisma-client";
import { PUBLIC_API_BASE_PATH } from "$env/static/public";
import { HttpService } from "$services/http.service";

class _${modelName}Repository {
  path = PUBLIC_API_BASE_PATH + "/${kebabCaseName}";

  async create(input: ${modelName}Create) {
    const url = this.path;
    return await HttpService.post<Prisma.${modelName}>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async update(id: string, input: ${modelName}Update) {
    const url = \`\${this.path}/\${id}\`;
    return await HttpService.patch<Prisma.${modelName}>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async get(id: string) {
    const url = \`\${this.path}/\${id}\`;
    return await HttpService.get<Prisma.${modelName}>(url, {
      auth: "accessToken",
    });
  }

  async updateMany(input: ${modelName}UpdateMany) {
    const url = this.path;
    return await HttpService.patch<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async delete(id: string) {
    const url = \`\${this.path}/\${id}\`;
    return await HttpService.delete<Prisma.${modelName}>(url, {
      auth: "accessToken",
    });
  }

  async deleteMany(input: ${modelName}DeleteMany) {
    const url = this.path;
    return await HttpService.delete<Prisma.Prisma.BatchPayload>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }

  async search(input: ${modelName}Search) {
    const url = \`\${this.path}/search\`;
    return await HttpService.post<Prisma.${modelName}[]>(url, {
      body: JSON.stringify(input),
      auth: "accessToken",
    });
  }
}

export const ${modelName}Repository = new _${modelName}Repository();
`;

	const filePath = path.join("./src/repositories", `${kebabCaseName}.repository.ts`);

	// Create the file if it doesn't exist or if override is true
	if (!fs.existsSync(filePath) || overrideFiles) {
		fs.writeFileSync(filePath, template);
		console.log(`Generated repository file for model: ${modelName}`);
	} else {
		console.log(`Skipped generation for model: ${modelName}`);
	}
};

const updateIndexFile = (modelNames: string[]) => {
	const imports = modelNames
		.map((modelName) => {
			const kebabCaseName = modelName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
			return `import { ${modelName}Repository } from "./${kebabCaseName}.repository";`;
		})
		.join("\n");

	const exports = modelNames.map((modelName) => `${modelName}Repository`).join(",\n  ");

	const template = `${imports}

export {
  ${exports}
};
`;

	const filePath = path.join("./src/repositories/index.ts");

	// Update the file if it doesn't exist or if override is true
	if (!fs.existsSync(filePath) || overrideFiles) {
		fs.writeFileSync(filePath, template);
		console.log(`Updated index file`);
	} else {
		console.log(`Skipped index file update`);
	}
};

// Example usage
const modelNames = fs
	.readFileSync("./scripts/sorted-model-list.txt", "utf-8")
	.split("\n")
	.map((modelName) => modelName.trim())
	.filter((modelName) => modelName.length > 0);

modelNames.forEach((modelName) => {
	const kebabCaseName = modelName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
	generateRepositoryFile(modelName, kebabCaseName);
});

updateIndexFile(modelNames);
