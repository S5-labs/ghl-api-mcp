> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-all-website-urls-data-by-knowledge-base). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all trained page links by knowledge base

**Endpoint:** `GET /knowledge-bases/crawler`

Lists discovered and trained website pages for a knowledge base, with pagination and optional URL filter. WHEN TO USE: use this when you need to inspect crawled pages; use discoverWebsite to find new pages; use deleteTrainedUrlsForKnowledgeBase to remove pages the AI should stop using. RETURNS: a paginated list of crawled URLs with status, title, and identifiers.

## Request

**Version**

string

required

API Version

Available options

`v3`

**knowledgeBaseId**

string

required

knowledge base ID as string

**locationId**

string

required

location ID as string

**page**

number

Page number

**pageLength**

number

Records per page

**query**

string

query to filter on url links

application/json

Trained page links retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**count**numberrequiredTotal count of URLs in the knowledge base**urls**object[]requiredArray of crawled URLs with their details

```json
{
  "count": 64,
  "urls": [
    {
      "id": "688c73a25275c513f5f3a7de",
      "url": "https://developer.mozilla.org/en-US/blog",
      "title": "MDN Blog",
      "status": "Successful",
      "locationId": "qIyivCmsuEOSnyoFYEej",
      "knowledgeBaseId": "Arc9QRauPKkSuMJO8D0m",
      "content": "https://storage.googleapis.com/example.txt",
      "contentEditedByUser": false,
      "updatedAt": "2025-08-01T07:58:29.858Z"
    }
  ]
}
```
