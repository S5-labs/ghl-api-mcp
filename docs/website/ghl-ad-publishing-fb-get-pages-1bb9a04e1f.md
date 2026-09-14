> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Facebook pages

**Endpoint:** `GET /ad-publishing/facebook/pages`

Retrieve Facebook pages for the connected account. Without `limit` the response is an array of pages (this array response will soon be deprecated — migrate to the paginated form). When `limit` is provided the response is a paginated `{ pages, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch.

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

**fetchExisting**

string

Fetch existing pages flag

**limit**

string

Page size for a paginated fetch (fetchExisting only, max 50). When set, the response is a { pages, paging } envelope instead of an array.

**after**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

An array of pages (default; will soon be deprecated — use `limit` to get the paginated { pages, paging } response), or a { pages, paging } envelope when `limit` is provided

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedFacebookPagesDTOArray [**id**stringrequiredFacebook Page ID**name**stringrequiredPage name**category**stringPage category**picture**stringPage profile picture URL**createdOn**stringWhen the page was connected to the location**isConnected**booleanrequiredWhether the page is already connected to the location**tosAccepted**booleanWhether the Facebook Lead Ads TOS is accepted for the page**isDefault**booleanWhether this is the default connected page (only present when fetchExisting is false)]

```json
[
  {
    "id": "1234567890",
    "name": "Acme Marketing",
    "category": "Marketing Agency",
    "picture": "https://scontent.xx.fbcdn.net/...",
    "createdOn": "2026-01-15T10:00:00.000Z",
    "isConnected": false,
    "tosAccepted": true,
    "isDefault": false
  }
]
```
