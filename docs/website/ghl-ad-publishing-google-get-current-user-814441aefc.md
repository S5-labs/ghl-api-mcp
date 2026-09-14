> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-current-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get current Google user

**Endpoint:** `GET /ad-publishing/google/me`

Retrieve the authenticated Google user info for a location

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

application/json

Profile of the Google account connected to this location

- application/json

- Schema
- Example (auto)

**Schema**

**name**stringrequiredDisplay name on the connected Google account**picture**stringrequiredProfile photo as a base64 data URI, truncated here for brevity

```json
{
  "name": "Jane Doe",
  "picture": "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQ..."
}
```
