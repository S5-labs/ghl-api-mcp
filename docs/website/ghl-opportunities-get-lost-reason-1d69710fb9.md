> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-lost-reason). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get lost reason

**Endpoint:** `GET /opportunities/lost-reason`

Get lost reason

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

Identifier of the location (sub-account)

**name**

string

lost reason name

**deleted**

boolean

deleted

`false`

**query**

string

search query

**skip**

number

skip

`0`

**limit**

number

limit

`100`

**getCount**

boolean

get count

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**lostReasons**object[]List of lost reasons for the location**total**numberTotal number of lost reasons matching the query

```json
{
  "lostReasons": [],
  "total": 100
}
```
