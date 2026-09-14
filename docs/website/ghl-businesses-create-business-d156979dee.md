> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/businesses/create-business). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Business

**Endpoint:** `POST /businesses/`

Create Business

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

**name**stringrequired**locationId**stringrequired**phone**string**email**string**website**string**address**string**city**string**postalCode**string**state**string**country**string**description**string

```json
{
  "name": "Microsoft",
  "locationId": "5DP4iH6HLkQsiKESj6rh",
  "phone": "+18832327657",
  "email": "john@deo.com",
  "website": "www.xyz.com",
  "address": "street adress",
  "city": "new york",
  "postalCode": "12312312",
  "state": "new york",
  "country": "us",
  "description": "business description"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess Value**buiseness**objectrequiredBusiness Response

```json
{
  "success": true,
  "buiseness": {
    "id": "63771dcac1116f0e21de8e12",
    "name": "Microsoft",
    "phone": "string",
    "email": "abc@microsoft.com",
    "website": "microsoft.com",
    "address": "string",
    "city": "string",
    "description": "string",
    "state": "string",
    "postalCode": "string",
    "country": "united states",
    "updatedBy": {},
    "locationId": "string",
    "createdBy": {},
    "createdAt": "2024-07-29T15:51:28.071Z",
    "updatedAt": "2024-07-29T15:51:28.071Z"
  }
}
```
