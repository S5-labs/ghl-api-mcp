> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-charges). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all wallet charges

**Endpoint:** `GET /marketplace/billing/charges`

Get all wallet charges

## Request

**meterId**

string

Billing Meter ID (you can find this on your app's pricing page on the developer portal)

**eventId**

string

Event ID / Transaction ID

**userId**

string

Filter results by User ID that your server passed via API when the charge was created

**startDate**

string

Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window.

**endDate**

string

Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window.

**skip**

number

Number of records to skip

**limit**

number

Maximum number of records to return

application/json

Returns list of wallet charges

- application/json

- Schema
- Example (auto)

**Schema**

**charges**object[]List of wallet charges**count**numberdeprecatedTotal number of charges**pagination**objectPagination metadata for the charges list

```json
{
  "charges": [],
  "pagination": {
    "total": 100,
    "skip": 0,
    "limit": 10
  }
}
```
