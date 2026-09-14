import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { syncFromSource } from "../scripts/sync-ghl-docs.js";
import { DocsIndex } from "../src/docs-index.js";

async function createFixture() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-sync-test-"));
  const sourceDir = path.join(root, "upstream");
  const outputDir = path.join(root, "generated");
  await fs.mkdir(path.join(sourceDir, "apps"), { recursive: true });
  await fs.mkdir(path.join(sourceDir, "docs", "oauth"), { recursive: true });
  await fs.writeFile(
    path.join(sourceDir, "apps", "contacts.json"),
    JSON.stringify({
      openapi: "3.0.0",
      info: { title: "Contacts API", version: "1.0", description: "Contact operations." },
      servers: [{ url: "https://services.leadconnectorhq.com" }],
      paths: {
        "/contacts/{contactId}": {
          get: {
            summary: "Get Contact",
            tags: ["Contacts"],
            security: [{ bearer: ["contacts.readonly"] }],
            parameters: [
              {
                name: "contactId",
                in: "path",
                required: true,
                description: "Contact identifier.",
                schema: { type: "string" },
              },
            ],
            responses: { 200: { description: "Success" } },
          },
        },
      },
      components: {
        schemas: {
          Contact: {
            type: "object",
            required: ["id"],
            properties: { id: { type: "string", description: "Contact identifier." } },
          },
        },
      },
    }),
  );
  await fs.writeFile(path.join(sourceDir, "docs", "oauth", "Overview.md"), "# OAuth Overview\n\nUse OAuth 2.0.\n");
  return { root, sourceDir, outputDir };
}

test("sync discovers API specs and guides and produces indexable Markdown", async () => {
  const { sourceDir, outputDir } = await createFixture();
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "stale.md"), "stale");

  const result = await syncFromSource({ sourceDir, outputDir });
  assert.equal(result.changed, true);
  assert.equal(result.apiCount, 1);
  assert.equal(result.guideCount, 1);
  await assert.rejects(fs.access(path.join(outputDir, "stale.md")));

  const index = new DocsIndex(outputDir);
  await index.load();
  const endpoint = index.getEndpoint({ method: "GET", path: "/contacts/:contactId" });
  assert.ok(endpoint);
  assert.equal(endpoint.scope, "contacts.readonly");
  assert.equal(endpoint.tokenType, "bearer");
  assert.match(endpoint.content, /Contact identifier/);

  const manifest = JSON.parse(
    await fs.readFile(path.join(outputDir, ".ghl-sync-manifest.json"), "utf8"),
  );
  assert.equal(manifest.apiDocuments, 1);
  assert.equal(manifest.guideDocuments, 1);
  assert.equal(manifest.sourceFiles.length, 2);
});

test("sync is deterministic and check mode reports drift without writing", async () => {
  const { sourceDir, outputDir } = await createFixture();
  await syncFromSource({ sourceDir, outputDir });

  const unchanged = await syncFromSource({ sourceDir, outputDir, check: true });
  assert.equal(unchanged.changed, false);

  await fs.appendFile(path.join(sourceDir, "docs", "oauth", "Overview.md"), "\nNew guidance.\n");
  const changed = await syncFromSource({ sourceDir, outputDir, check: true });
  assert.equal(changed.changed, true);
  const existing = await fs.readFile(path.join(outputDir, "guides", "oauth", "Overview.md"), "utf8");
  assert.doesNotMatch(existing, /New guidance/);
});
