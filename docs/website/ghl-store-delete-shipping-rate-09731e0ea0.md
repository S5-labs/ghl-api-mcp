> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-rate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete shipping rate

**Endpoint:** `DELETE /store/shipping-zone/:shippingZoneId/shipping-rate/:shippingRateId`

Delete specific shipping rate with Id :shippingRateId

## Request

**shippingZoneId**

string

required

ID of the shipping zone

**shippingRateId**

string

required

ID of the shipping rate that needs to be returned

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

**status**booleanrequiredStatus of api action**message**stringSuccess message

```json
{
  "status": true,
  "message": "Successfully created"
}
```
