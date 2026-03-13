import assert from "node:assert/strict";
import test from "node:test";

import {
  buildEndpointUrl,
  normalizeWhitelabelDomain,
  rewriteBaseUrls,
} from "../src/server.js";

test("normalizeWhitelabelDomain accepts bare domains and strips paths", () => {
  assert.equal(
    normalizeWhitelabelDomain("api.example.com/custom-path"),
    "https://api.example.com",
  );
  assert.equal(
    normalizeWhitelabelDomain("https://api.example.com/v1"),
    "https://api.example.com",
  );
});

test("buildEndpointUrl uses whitelabel domain when provided", () => {
  assert.equal(
    buildEndpointUrl("/objects/:schemaKey/records/search", "api.example.com"),
    "https://api.example.com/objects/:schemaKey/records/search",
  );
});

test("rewriteBaseUrls replaces default API host in returned doc content", () => {
  const original =
    "curl -L 'https://services.leadconnectorhq.com/custom-fields/' -H 'Version: 2021-07-28'";

  assert.equal(
    rewriteBaseUrls(original, "https://api.example.com"),
    "curl -L 'https://api.example.com/custom-fields/' -H 'Version: 2021-07-28'",
  );
});
