> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/delete-email-template). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete a template

**Endpoint:** `DELETE /emails/locations/:locationId/templates/:templateId`

Delete a template

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

Location ID

**templateId**

string

required

Template ID

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**deleted**booleanrequiredWhether the template was deleted successfully**traceId**stringTrace ID of the request

```json
{
  "deleted": true,
  "traceId": "0c52e980-41f6-4be7-8c4b-32332ss"
}
```
