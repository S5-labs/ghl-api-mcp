import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { DocsIndex } from "../src/docs-index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.resolve(__dirname, "..", "docs");

test("loads docs and discovers endpoints", async () => {
  const index = new DocsIndex(docsDir);
  await index.load();

  const docs = index.listDocs();
  assert.ok(docs.length >= 2);
  assert.ok(docs.some((doc) => doc.id === "GHL_Custom_Fields_Review"));
  assert.ok(docs.some((doc) => doc.id === "GHL_Custom_Objects_Review"));

  const endpoint = index.getEndpoint({
    method: "POST",
    path: "/custom-fields/",
  });

  assert.ok(endpoint);
  assert.equal(endpoint.scope, "locations/customFields.write");
  assert.equal(endpoint.method, "POST");
});

test("search returns endpoint and section matches", async () => {
  const index = new DocsIndex(docsDir);
  await index.load();

  const results = index.search("associations relation", 5);
  assert.ok(results.length > 0);

  const hasEndpoint = results.some((result) => result.type === "endpoint");
  assert.ok(hasEndpoint);
});

test("parses table-style endpoint docs and normalizes absolute URLs", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-docs-index-"));

  await fs.writeFile(
    path.join(tempDir, "table-doc.md"),
    [
      "# Contacts Review",
      "",
      "## Contacts",
      "",
      "### Create Contact",
      "| **Method** | `POST` |",
      "| **Endpoint** | `/contacts/` |",
      "| **Scope** | `contacts.write` |",
      "",
      "### Get Contact",
      "**Endpoint:** `GET https://services.leadconnectorhq.com/contacts/{contactId}`",
      "**Scope:** `contacts.readonly`",
    ].join("\n"),
  );

  const index = new DocsIndex(tempDir);
  await index.load();

  const createEndpoint = index.getEndpoint({ method: "POST", path: "/contacts/" });
  const getEndpoint = index.getEndpoint({ method: "GET", path: "/contacts/:contactId" });

  assert.ok(createEndpoint);
  assert.equal(createEndpoint.scope, "contacts.write");
  assert.ok(getEndpoint);
  assert.equal(getEndpoint.path, "/contacts/{contactId}");
});

test("parses raw endpoint docs and matches placeholder variants", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-docs-index-"));

  await fs.writeFile(
    path.join(tempDir, "raw-doc.md"),
    [
      "# Raw Notes",
      "",
      "## Search Records",
      "POST https://services.leadconnectorhq.com/objects/${objectKey}/records/search",
      "Scope: objects/records.readonly",
      "Token: Sub-Account Token",
    ].join("\n"),
  );

  const index = new DocsIndex(tempDir);
  await index.load();

  const endpoint = index.getEndpoint({
    method: "POST",
    path: "/objects/:schemaKey/records/search",
  });

  assert.ok(endpoint);
  assert.equal(endpoint.scope, "objects/records.readonly");
  assert.equal(endpoint.tokenType, "Sub-Account Token");
});
