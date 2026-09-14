> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliate-media). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List affiliate media

**Endpoint:** `GET /affiliate-manager/:locationId/media`

Retrieve media files and folders for a location.

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

Location Id

**query**

string

Search media by name

**parentId**

string

Filter media by parent folder

**campaignId**

string

Filter media by campaign

**mediaType**

string

Filter by media type

Available options

`folder`

`file`

**skip**

number

Number of records to skip

`0`

**limit**

number

Maximum number of records to return. Maximum allowed value is 100.

**Possible values:** `>= 1` and `<= 100`

`10`

**sortByType**

string

Sort order for returned media

Available options

`name-a-to-z`

`name-z-to-a`

`updatedAt-newest`

`updatedAt-oldest`

**showGlobal**

boolean

Show image set for global campaign

`false`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**mediaList**object[]requiredMedia files and folders**meta**objectPagination metadata

```json
{
  "mediaList": [
    {
      "_id": "63d376de11be1d26d38f7369",
      "name": "brand-logo.png",
      "type": "file"
    }
  ],
  "meta": {
    "count": 1
  }
}
```
