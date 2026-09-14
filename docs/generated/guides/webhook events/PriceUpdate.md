> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/PriceUpdate.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Price

Called whenever a price is updated

#### Schema

```json json_schema
{
  "type": "object",
  "properties": {
    "_id": {
      "type": "string"
    },
    "membershipOffers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "_id": {
            "type": "string"
          }
        }
      }
    },
    "variantOptionIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "locationId": {
      "type": "string"
    },
    "product": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "currency": {
      "type": "string"
    },
    "amount": {
      "type": "number"
    },
    "recurring": {
      "type": "object",
      "properties": {
        "interval": {
          "type": "string"
        },
        "intervalCount": {
          "type": "number"
        }
      }
    },
    "createdAt": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    },
    "compareAtPrice": {
      "type": "number"
    },
    "trackInventory": {
      "type": "null"
    },
    "availableQuantity": {
      "type": "number"
    },
    "allowOutOfStockPurchases": {
      "type": "boolean"
    }
  }
}
```

#### Example

```json{
  "_id": "655b33aa2209e60b6adb87a7",
  "membershipOffers": [
    {
      "label": "top_50",
      "value": "50",
      "_id": "655b33aa2209e60b6adb87a7"
    }
  ],
  "variantOptionIds": [
    "h4z7u0im2q8",
    "h3nst2ltsnn"
  ],
  "locationId": "3SwdhCsvxI8Au3KsPJt6",
  "product": "655b33a82209e60b6adb87a5",
  "userId": "6YAtzfzpmHAdj0e8GkKp",
  "name": "Red / S",
  "type": "one_time",
  "currency": "INR",
  "amount": 199999,
  "recurring": {
    "interval": "day",
    "intervalCount": 1
  },
  "createdAt": "2023-11-20T10:23:38.645Z",
  "updatedAt": "2024-01-23T09:57:04.852Z",
  "compareAtPrice": 2000000,
  "trackInventory": null,
  "availableQuantity": 5,
  "allowOutOfStockPurchases": true
}
```
