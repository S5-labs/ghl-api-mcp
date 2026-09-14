> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/get-subscription-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Subscription by ID

**Endpoint:** `GET /payments/subscriptions/:subscriptionId`

The "Get Subscription by ID" API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**subscriptionId**

string

required

ID of the subscription that needs to be returned

**altId**

string

required

AltId is the unique identifier e.g: location id.

**altType**

string

required

AltType is the type of identifier.

Available options

`location`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier for the subscription.**altType**objectrequiredAltType is the type of identifier.**altId**stringrequiredAltId is the unique identifier eg: location id.**contactId**stringContact id corresponding to the subscription.**contactSnapshot**objectContact details of the subscriber.**coupon**objectCoupon details of the subscription.**currency**stringCurrency in which subscription was made.**amount**numberSubscription value.**status**objectSubscription status.**liveMode**booleanSubscription is in live / test mode.**entityType**stringEntity type of subscription (eg: order).**entityId**stringEntity id for the subscription. e.g: order id**entitySource**objectEntity source details for the subscription.**subscriptionId**stringSubscription id for subscription.**subscriptionSnapshot**objectSnapshot of subscription.**paymentProvider**objectPayment provider details for the subscription.**ipAddress**stringIp address from where subscription was initiated.**createdAt**string<date-time>requiredThe creation timestamp of the subscription.**updatedAt**string<date-time>requiredThe last update timestamp of the subscription.**meta**objectMeta details of the subscription.**markAsTest**booleanIs test subscription.**schedule**objectScedule details for the subscription.**autoPayment**objectAuto payment details of the subscription.**recurringProduct**objectRecurring product details of the subscription.**canceledAt**string<date-time>Cancellation timestamp of the subscription.**canceledBy**stringUser id who cancelled the subscription.**traceId**stringTrace id of the subscription.**createdBy**stringUser ID who created the subscription.

```json
{
  "_id": "64bf78af39118e4011926cba",
  "altType": "location",
  "altId": "3SwdhCu3svxI8AKsPJt6",
  "contactId": "XPLSw2SVagl12LMDeTmQ",
  "contactSnapshot": "{ last_name: \"Mcclain\", type: \"lead\", first_name_lower_case: \"rogan\", email: \"anish+11@gohighlevel.com\", last_name_lower_case: \"mcclain\", location_id: \"o6241QsiRwUIJHyjuhos\", company_name: \"Jordan and Cox Trading\"}",
  "coupon": "{ _id: \"6374c6926d119a393fe1e556\", usageCount: 5260, altId: \"jVFIxsMY19D94nOSIOEO\", altType: \"location\", name: \"FREE-100%\", code: \"FREE100\", discountType: \"percentage\", discountValue: 100 }",
  "currency": "USD",
  "amount": "100",
  "status": "active",
  "liveMode": "false",
  "entityType": "order",
  "entityId": "62f4db0f3059ecee61379012",
  "entitySource": "{ type: \"funnel\", id: \"lx6ROqruHGVQD2PZwFxK\", subType: \"upsell\", name: \"test funnel\" }",
  "subscriptionId": "I-0UE609H8E43P",
  "subscriptionSnapshot": "{ status: \"ACTIVE\", status_update_time: \"2022-08-16T11:06:53Z\", id: \"I-0UE609H8E43P\", plan_id: \"P-82K11750F0313430KMLRGE6Y\", start_time: \"2022-08-16T11:05:31Z\", quantity: 1 }",
  "paymentProvider": "{ type: \"paypal\", connectedAccount: { _id: \"64410debdc8f3b0503523abb\", merchantClientId: \"AeXtjrxdgsJiCPwQt5jML5pH-0mwmLs-tH7ub4Uo3IrDKvRl34FvJy8niI6E1wmS_pryIRdNllyVl58b\" } }",
  "ipAddress": "103.100.16.82",
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "meta": "{ collection: \"transactionsv2\", id: \"6320652f0f664b6632006920\" }",
  "markAsTest": "false",
  "schedule": "{ collection: \"transactionsv2\", id: \"6320652f0f664b6632006920\" }",
  "autoPayment": "{ customerId: \"908879612\", paymentMethodId: \"908646635\" }",
  "recurringProduct": "{ locationId: \"Z4Bxl8J4SaPEPLq9IQ8g\", funnel: \"bQHJWKcyjiKjk4BHv91g\", step: \"2281a993-8a75-4b48-9912-571f29c99a74\", name: \"Sofa Set\" }",
  "canceledAt": "2023-11-20T10:23:36.515Z",
  "canceledBy": "qUuXUiB2AiA2DIthEicP",
  "traceId": "302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a",
  "createdBy": "user123"
}
```
