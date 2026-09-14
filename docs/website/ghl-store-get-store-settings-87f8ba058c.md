> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/get-store-settings). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Store Settings

**Endpoint:** `GET /store/store-setting`

Get store settings by altId and altType.

## Request

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

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
    "shippingOrigin": {
      "name": "ABC Store",
      "country": "US",
      "state": "VA",
      "city": "Tokyo",
      "street1": "Street 1",
      "street2": "Street 2",
      "zip": "674561",
      "phone": "+1-214-559-6993",
      "email": "john@deo.com"
    },
    "storeOrderNotification": {
      "enabled": true,
      "subject": "Your order is placed !",
      "emailTemplateId": "6788d542f0462ffd6bc29bb9",
      "defaultEmailTemplateId": "6788d542f0462ffd6bc29bb9"
    },
    "storeOrderFulfillmentNotification": {
      "enabled": true,
      "subject": "Order fulfilled",
      "emailTemplateId": "6788d542f0462ffd6bc29bb9",
      "defaultEmailTemplateId": "6788d542f0462ffd6bc29bb9"
    },
    "_id": "655b33a82209e60b6adb87a5",
    "createdAt": "2023-12-12T09:27:42.355Z",
    "updatedAt": "2023-12-12T09:27:42.355Z"
  }
}
```
