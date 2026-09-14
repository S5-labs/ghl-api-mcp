> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/get-crawling-status-for-latest-operation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get crawling status for the latest operation

**Endpoint:** `GET /knowledge-bases/crawler/status`

Fetches crawl/train progress for a specific operation, or the latest operation when operationId is omitted. WHEN TO USE: use this when you need to poll a discoverWebsite or trainDiscoveredUrls run; do not use it to start a crawl or train pages. RETURNS: aggregated counts by status plus detailed operation information.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location ID as string

**operationId**

string

operation id as string (optional - gets latest if not provided)

**knowledgeBaseId**

string

required

knowledge base id

application/json

Operation status fetched successfully

- application/json

- Schema
- Example (auto)

**Schema**

**aggregate**object[]requiredAggregated crawling results by status**operationDetails**objectrequiredDetailed operation information

```json
{
  "aggregate": [
    {
      "_id": "Failed",
      "records": [
        {
          "url": "https://developer.mozilla.org/en-US/blog/rss.xml",
          "id": "688e41118a188704914d13c0"
        }
      ]
    }
  ],
  "operationDetails": {}
}
```
