> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/validate-groups-slug). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Validate group slug

**Endpoint:** `POST /calendars/groups/validate-slug`

Validate if group slug is available or not.

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

**locationId**stringrequiredLocation Id**slug**stringrequiredSlug

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "slug": "calendar-1"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**available**booleanrequiredWhether the slug is available

```json
{
  "available": true
}
```
