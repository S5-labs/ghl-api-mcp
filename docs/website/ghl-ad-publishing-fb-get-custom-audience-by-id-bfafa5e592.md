> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audience-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get custom audience by ID

**Endpoint:** `GET /ad-publishing/facebook/custom-audience/:audienceId`

Retrieve one custom audience with its full detail. Returns more than the listing endpoint: Meta adds the fields relevant to the audience subtype (`retentionDays` and `customerFileSource` for customer lists, `rule` and `pixelId` for website audiences, `lookalikeSpec` for lookalikes), and this service appends `extras` describing the local smart-list or CSV source when the audience is a user-provided customer list.

## Request

**Version**

string

required

API Version

Available options

`v3`

**audienceId**

string

required

Custom audience identifier

**locationId**

string

required

Location identifier

application/json

The audience with the fields relevant to its subtype

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringAudience id**name**stringAudience name**description**stringAudience description. Empty string when not set.**subtype**stringHow the audience was built. `LOOKALIKE` for lookalikes; `CUSTOM`, `ENGAGEMENT`, `WEBSITE`, and `LEAD` for the rest.**approximateCountLowerBound**numberLower bound of the audience size. Facebook floors small audiences — `1000` and `20` are placeholders, not counts.**approximateCountUpperBound**numberUpper bound of the audience size**deliveryStatus**objectWhether the audience can be used in a campaign right now**operationStatus**objectWhether Facebook is still building or refreshing the audience**dataSource**objectWhere the audience gets its members from**timeCreated**numberCreation time as a Unix timestamp in seconds, not milliseconds and not ISO-8601.**timeUpdated**numberLast update time as a Unix timestamp in seconds. Equals `timeCreated` when never edited.**customerFileSource**stringHow the member list was supplied. Present on customer-list audiences.**retentionDays**numberHow long a member stays in the audience. `0` means members never expire.**rule**objectMatching rule for a website audience, as Meta returns it. Structure varies with the rule and is passed through unchanged.**pixelId**stringPixel backing a website audience**lookalikeSpec**objectSeed and ratio settings for a lookalike audience, passed through from Meta**lookalikeAudienceIds**string[]Ids of lookalikes derived from this audience**extras**objectLocal sourcing metadata. Added by this service only for user-provided customer lists that have a matching local record; absent otherwise.

```json
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
  "timeUpdated": 1787123977,
  "customerFileSource": "USER_PROVIDED_ONLY",
  "retentionDays": 0,
  "rule": {},
  "pixelId": "2107520276278738",
  "lookalikeSpec": {},
  "lookalikeAudienceIds": [
    "string"
  ],
  "extras": {
    "_id": "6a8668d9867e604d24f5a628",
    "locationId": "fRMewNQIxSyZ5R4nQyit",
    "audienceId": "120250393519390122",
    "type": "SMARTLIST",
    "dynamic": true,
    "sourceName": "contacts.csv",
    "smartLists": [
      {
        "id": "Rd2L2sxaVc1hCQMDKfNm",
        "name": "3 months ago"
      }
    ],
    "createdAt": "2026-08-20T02:39:21.290Z",
    "updatedAt": "2026-08-20T02:39:21.290Z",
    "__v": 0
  }
}
```
