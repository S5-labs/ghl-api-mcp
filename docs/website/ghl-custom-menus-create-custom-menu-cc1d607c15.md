> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/create-custom-menu). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Custom Menu Link

**Endpoint:** `POST /custom-menus/`

Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to [https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2](https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2)

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**title**stringrequiredTitle of the custom menu**url**stringrequiredURL of the custom menu**icon**objectrequiredIcon information for the custom menu**showOnCompany**booleanrequiredWhether the menu must be displayed on the agency's level**Default value:**`true`**showOnLocation**booleanrequiredWhether the menu must be displayed for sub-accounts level**Default value:**`true`**showToAllLocations**booleanrequiredWhether the menu must be displayed to all sub-accounts**Default value:**`true`**openMode**stringrequiredMode for opening the menu linkAvailable options`iframe``new_tab``current_tab`**locations**string[]requiredList of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false**userRole**stringrequiredWhich user-roles should the menu be accessible to?Available options`all``admin``user`**allowCamera**booleanWhether to allow camera access (only for iframe mode)**allowMicrophone**booleanWhether to allow microphone access (only for iframe mode)

```json
{
  "title": "Custom Menu",
  "url": "https://custom-menus.com/",
  "icon": {
    "name": "yin-yang",
    "fontFamily": "fab"
  },
  "showOnCompany": true,
  "showOnLocation": true,
  "showToAllLocations": true,
  "openMode": "iframe",
  "locations": [
    "gfWreTIHL8pDbggBb7af",
    "67WreTIHL8pDbggBb7ty"
  ],
  "userRole": "all",
  "allowCamera": false,
  "allowMicrophone": false
}
```

application/json

Custom menu successfully created

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
