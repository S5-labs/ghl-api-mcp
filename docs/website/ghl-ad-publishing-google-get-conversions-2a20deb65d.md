> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get conversions

**Endpoint:** `GET /ad-publishing/google/conversions`

Retrieve Google Ads conversion actions for a location. The response shape is selected by `type`. When `type` is `AD_MANAGER`: without `limit` a plain array of full conversion actions, and with `limit` (max 100, default 100) a paginated `{ conversions, paging }` envelope — pass `pageToken` (from `paging.next`) for the next batch. When `type` is omitted or `AD_WORDS`, a different, minimal snake_case projection is returned and `limit`, `pageToken`, `startDate`, `endDate`, `conversionType` and `category` are all ignored.

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

Integration type

Available options

`AD_MANAGER`

`AD_WORDS`

**conversionType**

string

Conversion action type to filter by

Available options

`UPLOAD_CLICKS`

`UPLOAD_CALLS`

`WEBPAGE`

`LEAD_FORM_SUBMIT`

**category**

string

Conversion action category to filter by

Available options

`DEFAULT`

`PAGE_VIEW`

`PURCHASE`

`SIGNUP`

`LEAD`

`DOWNLOAD`

`ADD_TO_CART`

`BEGIN_CHECKOUT`

`SUBSCRIBE_PAID`

`PHONE_CALL_LEAD`

`IMPORTED_LEAD`

`SUBMIT_LEAD_FORM`

**startDate**

string

Filter start date

**endDate**

string

Filter end date

**limit**

string

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { conversions, paging } envelope instead of a plain array. Applies to AD_MANAGER type only.

**pageToken**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

Minimal array when type is omitted/AD_WORDS, a full array for AD_MANAGER, or a { conversions, paging } envelope for AD_MANAGER with limit

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]object[]PaginatedGoogleConversionsDTOArray [**conversion_action_id**stringrequiredGoogle Ads conversion action id**conversion_name**stringrequiredConversion action name**conversion_source**stringrequiredAlways `UPLOAD` on this branch]

```json
[
  {
    "conversion_action_id": "7086809727",
    "conversion_name": "Offline purchase",
    "conversion_source": "UPLOAD"
  }
]
```
