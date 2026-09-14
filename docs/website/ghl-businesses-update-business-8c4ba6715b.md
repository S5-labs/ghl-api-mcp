> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/businesses/update-business). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Business

**Endpoint:** `PUT /businesses/:businessId`

Update Business

## Request

**Version**

string

required

API Version

Available options

`v3`

**businessId**

string

required

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**string**phone**string**email**string**postalCode**string**website**string**address**string**state**string**city**string**country**string**description**string

```json
{
  "name": "Microsoft",
  "phone": "+18832327657",
  "email": "john@deo.com",
  "postalCode": "12312312",
  "website": "www.xyz.com",
  "address": "street adress",
  "state": "new york",
  "city": "new york",
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
