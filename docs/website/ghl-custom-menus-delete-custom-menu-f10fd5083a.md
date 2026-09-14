> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/delete-custom-menu). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Custom Menu Link

**Endpoint:** `DELETE /custom-menus/:customMenuId`

Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.

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

ID of the custom menu to delete

application/json

Custom menu successfully deleted

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanIndicates whether the custom menu was successfully deleted**message**stringA message providing additional information about the deletion operation**deletedMenuId**stringThe ID of the deleted custom menu**deletedAt**string<date-time>Timestamp of when the deletion was performed

```json
{
  "success": true,
  "message": "Custom menu successfully deleted",
  "deletedMenuId": "12345abcde",
  "deletedAt": "2023-09-12T15:30:45.123Z"
}
```
