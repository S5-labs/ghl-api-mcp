> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-custom-audience). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete custom audience

**Endpoint:** `DELETE /ad-publishing/facebook/custom-audience/:audienceId`

Delete a Facebook custom audience by ID

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

Acknowledgement that the custom audience was deleted

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredTrue when the operation succeeded

```json
{
  "success": true
}
```
