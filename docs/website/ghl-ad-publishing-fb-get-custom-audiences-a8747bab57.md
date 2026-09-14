> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get custom audiences

**Endpoint:** `GET /ad-publishing/facebook/custom-audience`

Retrieve Facebook custom audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100) the response is a paginated `{ customAudiences, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated, dot-notation for nested fields, e.g. ?projection=id,name,dataSource.type) to return only the requested fields — any value outside the known field set is rejected.

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

Location identifier

**type**

string

required

Audience list type

Available options

`lookalike`

`custom`

`all`

**source**

string

Audience data source

Available options

`ad_manager`

`integration`

**adAccountId**

string

required

Ad account identifier

**limit**

string

Page size for a paginated fetch (max 100). When set, the response is a { customAudiences, paging } envelope instead of a plain array.

**after**

string

Opaque cursor for the next batch, taken from the previous response paging.next

**projection**

string[]

Fields to return on each item, comma-separated (e.g. ?projection=id,name,dataSource.type). When set, only the requested fields are returned. Nested fields use dot-notation; naming a parent (e.g. dataSource) returns the whole nested object. Any value outside the known field set is rejected. Omit the param entirely to receive the full item as-is.

Available options

`id`

`name`

`description`

`approximateCountLowerBound`

`approximateCountUpperBound`

`subtype`

`timeCreated`

`timeUpdated`

`dataSource`

`dataSource.type`

`dataSource.subType`

`dataSource.creationParams`

application/json

A plain array of custom audiences (default), or a { customAudiences, paging } envelope when `limit` is provided. Lookalike and custom audiences share one shape — `subtype` distinguishes them. Supplying `projection` narrows every entry to the requested fields only.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedFacebookCustomAudiencesDTOArray [**id**stringAudience id**name**stringAudience name**description**stringAudience description. Empty string when not set.**subtype**stringHow the audience was built. `LOOKALIKE` for lookalikes; `CUSTOM`, `ENGAGEMENT`, `WEBSITE`, and `LEAD` for the rest.**approximateCountLowerBound**numberLower bound of the audience size. Facebook floors small audiences — `1000` and `20` are placeholders, not counts.**approximateCountUpperBound**numberUpper bound of the audience size**deliveryStatus**objectWhether the audience can be used in a campaign right now**operationStatus**objectWhether Facebook is still building or refreshing the audience**dataSource**objectWhere the audience gets its members from**timeCreated**numberCreation time as a Unix timestamp in seconds, not milliseconds and not ISO-8601.**timeUpdated**numberLast update time as a Unix timestamp in seconds. Equals `timeCreated` when never edited.]

```json
[
  {
    "id": "120250373909070122",
    "name": "Website Visitors - Last 30 Days",
    "description": "",
    "subtype": "ENGAGEMENT",
    "approximateCountLowerBound": 19900000,
    "approximateCountUpperBound": 23400000,
    "deliveryStatus": {
      "code": 200,
      "description": "This audience is ready for use."
    },
    "operationStatus": {
      "code": 200,
      "description": "This audience is ready for use."
    },
    "dataSource": {
      "type": "EVENT_BASED",
      "subType": "WEB_PIXEL_HITS",
      "creationParams": "[]"
    },
    "timeCreated": 1787123977,
    "timeUpdated": 1787123977
  }
]
```
