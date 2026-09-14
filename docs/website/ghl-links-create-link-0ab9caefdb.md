> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/links/create-link). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Link

**Endpoint:** `POST /links/`

Create Link

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

**locationId**stringrequiredLocation ID of the business profile**name**stringrequiredDisplay name of the trigger link**redirectTo**stringrequiredURL or variable to redirect to when the trigger link is clicked

```json
{
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "first tag",
  "redirectTo": "https://www.google.com/"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**link**objectThe trigger link object

```json
{
  "link": {
    "id": "n4AriwEnFrGh3tu08W0U",
    "name": "first tag",
    "redirectTo": "https://www.google.com/",
    "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",
    "locationId": "ve9EPM428h8vShlRW1KT"
  }
}
```
