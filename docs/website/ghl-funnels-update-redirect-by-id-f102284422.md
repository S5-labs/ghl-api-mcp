> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/update-redirect-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Redirect By Id

**Endpoint:** `PATCH /funnels/lookup/redirect/:id`

The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**target**stringrequired**action**stringrequiredAvailable options`funnel``website``url``all`**locationId**stringrequired

```json
{
  "target": "https://www.google.com",
  "action": "URL",
  "locationId": "6p2RxpgtMKQwO3E6IUaT"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredData containing details of the updated redirect

```json
{
  "data": {
    "id": "6p2RxpgtMKQwO3E6IUaT",
    "locationId": "6p2RxpgtMKQwO3E6IUaT",
    "domain": "www.example.com",
    "path": "/old-path",
    "pathLowercase": "/old-path",
    "type": "Permanent",
    "target": "https://www.example.com/new-path",
    "action": "url"
  }
}
```
