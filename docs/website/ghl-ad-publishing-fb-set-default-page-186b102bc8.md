> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Set default page

**Endpoint:** `PUT /ad-publishing/facebook/page/default`

Set the default Facebook page for a location

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

- application/json

- Body
- Example (auto)

### Body**required**

**pageId**stringrequiredFacebook page identifier

```json
{
  "pageId": "103456789012345"
}
```

application/json

Acknowledgement that the default page was set

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
