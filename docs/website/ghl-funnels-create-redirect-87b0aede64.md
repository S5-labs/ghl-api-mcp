> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/funnels/create-redirect). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Redirect

**Endpoint:** `POST /funnels/lookup/redirect`

The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.

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

**locationId**stringrequired**domain**stringrequired**path**stringrequired**target**stringrequired**action**stringrequiredAvailable options`funnel``website``url``all`

```json
{
  "locationId": "6p2RxpgtMKQwO3E6IUaT",
  "domain": "example.com",
  "path": "/Hello",
  "target": "https://www.google.com",
  "action": "URL"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**objectrequiredData containing details of the created redirect

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
