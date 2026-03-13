import assert from "node:assert/strict";
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
