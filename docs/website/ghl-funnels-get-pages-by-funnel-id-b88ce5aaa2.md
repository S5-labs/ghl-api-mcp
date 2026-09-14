> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-by-funnel-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch list of funnel pages

**Endpoint:** `GET /funnels/page`

Retrieves a list of all funnel pages based on the given query parameters.

## Request

**locationId**

string

required

**funnelId**

string

required

**name**

string

**limit**

number

required

**offset**

number

required

application/json

Successful response - List of funnel pages returned

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequired**locationId**stringrequired**funnelId**stringrequired**name**stringrequired**stepId**stringrequired**deleted**stringrequired**updatedAt**stringrequired

```json
{
  "_id": "0yJbP3q7t7pLmeTWRAE2",
  "locationId": "ojQjykmwNIU88vfsfzvH",
  "funnelId": "iucJ6TdFZiddhq9f6znh",
  "name": "Home",
  "stepId": "343bf634-3aa6-4ade-b963-2d3cd0bf2ede",
  "deleted": false,
  "updatedAt": "2024-04-18T12:25:23.029Z"
}
```
