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
  assert.equal(
    docs.find((doc) => doc.id === "GHL_OAuth_SSO_Reproduction_Guide")?.docType,
    "guide",
  );

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

test("search excludes unrelated documents, sections, and endpoints despite ranking bonuses", async (t) => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-docs-index-"));
  t.after(() => fs.rm(tempDir, { recursive: true, force: true }));
  await fs.mkdir(path.join(tempDir, "website"), { recursive: true });
  await fs.writeFile(
    path.join(tempDir, "website", "contacts-guide.md"),
    "# Contacts Guide\n\n## Contact Lookup\n\n**Endpoint:** `GET /contacts/{id}`\n",
  );

  const index = new DocsIndex(tempDir);
  await index.load();

  assert.deepEqual(index.search("unrelatedterm923413", 20), []);
  const matchingResults = index.search("contacts", 20);
  assert.deepEqual(
    new Set(matchingResults.map((result) => result.type)),
    new Set(["document", "section", "endpoint"]),
  );
});

test("can retrieve full guide documents and surface them in search", async () => {
  const index = new DocsIndex(docsDir);
  await index.load();

  const doc = index.getDocument("oauth sso reproduction guide");
  assert.ok(doc);
  assert.equal(doc.docType, "guide");
  assert.match(doc.rawContent, /Exact Reproduction Strategy: Sub-Account Installs/);

  const results = index.search("step by step oauth sso reproduction", 5);
  assert.ok(results.some((result) => result.type === "document" && result.item.id === doc.id));
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

test("prefers synchronized official endpoints over older hand-authored copies", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-docs-index-"));
  await fs.mkdir(path.join(tempDir, "generated", "api", "v2"), { recursive: true });
  await fs.mkdir(path.join(tempDir, "generated", "api", "v3"), { recursive: true });
  await fs.writeFile(
    path.join(tempDir, "manual.md"),
    "# Manual\n\n## Contacts\n\n### Get Contact\n\n**Endpoint:** `GET /contacts/{id}`\n**Scope:** `old.scope`\n",
  );
  await fs.writeFile(
    path.join(tempDir, "generated", "api", "v2", "contacts.md"),
    "# Official\n\n## Contacts\n\n### Get Contact\n\n**Endpoint:** `GET /contacts/{contactId}`\n**Scope:** `contacts.readonly`\n",
  );
  await fs.writeFile(
    path.join(tempDir, "generated", "api", "v3", "contacts.md"),
    "# Official v3\n\n## Contacts\n\n### Get Contact\n\n**Endpoint:** `GET /contacts/{contactId}`\n**Scope:** `contacts.v3.readonly`\n",
  );

  const index = new DocsIndex(tempDir);
  await index.load();
  const endpoint = index.getEndpoint({ method: "GET", path: "/contacts/:contactId" });
  assert.equal(endpoint.scope, "contacts.v3.readonly");
  assert.match(endpoint.filePath, /generated\/api\/v3\/contacts\.md$/);
  assert.equal(index.listEndpoints({ pathContains: "/contacts/" }).length, 1);
});

test("prefers live website documents and sections over repository snapshots", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-docs-index-"));
  await fs.mkdir(path.join(tempDir, "generated", "guides"), { recursive: true });
  await fs.mkdir(path.join(tempDir, "website"), { recursive: true });
  await fs.writeFile(
    path.join(tempDir, "generated", "guides", "user-context.md"),
    "# User Context in Marketplace Apps\n\n## Payload\n\nOld repository fields.\n",
  );
  await fs.writeFile(
    path.join(tempDir, "website", "user-context-live.md"),
    "# User Context in Marketplace Apps\n\n## Payload\n\nLive `isAgencyOwner` field.\n",
  );

  const index = new DocsIndex(tempDir);
  await index.load();
  const byOldId = index.getDocument("user-context");
  assert.match(byOldId.filePath, /website\/user-context-live\.md$/);
  assert.match(byOldId.rawContent, /isAgencyOwner/);
  assert.match(index.getSection("Payload").content, /isAgencyOwner/);
  const results = index.search("user context marketplace apps", 5);
  assert.equal(results.find((result) => result.type === "document")?.item.filePath, byOldId.filePath);
});
