> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/delete-redirect-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Redirect By Id

**Endpoint:** `DELETE /funnels/lookup/redirect/:id`

The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

**locationId**

string

required

application/json

Successful response - URL redirect deleted successfully

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredStatus of the delete operation

```json
{
  "data": {
    "status": "ok"
  }
}
```
