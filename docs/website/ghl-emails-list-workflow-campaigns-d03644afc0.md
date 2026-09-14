> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/list-workflow-campaigns). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Workflow Campaigns

**Endpoint:** `GET /emails/locations/:locationId/campaigns/workflows`

Get list of workflow campaigns for a location

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

Location ID

**limit**

number

Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20

**Possible values:** `>= 1` and `<= 20`

`10`

**offset**

number

Number of items to skip for pagination. Defaults to 0, minimum is 0

**Possible values:** `>= 0`

`0`

**search**

string

Search query to filter campaigns.

``

**status**

string

Filter by campaign status

Available options

`published`

`draft`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**campaigns**object[]requiredList of workflow campaigns**total**numberrequiredTotal count of campaigns**traceId**stringTrace ID of the request

```json
{
  "campaigns": [
    {
      "id": "693bd14ea6b50a8df0180e9a",
      "name": "sorting workflow",
      "status": "published",
      "createdAt": "2025-12-12T08:24:46.700Z",
      "updatedAt": "2026-01-23T05:58:48.453Z"
    }
  ],
  "total": 50,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
