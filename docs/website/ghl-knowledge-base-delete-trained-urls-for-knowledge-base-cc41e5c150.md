> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-trained-urls-for-knowledge-base). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete trained pages

**Endpoint:** `DELETE /knowledge-bases/crawler`

Removes trained website pages from a knowledge base so the AI no longer references them. WHEN TO USE: use this when you need to drop specific or all trained URLs; use trainDiscoveredUrls to add pages; use getAllWebsiteUrlsDataByKnowledgeBase to list what is trained. RETURNS: whether the delete succeeded.

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

**locationId**stringrequiredLocation ID as string**knowledgeBaseId**stringKnowledge base ID as string (optional)**urlIds**string[]requiredList of URL ids**deleteAll**booleanrequireddelete all flag**excludeUrlIds**string[]URL IDs to exclude from a deleteAll operation (select-all-minus-some flow)**search**stringSubstring filter (case-insensitive) matched against `url` or `title` to scope deleteAll to filtered rows only. Mirrors the search semantics of the list endpoint.

```json
{
  "locationId": "qIyivCmsuEOSnyoFYEej",
  "knowledgeBaseId": "I1rITlYLJofFosIqC4Np",
  "urlIds": [
    "689268c7a64d801ef7bb44aa"
  ],
  "deleteAll": false,
  "excludeUrlIds": [
    "689268c7a64d801ef7bb44aa"
  ],
  "search": "blog"
}
```

application/json

Selected pages deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the operation was successful**deletedCount**numberrequiredNumber of URLs deleted**message**stringrequiredSuccess message

```json
{
  "success": true,
  "deletedCount": 2,
  "message": "URLs deleted successfully"
}
```
