> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-campaigns). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Email Campaigns

**Endpoint:** `GET /emails/locations/:locationId/campaigns/emails`

Get list of email campaigns for a location

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

Number of campaigns to skip for pagination. Defaults to 0, minimum is 0

**Possible values:** `>= 0`

`0`

**search**

string

Search text for campaign name

**status**

string

Filter by campaign status

Available options

`all`

`sent`

`failed`

`archived`

`draft`

`processing`

`scheduled`

`cancelled`

`paused`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**campaigns**object[]requiredList of email campaigns**total**numberrequiredTotal count of email campaigns**traceId**stringTrace ID of the request

```json
{
  "campaigns": [
    {
      "id": "67f15c2ae99226d5bcccb8f3",
      "name": "February Newsletter",
      "status": "sent",
      "deleted": false,
      "createdAt": "2025-07-24T11:55:43.598Z",
      "updatedAt": "2026-02-09T04:49:12.322Z"
    }
  ],
  "total": 25,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
