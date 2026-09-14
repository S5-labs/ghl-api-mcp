> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/list-shipping-carriers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Shipping Carriers

**Endpoint:** `GET /store/shipping-carrier`

The "List Shipping Carrier" API allows to retrieve a list of shipping carrier.

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

**status**booleanrequiredStatus of api action**message**stringSuccess message**data**object[]requiredAn array of items

```json
{
  "status": true,
  "message": "Successfully created",
  "data": [
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
      "allowsMultipleServiceSelection": true,
      "_id": "655b33a82209e60b6adb87a5",
      "marketplaceAppId": "655b33a82209e60b6adb87a5",
      "createdAt": "2023-12-12T09:27:42.355Z",
      "updatedAt": "2023-12-12T09:27:42.355Z"
    }
  ]
}
```
