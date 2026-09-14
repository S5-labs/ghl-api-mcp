#!/usr/bin/env node

import { execFile as execFileCallback } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFile = promisify(execFileCallback);
const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.resolve(path.dirname(__filename), "..");
const DEFAULT_REPOSITORY = "GoHighLevel/highlevel-api-docs";
const DEFAULT_REF = "main";
const DEFAULT_OUTPUT_DIR = path.join(ROOT_DIR, "docs", "generated");
const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function relativePosix(root, filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function escapeTableCell(value) {
  if (value === undefined || value === null || value === "") return "—";
  const rendered = typeof value === "string" ? value : JSON.stringify(value);
  return rendered
    .replace(/\r?\n/g, "<br>")
    .replace(/\|/g, "\\|")
    .trim() || "—";
}

function schemaLabel(schema = {}) {
  if (!schema || typeof schema !== "object") return "—";
  if (schema.$ref) return schema.$ref.split("/").at(-1);
  if (schema.type === "array") return `array<${schemaLabel(schema.items || {})}>`;
  if (schema.oneOf) return schema.oneOf.map(schemaLabel).join(" or ");
  if (schema.anyOf) return schema.anyOf.map(schemaLabel).join(" or ");
  if (schema.allOf) return schema.allOf.map(schemaLabel).join(" + ");
  return [schema.type || "object", schema.format].filter(Boolean).join(" (") + (schema.format ? ")" : "");
}

function operationSecurity(operation, specification) {
  const security = operation.security ?? specification.security ?? [];
  const schemes = [];
  const scopes = [];

  for (const requirement of security) {
    for (const [scheme, values] of Object.entries(requirement || {})) {
      if (!schemes.includes(scheme)) schemes.push(scheme);
      for (const scope of values || []) {
        if (!scopes.includes(scope)) scopes.push(scope);
      }
    }
  }

  return { schemes, scopes };
}

function renderParameters(parameters = []) {
  if (parameters.length === 0) return [];
  const lines = [
    "**Parameters**",
    "",
    "| Name | In | Type | Required | Description |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const parameter of parameters) {
    const schema = parameter.schema || {};
    lines.push(
      `| \`${escapeTableCell(parameter.name)}\` | ${escapeTableCell(parameter.in)} | \`${escapeTableCell(schemaLabel(schema))}\` | ${parameter.required ? "Yes" : "No"} | ${escapeTableCell(parameter.description)} |`,
    );
  }
  return lines;
}

function renderContentSchemas(content = {}) {
  const rows = Object.entries(content).map(([contentType, details]) => {
    const schema = details?.schema || {};
    return `| ${escapeTableCell(contentType)} | \`${escapeTableCell(schemaLabel(schema))}\` |`;
  });
  if (rows.length === 0) return [];
  return ["| Content type | Schema |", "| --- | --- |", ...rows];
}

function renderRequestBody(requestBody) {
  if (!requestBody) return [];
  const lines = ["**Request Body**", ""];
  if (requestBody.description) lines.push(requestBody.description.trim(), "");
  lines.push(...renderContentSchemas(requestBody.content));
  return lines;
}

function renderResponses(responses = {}) {
  const entries = Object.entries(responses);
  if (entries.length === 0) return [];
  const lines = [
    "**Responses**",
    "",
    "| Status | Description | Schema |",
    "| --- | --- | --- |",
  ];

  for (const [status, response] of entries) {
    const schemas = Object.values(response?.content || {}).map((entry) => schemaLabel(entry?.schema));
    lines.push(
      `| \`${escapeTableCell(status)}\` | ${escapeTableCell(response?.description)} | \`${escapeTableCell([...new Set(schemas)].join(", "))}\` |`,
    );
  }
  return lines;
}

function renderSchemas(schemas = {}) {
  const entries = Object.entries(schemas);
  if (entries.length === 0) return [];
  const lines = ["## Schemas", ""];

  for (const [name, schema] of entries) {
    lines.push(`### ${name}`, "");
    if (schema.description) lines.push(schema.description.trim(), "");
    const properties = Object.entries(schema.properties || {});
    if (properties.length === 0) {
      lines.push(`Type: \`${schemaLabel(schema)}\``, "");
      continue;
    }
    const required = new Set(schema.required || []);
    lines.push(
      "| Field | Type | Required | Description |",
      "| --- | --- | --- | --- |",
    );
    for (const [field, definition] of properties) {
      lines.push(
        `| \`${escapeTableCell(field)}\` | \`${escapeTableCell(schemaLabel(definition))}\` | ${required.has(field) ? "Yes" : "No"} | ${escapeTableCell(definition.description)} |`,
      );
    }
    lines.push("");
  }
  return lines;
}

function renderOpenApiMarkdown(specification, sourcePath, repository, ref) {
  const title = specification.info?.title || path.basename(sourcePath, path.extname(sourcePath));
  const version = specification.info?.version || "unspecified";
  const lines = [
    `# ${title}`,
    "",
    `> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/${repository}/blob/${ref}/${sourcePath}). Do not edit this generated file directly.`,
    "",
    `**API Version:** ${version}`,
  ];

  if (specification.servers?.length) {
    lines.push(`**Base URL:** \`${specification.servers[0].url}\``);
  }
  if (specification.info?.description) lines.push("", specification.info.description.trim());

  const tagGroups = new Map();
  for (const [endpointPath, pathItem] of Object.entries(specification.paths || {})) {
    for (const [method, operation] of Object.entries(pathItem || {})) {
      if (!HTTP_METHODS.has(method.toLowerCase())) continue;
      const tag = operation.tags?.[0] || "Endpoints";
      if (!tagGroups.has(tag)) tagGroups.set(tag, []);
      tagGroups.get(tag).push({
        endpointPath,
        method: method.toUpperCase(),
        operation,
        pathParameters: pathItem.parameters || [],
      });
    }
  }

  for (const [tag, operations] of tagGroups) {
    lines.push("", `## ${tag}`, "");
    for (const { endpointPath, method, operation, pathParameters } of operations) {
      const operationTitle = operation.summary || operation.operationId || `${method} ${endpointPath}`;
      const { schemes, scopes } = operationSecurity(operation, specification);
      lines.push(`### ${operationTitle}`, "", `**Endpoint:** \`${method} ${endpointPath}\``);
      if (scopes.length) lines.push(`**Scope:** \`${scopes.join(", ")}\``);
      if (schemes.length) lines.push(`**Token Type:** ${schemes.join(", ")}`);
      if (operation.deprecated) lines.push("**Deprecated:** Yes");
      if (operation.description) lines.push("", operation.description.trim());
      if (operation.externalDocs?.url) {
        lines.push("", `[Additional documentation](${operation.externalDocs.url})`);
      }

      const mergedParameters = [...pathParameters, ...(operation.parameters || [])];
      const blocks = [
        renderParameters(mergedParameters),
        renderRequestBody(operation.requestBody),
        renderResponses(operation.responses),
      ];
      for (const block of blocks) {
        if (block.length) lines.push("", ...block);
      }
      lines.push("");
    }
  }

  lines.push("", ...renderSchemas(specification.components?.schemas));
  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

async function collectFiles(root) {
  const files = [];
  async function visit(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(fullPath);
      if (entry.isFile()) files.push(fullPath);
    }
  }
  await visit(root);
  return files.sort();
}

async function writeGeneratedFile(stagingDir, relativePath, content, outputs) {
  const outputPath = path.join(stagingDir, relativePath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content, "utf8");
  outputs.push({ path: relativePath.split(path.sep).join("/"), sha256: sha256(content) });
}

async function resolveCommit(sourceDir) {
  try {
    const { stdout } = await execFile("git", ["-C", sourceDir, "rev-parse", "HEAD"]);
    return stdout.trim();
  } catch {
    return null;
  }
}

async function directoriesEqual(left, right) {
  async function snapshot(root) {
    try {
      const files = await collectFiles(root);
      const result = {};
      for (const file of files) {
        result[relativePosix(root, file)] = sha256(await fs.readFile(file));
      }
      return result;
    } catch (error) {
      if (error.code === "ENOENT") return {};
      throw error;
    }
  }
  return JSON.stringify(await snapshot(left)) === JSON.stringify(await snapshot(right));
}

async function syncFromSource({
  sourceDir,
  outputDir = DEFAULT_OUTPUT_DIR,
  repository = DEFAULT_REPOSITORY,
  ref = DEFAULT_REF,
  check = false,
} = {}) {
  await fs.mkdir(path.dirname(outputDir), { recursive: true });
  const stagingDir = await fs.mkdtemp(path.join(path.dirname(outputDir), ".ghl-docs-sync-"));
  const sourceFiles = [];
  const outputs = [];
  let apiCount = 0;
  let guideCount = 0;

  try {
    const files = await collectFiles(sourceDir);
    for (const file of files) {
      const sourcePath = relativePosix(sourceDir, file);
      const content = await fs.readFile(file, "utf8");

      if (sourcePath.startsWith("apps/") && sourcePath.endsWith(".json")) {
        let specification;
        try {
          specification = JSON.parse(content);
        } catch {
          continue;
        }
        if (!specification.paths || Object.keys(specification.paths).length === 0) continue;
        const relativeSpecPath = sourcePath.replace(/^apps\//, "").replace(/\.json$/, ".md");
        const versionDir = relativeSpecPath.startsWith("v3/") ? "v3" : "v2";
        const outputName = relativeSpecPath.replace(/^v3\//, "");
        const markdown = renderOpenApiMarkdown(specification, sourcePath, repository, ref);
        await writeGeneratedFile(stagingDir, path.join("api", versionDir, outputName), markdown, outputs);
        sourceFiles.push({ path: sourcePath, sha256: sha256(content) });
        apiCount += 1;
        continue;
      }

      if (sourcePath.startsWith("docs/") && sourcePath.endsWith(".md")) {
        const relativeGuidePath = sourcePath.replace(/^docs\//, "");
        const sourceNotice = `> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/${repository}/blob/${ref}/${encodeURI(sourcePath)}). Do not edit this generated file directly.\n\n`;
        await writeGeneratedFile(
          stagingDir,
          path.join("guides", relativeGuidePath),
          `${sourceNotice}${content.trim()}\n`,
          outputs,
        );
        sourceFiles.push({ path: sourcePath, sha256: sha256(content) });
        guideCount += 1;
      }
    }

    sourceFiles.sort((a, b) => a.path.localeCompare(b.path));
    outputs.sort((a, b) => a.path.localeCompare(b.path));
    let previousManifest = null;
    try {
      previousManifest = JSON.parse(
        await fs.readFile(path.join(outputDir, ".ghl-sync-manifest.json"), "utf8"),
      );
    } catch {
      // The first sync has no prior manifest to preserve.
    }
    const resolvedCommit = await resolveCommit(sourceDir);
    const sameTrackedSources =
      previousManifest?.source === `https://github.com/${repository}` &&
      previousManifest?.ref === ref &&
      JSON.stringify(previousManifest.sourceFiles) === JSON.stringify(sourceFiles);
    const manifest = {
      schemaVersion: 1,
      source: `https://github.com/${repository}`,
      ref,
      upstreamCommit: sameTrackedSources ? previousManifest.upstreamCommit : resolvedCommit,
      apiDocuments: apiCount,
      guideDocuments: guideCount,
      sourceFiles,
      outputs,
    };
    await fs.writeFile(
      path.join(stagingDir, ".ghl-sync-manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );

    const changed = !(await directoriesEqual(stagingDir, outputDir));
    if (check) return { changed, apiCount, guideCount, outputDir };

    if (changed) {
      await fs.rm(outputDir, { recursive: true, force: true });
      await fs.rename(stagingDir, outputDir);
    }
    return { changed, apiCount, guideCount, outputDir };
  } finally {
    await fs.rm(stagingDir, { recursive: true, force: true });
  }
}

async function cloneUpstream(repository, ref) {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-api-docs-"));
  const url = repository.startsWith("http") ? repository : `https://github.com/${repository}.git`;
  await execFile("git", ["clone", "--depth", "1", "--branch", ref, url, tempDir]);
  return tempDir;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const repository = args.repository || process.env.GHL_DOCS_REPOSITORY || DEFAULT_REPOSITORY;
  const ref = args.ref || process.env.GHL_DOCS_REF || DEFAULT_REF;
  const outputDir = path.resolve(args.output || DEFAULT_OUTPUT_DIR);
  let sourceDir = args["source-dir"] ? path.resolve(args["source-dir"]) : null;
  let clonedDir = null;

  try {
    if (!sourceDir) {
      clonedDir = await cloneUpstream(repository, ref);
      sourceDir = clonedDir;
    }
    const result = await syncFromSource({
      sourceDir,
      outputDir,
      repository,
      ref,
      check: Boolean(args.check),
    });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    if (args.check && result.changed) process.exitCode = 1;
  } finally {
    if (clonedDir) await fs.rm(clonedDir, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await main();
}

export { renderOpenApiMarkdown, syncFromSource };
