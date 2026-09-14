> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/workflows/get-workflow). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Workflow

**Endpoint:** `GET /workflows/`

Get Workflow

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**workflows**object[]

```json
{
  "workflows": [
    {
      "id": "78559bb3-b920-461e-b010-7b2a2816d2a9",
      "name": "First Workflow",
      "status": "draft",
      "version": 2,
      "createdAt": "2021-05-26T11:33:49.000Z",
      "updatedAt": "2021-05-26T11:33:49.000Z",
      "locationId": "eBG6WapS3v4ZqwA45MTxtYJ"
    }
  ]
}
```
