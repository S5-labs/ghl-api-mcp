> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Campaigns

**Endpoint:** `GET /campaigns/`

Get Campaigns

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

**status**

string

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**campaigns**object[]

```json
{
  "campaigns": [
    {
      "id": "mIVALPYuTD7YjUHnFEx4",
      "name": "test",
      "status": "published",
      "locationId": "ve9EPM428h8vShlRW1KT"
    }
  ]
}
```
