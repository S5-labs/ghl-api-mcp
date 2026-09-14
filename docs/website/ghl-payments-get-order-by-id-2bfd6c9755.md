> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/get-order-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Order by ID

**Endpoint:** `GET /payments/orders/:orderId`

The "Get Order by ID" API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**orderId**

string

required

ID of the order that needs to be returned

**locationId**

string

LocationId is the id of the sub-account.

**altId**

string

required

AltId is the unique identifier e.g: location id.

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier for the order.**altId**stringrequiredAltId is the unique identifier eg: location id.**altType**stringrequiredAltType is the type of identifier.**contactId**stringContact id corresponding to the order.**currency**stringCurrency in which order was created.**amount**numberOrder value.**status**stringrequiredThe status of the order (e.g., completed).**liveMode**booleanOrder is in live / test mode.**createdAt**string<date-time>requiredThe creation timestamp of the order.**updatedAt**string<date-time>requiredThe last update timestamp of the order.**fulfillmentStatus**stringFulfillment status of the order.**contactSnapshot**objectContact details of the order.**amountSummary**objectAmount details of the order.**source**objectSource details of the order.**items**string[]Item details of the order.**coupon**objectCoupon details of the order.**trackingId**stringTracking id of the order.**fingerprint**stringFingerprint id of the order.**meta**objectMeta details of the order.**markAsTest**booleanIs test order.**traceId**stringTrace id of the order.**automaticTaxesCalculated**booleanAutomatic taxes applied for the Order**taxCalculationProvider**objectProvider name for automatic tax calculation**createdBy**stringUser ID who created the order.

```json
{
  "_id": "653f5e0cde5a1314e62a837c",
  "altId": "3SwdhCu3svxI8AKsPJt6",
  "altType": "location",
  "contactId": "XPLSw2SVagl12LMDeTmQ",
  "currency": "USD",
  "amount": "100",
  "status": "completed",
  "liveMode": "false",
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "fulfillmentStatus": "unfulfilled",
  "contactSnapshot": "{ last_name: \"Mcclain\", type: \"lead\", first_name_lower_case: \"rogan\", email: \"anish+11@gohighlevel.com\", last_name_lower_case: \"mcclain\", location_id: \"o6241QsiRwUIJHyjuhos\", company_name: \"Jordan and Cox Trading\"}",
  "amountSummary": "{ subtotal: 100, discount: 5 }",
  "source": "{ type: \"invoice\", id: \"61dd48ff65b013bc39bb09c6\" }",
  "items": "{ _id: 61dd33e88058b9f967ca79dc, authorizeAmount: 0, locationId: \"SBAWb4yu7A4LSc0skQ6g\", name: \"Sample Product\": price: {}, product: { name: \"Testing product\", productType: \"SERVICE\" }}",
  "coupon": "{ code: \"FEST10\", _id: \"63455e48901b43d4ef364a20\" }",
  "trackingId": "63319ef9-de0a-4c84-aebd-3585fb4a0cdf",
  "fingerprint": "5d51db5a-42b0-4b04-ba88-2c046c982a3a",
  "meta": "{ couponSessionExpired: true }",
  "markAsTest": "false",
  "traceId": "d3b16a92-a8ed-4e6b-8467-844750f78ed5",
  "automaticTaxesCalculated": true,
  "taxCalculationProvider": "taxjar",
  "createdBy": "user123"
}
```
