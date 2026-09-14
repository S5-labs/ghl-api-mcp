> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete an existing knowledge base FAQ

**Endpoint:** `DELETE /knowledge-bases/faqs/:id`

Permanently deletes one FAQ from a knowledge base. WHEN TO USE: use this when a canned answer is outdated; use update to revise it instead; use list to find the FAQ id. RETURNS: whether the delete succeeded.

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

faq ID as string

application/json

FAQ deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the delete operation

```json
{
  "success": true
}
```
