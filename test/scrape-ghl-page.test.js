import assert from "node:assert/strict";
import test from "node:test";

import {
  cleanIntroText,
  cleanSectionContent,
  normalizeMarkdownTables,
  renderReviewMarkdown,
} from "../scripts/scrape-ghl-page.js";

test("cleanIntroText removes endpoint and section noise", () => {
  const input = [
    "Search Contacts",
    "Please note: Search indexing may lag by a few seconds.",
    "The Contacts Search API enables users to search for contacts.",
    "Endpoint:",
    "POST /contacts/search",
    "Request Body",
  ].join("\n");

  assert.equal(
    cleanIntroText(input, "Search Contacts"),
    [
      "Please note: Search indexing may lag by a few seconds.",
      "The Contacts Search API enables users to search for contacts.",
    ].join("\n\n"),
  );
});

test("normalizeMarkdownTables flattens nested parameter rows", () => {
  const input = [
    "| Parameter | Type | Required | Description | Example |",
    "| --- | --- | --- | --- | --- |",
    "| filters | array | No |  |  |",
    "| \\|---- group |  |  | Logical group operator. |  |",
    "| \\|---- field |  |  | Field name. |  |",
    "|  |  |  | Note: defaults to AND. |  |",
  ].join("\n");

  const output = normalizeMarkdownTables(input);
  assert.match(output, /\| `filters\.group` \|/);
  assert.match(output, /\| `filters\.field` \|/);
  assert.match(output, /\| `Note` \|/);
});

test("cleanSectionContent strips Copy artifacts from code blocks", () => {
  const input = [
    "#### Sample Request Body",
    "",
    "```",
    '{"locationId":"abc"}',
    "Copy",
    "```",
  ].join("\n");

  const output = cleanSectionContent(input);
  assert.doesNotMatch(output, /Copy/);
  assert.match(output, /\{\"locationId\":\"abc\"\}/);
});

test("renderReviewMarkdown produces curated review structure", () => {
  const markdown = renderReviewMarkdown({
    source: {
      title: "Search Contacts",
      url: "https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced",
      endpointMethod: "POST",
      endpointUrl: "https://services.leadconnectorhq.com/contacts/search",
      scopes: ["contacts.readonly"],
      tokenTypes: ["Sub-Account Token"],
      authMethods: ["OAuth Access Token"],
      bodyText: [
        "Search Contacts",
        "Please note: Search indexing may lag by a few seconds.",
        "The Contacts Search API enables users to search for contacts.",
        "Scope(s)",
      ].join("\n"),
      markdown: [
        "```bash",
        "curl -L 'https://services.leadconnectorhq.com/contacts/search' \\",
        "  -H 'Authorization: Bearer <TOKEN>' \\",
        "  -d '{}'",
        "```",
      ].join("\n"),
    },
    supplements: [
      {
        title: "Contacts Search API",
        url: "https://doc.clickup.com/example",
        markdown: [
          "Contacts Search API",
          "The Contacts Search API enables users to search for contacts.",
          "",
          "## Request Body",
          "| Parameter | Type | Required | Description | Example |",
          "| --- | --- | --- | --- | --- |",
          "| locationId | string | Yes | Location ID. | abc |",
          "",
          "### Sort",
          "Sort by supported fields.",
          "",
          "## Response Body",
          "```json",
          '{"contacts":[]}',
          "Copy",
          "```",
        ].join("\n"),
      },
    ],
  });

  assert.match(markdown, /# GoHighLevel Search Contacts API Review/);
  assert.match(markdown, /## 2\. API Reference/);
  assert.match(markdown, /\*\*Endpoint:\*\* `POST \/contacts\/search`/);
  assert.match(markdown, /## 3\. Request Body/);
  assert.match(markdown, /## 4\. Sort/);
  assert.match(markdown, /## 5\. Response Body/);
  assert.doesNotMatch(markdown, /Copy/);
});
