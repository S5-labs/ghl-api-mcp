> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Business

**Endpoint:** `GET /businesses/:businessId`

Get Business

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**business**objectrequiredBusiness Response

```json
{
  "business": {
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
