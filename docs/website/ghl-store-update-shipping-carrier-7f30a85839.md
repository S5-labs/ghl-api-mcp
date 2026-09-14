> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/update-shipping-carrier). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Shipping Carrier

**Endpoint:** `PUT /store/shipping-carrier/:shippingCarrierId`

The "update Shipping Carrier" API allows update a shipping carrier to the system.

## Request

**shippingCarrierId**

string

required

ID of the shipping carrier that needs to be returned

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringLocation Id or Agency Id**altType**stringAvailable options`location`**name**stringName of the shipping carrier**callbackUrl**stringThe URL endpoint that CRM needs to retrieve shipping rates. This must be a public URL.**services**object[]An array of available shipping carrier services**allowsMultipleServiceSelection**booleanThe seller can choose multiple services while creating shipping rates if this is true.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "FedEx",
  "callbackUrl": "https://example.com/get-shipping-rates",
  "services": [
    {
      "name": "Priority Mail Express International",
      "value": "PriorityMailExpressInternational"
    }
  ],
  "allowsMultipleServiceSelection": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**status**booleanrequiredStatus of api action**message**stringSuccess message**data**objectrequiredShipping carrier data

```json
{
  "status": true,
  "message": "Successfully created",
  "data": {
    "altId": "6578278e879ad2646715ba9c",
    "altType": "location",
    "name": "FedEx",
    "callbackUrl": "https://example.com/get-shipping-rates",
    "services": [
      {
        "name": "Priority Mail Express International",
        "value": "PriorityMailExpressInternational"
      }
    ],
    "allowsMultipleServiceSelection": true,
    "_id": "655b33a82209e60b6adb87a5",
    "marketplaceAppId": "655b33a82209e60b6adb87a5",
    "createdAt": "2023-12-12T09:27:42.355Z",
    "updatedAt": "2023-12-12T09:27:42.355Z"
  }
}
```
