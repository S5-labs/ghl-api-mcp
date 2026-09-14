> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get conversion pixels

**Endpoint:** `GET /ad-publishing/facebook/pixels`

Retrieve Facebook conversion pixels for a location. `channel` selects between two unrelated behaviours. For `FACEBOOK` (the default) the response is `{ items, total }`, or a paginated `{ items, paging }` envelope when `limit` (max 100) is given — pass `after` from `paging.next` for the next batch — and `projection` (comma-separated, from `createdAt`, `fbIsCrmPixel`, `fbPixelCode`, `fbPixelId`, `name`, `type`) narrows each item. For `IG` the response is instead a bare array of Instagram datasets carrying only an id, and `limit`, `after`, and `projection` are ignored.

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

**channel**

string

Channel type

Available options

`IG`

`FACEBOOK`

**pageId**

string

Facebook page ID

**igUserId**

string

Instagram user ID

**limit**

string

Page size for a paginated fetch (max 100, FACEBOOK channel only). When set, the response is a { items, paging } envelope instead of { items, total }.

**after**

string

Opaque cursor for the next batch, taken from the previous response paging.next

**projection**

string[]

Fields to return on each item, comma-separated (e.g. ?projection=name,fbPixelId). When set, only the requested fields are returned. Selectable fields: createdAt, fbIsCrmPixel, fbPixelCode, fbPixelId, name, type — any other value is rejected. Omit the param entirely to receive the full item as-is.

Available options

`createdAt`

`fbIsCrmPixel`

`fbPixelCode`

`fbPixelId`

`name`

`type`

application/json

For channel FACEBOOK, an { items, total } object or an { items, paging } envelope when `limit` is given. For channel IG, a bare array of Instagram datasets, empty when no connected Instagram account matched.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookConversionPixelListDTOPaginatedFacebookPixelsDTOobject[]**items**object[]requiredEvery pixel on the ad account**total**numberrequiredNumber of entries in `items`

```json
{
  "items": [
    {
      "name": "AdPublishing - Staging's Pixel",
      "fbPixelId": "2107520276278738",
      "fbIsCrmPixel": true,
      "type": "LEAD_EVENT",
      "fbPixelCode": "<!-- Facebook Pixel Code -->\n<script>...fbq('init', '2107520276278738');...</script>\n<!-- End Facebook Pixel Code -->",
      "createdAt": "2024-03-21T05:29:10+0000"
    }
  ],
  "total": 48
}
```
