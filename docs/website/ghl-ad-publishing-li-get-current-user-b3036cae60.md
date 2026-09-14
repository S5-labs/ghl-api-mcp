> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-current-user). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get current LinkedIn user

**Endpoint:** `GET /ad-publishing/linkedin/me`

Retrieve the authenticated LinkedIn user info for a location

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

Profile of the LinkedIn member connected to this location

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredLinkedIn member id**name**stringrequiredDisplay name, joined from the profile first and last name**profilePicture**stringProfile photo URL, taken from the largest display image LinkedIn returns

```json
{
  "id": "AbC1dEfGh2",
  "name": "Jane Doe",
  "profilePicture": "https://media.licdn.com/dms/image/v2/.../profile-displayphoto"
}
```
