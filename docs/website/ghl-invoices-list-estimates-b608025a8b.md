> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Estimates

**Endpoint:** `GET /invoices/estimate/list`

Get a paginated list of estimates

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

**startAt**

string

startAt in YYYY-MM-DD format

**endAt**

string

endAt in YYYY-MM-DD format

**search**

string

search text for estimates name

**status**

string

estimate status

Available options

`all`

`draft`

`sent`

`accepted`

`declined`

`invoiced`

`viewed`

**contactId**

string

Contact ID for the estimate

**limit**

string

required

Limit the number of items to return

**offset**

string

required

Number of items to skip

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**estimates**string[]requiredList of estimates**total**numberrequiredTotal number of estimates**traceId**stringrequiredUnique identifier for tracing the request

```json
{
  "estimates": [
    "string"
  ],
  "total": 0,
  "traceId": "string"
}
```
