> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/create-knowledge-base). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a new knowledge base (max 15 knowledge bases per location)

**Endpoint:** `POST /knowledge-bases/`

Creates a new knowledge base for a location (maximum 15 per location). WHEN TO USE: use this when you need to add a brand-new knowledge source; use updateKnowledgeBase to rename one; use create (FAQs) or trainDiscoveredUrls to add content. RETURNS: success and the created knowledge base, including its server-assigned id.

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

**name**stringrequiredName of the knowledge base**description**stringOptional description of the knowledge base**locationId**stringrequiredThe location ID this knowledge base belongs to

```json
{
  "name": "My Knowledge Base",
  "description": "A knowledge base for customer support FAQs",
  "locationId": "qIyivCmsuEOSnyoFYEej"
}
```

application/json

Knowledge base created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the operation**data**objectrequiredCreated knowledge base details

```json
{
  "success": true,
  "data": {}
}
```
