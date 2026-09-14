import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  extractWebsiteMarkdown,
  outputNameForUrl,
  parseSitemap,
  syncWebsite,
} from "../scripts/sync-ghl-website.js";

const PAGE_URL = "https://marketplace.gohighlevel.com/docs/other/user-context-marketplace-apps";
const CLI_URL = "https://marketplace.gohighlevel.com/docs/sdk/marketplace-cli";

function pageHtml(extra = "") {
  return `<!doctype html><html><head><title>User Context</title></head><body><article>
    <span class="theme-doc-version-badge">Version: v3</span>
    <div class="theme-doc-markdown markdown">
      <h1>User Context in Marketplace Apps<a class="hash-link">#</a></h1>
      <p>Fresh website content with <code>isAgencyOwner</code>.</p>
      <pre class="language-json"><code>{"isAgencyOwner":true}</code></pre>
      <table><thead><tr><th>Field</th><th>Type</th></tr></thead><tbody><tr><td>isAgencyOwner</td><td>boolean</td></tr></tbody></table>
      ${extra}
    </div>
  </article></body></html>`;
}

test("parseSitemap keeps canonical current routes and excludes dated versions", () => {
  const xml = `<?xml version="1.0"?><urlset>
    <url><loc>${PAGE_URL}</loc><lastmod>2026-07-09</lastmod></url>
    <url><loc>https://marketplace.gohighlevel.com/docs/2021-07-28/other/old</loc></url>
    <url><loc>https://marketplace.gohighlevel.com/docs/category/webhook</loc></url>
    <url><loc>https://marketplace.gohighlevel.com/docs/markdown-page</loc></url>
    <url><loc>https://marketplace.gohighlevel.com/docs/blog/</loc></url>
    <url><loc>${PAGE_URL}</loc><lastmod>2026-07-09</lastmod></url>
    <url><loc>https://example.com/docs/not-highlevel</loc></url>
  </urlset>`;
  assert.deepEqual(parseSitemap(xml), [{ url: PAGE_URL, lastmod: "2026-07-09" }]);
});

