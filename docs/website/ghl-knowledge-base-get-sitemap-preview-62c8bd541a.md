> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-sitemap-preview). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Preview Sitemap URLs

**Endpoint:** `POST /knowledge-bases/crawler/sitemap-preview`

Returns a paginated, searchable list of sitemap URLs without starting a crawl. WHEN TO USE: use this when you need to preview sitemap URLs before a crawl; use discoverWebsite to start discovery; use trainDiscoveredUrls after pages are found. RETURNS: a paginated list of sitemap URLs.

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

**locationId**stringrequiredLocation ID**knowledgeBaseId**stringKnowledge base ID**url**stringrequiredWebsite URL to preview sitemap for**option**stringrequiredCrawl modeAvailable options`Exact``Path``Domain`**page**numberPage number (1-based)**pageSize**numberNumber of URLs per page (10–200)**search**stringSubstring filter applied to URLs

```json
{
  "locationId": "tDtDnQdgm2LXpyiqYvZ6",
  "knowledgeBaseId": "tDtDnQdgm2LXpyiqYvZ6",
  "url": "https://example.com",
  "option": "Path",
  "page": 1,
  "pageSize": 100,
  "search": "/blog"
}
```

application/json

Sitemap preview fetched successfully

- application/json

- Schema
- Example (auto)

**Schema**

**hasSitemap**booleanrequiredWhether a sitemap was found for the URL**reason**stringMachine-readable reason when the preview is empty or degradedAvailable options`NO_SITEMAP``FETCH_FAILED``FILTERED_EMPTY``SEARCH_EMPTY`**source**stringWhere the sitemap URL list came fromAvailable options`sitemap``cache`**cached**booleanWhether the raw sitemap URL list was served from preview cache**urls**string[]requiredPaginated slice of matching URLs**total**numberrequiredTotal number of URLs after mode-filter and search**page**numberrequiredCurrent page number (1-based)**pageSize**numberrequiredPage size used**totalSitemapUrls**numberTotal URLs found in the raw sitemap before mode/search filtering**modeFilteredTotal**numberTotal URLs after Path/Domain mode filtering before search filtering

```json
{
  "hasSitemap": true,
  "reason": "NO_SITEMAP",
  "source": "sitemap",
  "cached": false,
  "urls": [
    "https://example.com/page-1",
    "https://example.com/page-2"
  ],
  "total": 42,
  "page": 1,
  "pageSize": 100,
  "totalSitemapUrls": 150,
  "modeFilteredTotal": 80
}
```
