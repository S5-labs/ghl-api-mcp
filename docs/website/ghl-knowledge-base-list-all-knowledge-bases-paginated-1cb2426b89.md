> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list-all-knowledge-bases-paginated). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all knowledge bases for a location by location Id (paginated)

**Endpoint:** `GET /knowledge-bases/`

Lists knowledge bases for a sub-account (location), with optional name search and cursor pagination. WHEN TO USE: use this when you need to see which knowledge bases exist; use getKnowledgeBaseById for one; use createKnowledgeBase to add one. RETURNS: a page of knowledge bases, activeCount, hasMore, and lastKnowledgeBaseId for the next page.

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

The location ID to retrieve knowledge bases for

**query**

string

search query for knowledge base name

**limit**

number

Maximum number of knowledge bases to return

`20`

**lastKnowledgeBaseId**

string

ID of the last knowledge base from the previous page (for pagination)

application/json

Paginated knowledge bases retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the operation**data**objectrequiredPaginated knowledge bases data

```json
{
  "success": true,
  "data": {}
}
```
