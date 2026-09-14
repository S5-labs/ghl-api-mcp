> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/get-custom-menu-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Custom Menu Link

**Endpoint:** `GET /custom-menus/:customMenuId`

Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata

## Request

**Version**

string

required

API Version

Available options

`v3`

**customMenuId**

string

required

Unique identifier of the custom menu

application/json

Successfully retrieved custom menu. Returns a single custom menu object, potentially including its structure, items, and relevant metadata.

- application/json

- Schema
- Example (auto)

**Schema**

**customMenu**objectSingle Custom menu link object

```json
{
  "customMenu": {
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
}
```
