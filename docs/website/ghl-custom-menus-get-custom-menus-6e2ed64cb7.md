> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/get-custom-menus). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Custom Menu Links

**Endpoint:** `GET /custom-menus/`

Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

Unique identifier of the location

**skip**

number

Number of items to skip for pagination

**Possible values:** `>= 0`

`0`

**limit**

number

Maximum number of items to return

**Possible values:** `>= 1`

`20`

**query**

string

Search query to filter custom menus by name, supports partial || full names

**showOnCompany**

boolean

Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided

application/json

Successfully retrieved custom menus. Returns an array of custom menu objects, potentially including their structure, items, and relevant metadata.

- application/json

- Schema
- Example (auto)

**Schema**

**customMenus**object[]Array of custom menu links**totalLinks**numberTotal number of custom menu records

```json
{
  "customMenus": [
    {
      "id": "12345",
      "icon": {
        "name": "yin-yang",
        "fontFamily": "fab"
      },
      "title": "Dashboard",
      "url": "/dashboard",
      "order": 1,
      "showOnCompany": true,
      "showOnLocation": true,
      "showToAllLocations": true,
      "locations": [
        "gfWreTIHL8pDbggBb7af",
        "67WreTIHL8pDbggBb7ty"
      ],
      "openMode": "iframe",
      "userRole": "all",
      "allowCamera": false,
      "allowMicrophone": false
    }
  ],
  "totalLinks": 100
}
```