test("extractWebsiteMarkdown preserves rendered fields, code, tables, and endpoints", () => {
  const markdown = extractWebsiteMarkdown(
    pageHtml([
      '<pre class="openapi__method-endpoint"><span class="badge">POST</span><h2 class="openapi__method-endpoint-path">/contacts/</h2></pre>',
      '<p><a href="/cdn-cgi/l/email-protection#random"><span class="__cf_email__" data-cfemail="8ae0e5e2e4eee5efcaede7ebe3e6a4e9e5e7">protected</span></a></p>',
    ].join("")),
    PAGE_URL,
  );
  assert.match(markdown, /# User Context in Marketplace Apps/);
  assert.match(markdown, /\*\*Website Version:\*\* v3/);
  assert.match(markdown, /`isAgencyOwner`/);
  assert.match(markdown, /```json\n\{"isAgencyOwner":true\}/);
  assert.match(markdown, /\| isAgencyOwner \| boolean \|/);
  assert.match(markdown, /\*\*Endpoint:\*\* `POST \/contacts\/`/);
  assert.match(markdown, /\[johndoe@gmail\.com\]\(mailto:johndoe@gmail\.com\)/);
});

test("parseSitemap rejects error pages, sitemap indexes, and empty canonical results", () => {
  for (const invalid of [
    "<html><body>Temporarily unavailable</body></html>",
    "<sitemapindex><sitemap><loc>https://example.com/child.xml</loc></sitemap></sitemapindex>",
    "<urlset></urlset>",
    "<urlset><url><loc>https://example.com/docs/unrelated</loc></url></urlset>",
  ]) {
    assert.throws(() => parseSitemap(invalid), /sitemap/);
  }
});

test("failed sync waits for active workers and preserves the previous corpus", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-failed-sync-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const outputDir = path.join(root, "website");
  await syncWebsite({ pages: [{ url: PAGE_URL, lastmod: null }], outputDir, fetchPage: async () => pageHtml() });
  const before = await fs.readFile(path.join(outputDir, outputNameForUrl(PAGE_URL)), "utf8");
  let releaseWorker;
  const workerGate = new Promise((resolve) => { releaseWorker = resolve; });
  let markWorkerStarted;
  const workerStarted = new Promise((resolve) => { markWorkerStarted = resolve; });
  let finished = false;
  const result = syncWebsite({
    pages: [{ url: PAGE_URL, lastmod: null }, { url: CLI_URL, lastmod: null }],
    outputDir,
    concurrency: 2,
    fetchPage: async (url) => {
      if (url === PAGE_URL) throw new Error("upstream failure");
      markWorkerStarted();
      await workerGate;
      finished = true;
      return pageHtml("<p>Uncommitted update</p>");
    },
  });
  let settled = false;
  result.then(() => { settled = true; }, () => { settled = true; });
  const rejection = assert.rejects(result, /upstream failure/);
  await workerStarted;
  await new Promise((resolve) => setImmediate(resolve));
  try {
    assert.equal(settled, false, "sync must wait for the other worker before rejecting");
  } finally {
    releaseWorker();
  }
  await rejection;
  assert.equal(finished, true);
  assert.equal(await fs.readFile(path.join(outputDir, outputNameForUrl(PAGE_URL)), "utf8"), before);
  assert.deepEqual(await fs.readdir(root), ["website"]);
});

test("sync caches unchanged sitemap entries and reports website drift without writing", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-website-sync-"));
  const outputDir = path.join(root, "website");
  const pages = [{ url: PAGE_URL, lastmod: "2026-07-09" }];
  let fetches = 0;
  const fetchPage = async () => {
    fetches += 1;
    return pageHtml();
  };

  const first = await syncWebsite({ pages, outputDir, fetchPage });
  assert.equal(first.changed, true);
  assert.equal(fetches, 1);
  const output = outputNameForUrl(PAGE_URL);
  assert.match(await fs.readFile(path.join(outputDir, output), "utf8"), /isAgencyOwner/);

  const unchanged = await syncWebsite({ pages, outputDir, check: true, fetchPage });
  assert.equal(unchanged.changed, false);
  assert.equal(fetches, 1);
  assert.equal(unchanged.reused, 1);

  const refreshed = await syncWebsite({ pages, outputDir, check: true, fetchPage, forceRefresh: true });
  assert.equal(refreshed.changed, false);
  assert.equal(fetches, 2);
  assert.equal(refreshed.fetched, 1);

  const changedPages = [{ url: PAGE_URL, lastmod: "2026-07-10" }];
  const drift = await syncWebsite({
    pages: changedPages,
    outputDir,
    check: true,
    fetchPage: async () => pageHtml("<p>New field</p>"),
  });
  assert.equal(drift.changed, true);
  assert.doesNotMatch(await fs.readFile(path.join(outputDir, output), "utf8"), /New field/);

  const removed = await syncWebsite({ pages: [], outputDir, fetchPage });
  assert.equal(removed.changed, true);
  await assert.rejects(fs.access(path.join(outputDir, output)));
});


test("SDK guides without lastmod are discovered and refreshed on every sync", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ghl-cli-sync-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const outputDir = path.join(root, "website");
  const pages = parseSitemap(`<urlset><url><loc>${CLI_URL}/</loc></url></urlset>`);
  assert.deepEqual(pages, [{ url: CLI_URL, lastmod: null }]);
  await syncWebsite({ pages, outputDir, fetchPage: async () => pageHtml("<p>Initial CLI guide</p>") });
  let fetches = 0;
  const fetchPage = async () => {
    fetches += 1;
    return pageHtml("<p>Updated Marketplace CLI guide</p>");
  };
  const check = await syncWebsite({ pages, outputDir, check: true, fetchPage });
  assert.equal(check.changed, true);
  const file = path.join(outputDir, outputNameForUrl(CLI_URL));
  assert.match(await fs.readFile(file, "utf8"), /Initial CLI guide/);
  const refreshed = await syncWebsite({ pages, outputDir, fetchPage });
  assert.equal(fetches, 2);
  assert.equal(refreshed.reused, 0);
  assert.match(await fs.readFile(file, "utf8"), /Updated Marketplace CLI guide/);
});
