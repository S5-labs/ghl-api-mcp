> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/search-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Opportunity

**Endpoint:** `GET /opportunities/search`

Search Opportunity

## Request

**Version**

string

required

API Version

Available options

`v3`

**q**

string

Search query (max 75 characters)

**status**

string

Filter by opportunity status

Available options

`open`

`won`

`lost`

`abandoned`

`all`

**campaignId**

string

Campaign Id

**id**

string

Opportunity Id

**order**

string

Sort order for results (e.g. added_asc, added_desc, name_asc, name_desc)

**endDate**

string

End date

**startAfter**

string

Cursor timestamp (epoch ms) for pagination.

**startAfterId**

string

Start After Id

**date**

string

Start date

**country**

string

Filter by country code (ISO 3166-1 alpha-2)

**page**

number

Page number for pagination

`1`

**limit**

number

Limit Per Page records count. will allow maximum up to 100 and default will be 20

`20`

**getTasks**

boolean

get Tasks in contact

**getNotes**

boolean

get Notes in contact

**getCalendarEvents**

boolean

get Calender event in contact

**locationId**

string

required

Location Id

**pipelineId**

string

Pipeline Id

**pipelineStageId**

string

Stage Id

**contactId**

string

Contact Id

**assignedTo**

string

Filter by assigned user identifier

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**opportunities**object[]List of opportunities matching the search criteria**meta**objectPagination metadata for the result set**aggregations**objectAggregation results keyed by aggregation name

```json
{
  "opportunities": [],
  "meta": {},
  "aggregations": {}
}
```
