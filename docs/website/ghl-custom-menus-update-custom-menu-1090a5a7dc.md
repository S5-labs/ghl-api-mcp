> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/update-custom-menu). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Custom Menu Link

**Endpoint:** `PUT /custom-menus/:customMenuId`

Updates an existing custom menu for a given company. Requires authentication and proper permissions.

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

ID of the custom menu to update

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**title**stringTitle of the custom menu**url**stringURL of the custom menu**icon**objectIcon information for the custom menu**showOnCompany**booleanWhether the menu must be displayed on the agency's level**Default value:**`true`**showOnLocation**booleanWhether the menu must be displayed for sub-accounts level**Default value:**`true`**showToAllLocations**booleanWhether the menu must be displayed to all sub-accounts**Default value:**`true`**openMode**stringMode for opening the menu linkAvailable options`iframe``new_tab``current_tab`**locations**string[]List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false**userRole**stringWhich user-roles should the menu be accessible to?Available options`all``admin``user`**allowCamera**booleanWhether to allow camera access (only for iframe mode)**allowMicrophone**booleanWhether to allow microphone access (only for iframe mode)

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

Custom menu successfully updated

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanStatus of update**customMenu**objectUpdated custom menu link

```json
{
  "success": true,
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
