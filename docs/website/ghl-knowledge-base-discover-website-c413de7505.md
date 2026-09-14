> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/discover-website). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Start crawling and discover pages for training

**Endpoint:** `POST /knowledge-bases/crawler`

Starts a website crawl that discovers pages for later AI training. WHEN TO USE: use this when you need to scan a site before training; use trainDiscoveredUrls to ingest selected pages; use getCrawlingStatusForLatestOperation to poll progress. RETURNS: the discovery operation id, current status, and the URL being crawled.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequiredLocation ID as string**url**stringrequiredWebsite URL as string**option**stringrequiredMode as stringAvailable options`Exact``Path``Domain`**knowledgeBaseId**stringrequiredknowledge base ID as string**preSelectedUrls**string[]Pre-selected URLs from sitemap preview — when provided, only these URLs are crawled**autoTrain**booleanAutomatically train the discovered URLs after crawling

```json
{
  "locationId": "tDtDnQdgm2LXpyiqYvZ6",
  "url": "https://kubernetes.io/tDtDnQdgm2LXpyiqYvZ6",
  "option": "Exact",
  "knowledgeBaseId": "tDtDnQdgm2LXpyiqYvZ6",
  "preSelectedUrls": [
    "https://example.com/page-1",
    "https://example.com/page-2"
  ],
  "autoTrain": false
}
```

application/json

Crawling and discovery started successfully

- application/json

- Schema
- Example (auto)

**Schema**

**operationId**stringrequiredOperation ID for tracking the discovery process**status**stringrequiredCurrent status of the website discovery operationAvailable options`Pending``Processing``Successful``Failed``Existing``Restricted``Cancelled``Aborted``Training`**url**stringrequiredThe URL being discovered/crawled

```json
{
  "operationId": "op_abc123xyz",
  "status": "Processing",
  "url": "https://example.com"
}
```
