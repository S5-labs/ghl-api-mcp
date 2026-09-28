> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get rebilling config for an app subscription and usage plans

**Endpoint:** `GET /marketplace/app/:appId/rebilling-config/location/:locationId`

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.

## Request

**Version**

string

required

API Version

Available options

`v3`

**appId**

string

required

ID of the app to get rebilling config

**locationId**

string

required

ID of the Sub-Account location to get rebilling config for

application/json

Successfully retrieved rebilling config for the app

- application/json

- Schema
- Example (auto)

**Schema**

**plans**objectrequiredThe rebilling plans configuration

```json
{
  "plans": {
    "subscription": [
      {
        "resellingAmount": 0,
        "baseAmount": 999,
        "planId": "5ae000000000000000000000",
        "features": [
          "feature1",
          "feature2"
        ],
        "paymentType": "month",
        "name": "Monthly Plan - 999",
        "paymentTime": "month"
      }
    ],
    "usage": [
      {
        "productType": "workflow_action",
        "productName": "Send Group iMessage",
        "usageUnit": "action / message",
        "meterId": "680b97022b4a34420f5f9b93",
        "meterName": "Send Group iMessage",
        "fixedPricePerUnit": 0.01001,
        "priceType": "fixed",
        "minPricePerUnit": "0.01001",
        "maxPricePerUnit": "0.01001",
        "executionLimitPerCycle": 1000
      }
    ]
  }
}
```
