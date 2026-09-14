> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-zone). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete shipping zone

**Endpoint:** `DELETE /store/shipping-zone/:shippingZoneId`

Delete specific shipping zone with Id :shippingZoneId

## Request

**shippingZoneId**

string

required

ID of the item that needs to be returned

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
