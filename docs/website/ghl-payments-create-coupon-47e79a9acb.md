> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/create-coupon). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Coupon

**Endpoint:** `POST /payments/coupon`

The "Create Coupon" API allows you to create a new promotional coupon with customizable parameters such as discount amount, validity period, usage limits, and applicable products. Use this endpoint to set up promotional offers and special discounts for your customers.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id**altType**stringrequiredAlt TypeAvailable options`location`**name**stringrequiredCoupon Name**code**stringrequiredCoupon Code**discountType**stringrequiredDiscount TypeAvailable options`percentage``amount`**discountValue**numberrequiredDiscount Value**startDate**stringrequiredStart date in YYYY-MM-DDTHH:mm:ssZ format**endDate**stringEnd date in YYYY-MM-DDTHH:mm:ssZ format**usageLimit**numberMax number of times coupon can be used**productIds**string[]Product Ids**priceIds**string[]Price Ids**variantIds**string[]Variant Ids**applyToFuturePayments**booleanIs Coupon applicable on upcoming subscription transactions**Default value:**`true`**applyToFuturePaymentsConfig**objectIf coupon is applicable on upcoming subscription transactions, how many months should it be applicable for a subscription**Default value:**`{"type":"forever"}`**limitPerCustomer**booleanLimits whether a coupon can be redeemed only once per customer.**Default value:**`false`

```json
{
  "altId": "BQdAwxa0ky1iK2sstLGJ",
  "altType": "location",
  "name": "New Year Sale",
  "code": "LEVELUPDAY2022",
  "discountType": "amount",
  "discountValue": 10,
  "startDate": "2023-01-01T22:45:00.000Z",
  "endDate": "2023-01-31T22:45:00.000Z",
  "usageLimit": 10,
  "productIds": [
    "6241712be68f7a98102ba272"
  ],
  "priceIds": [
    "6241712be68f7a98102ba272"
  ],
  "variantIds": [
    "6241712be68f7a98102ba272"
  ],
  "applyToFuturePayments": true,
  "applyToFuturePaymentsConfig": [
    {
      "type": "fixed",
      "duration": 5,
      "durationType": "months"
    },
    {
      "type": "forever"
    }
  ],
  "limitPerCustomer": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredUnique MongoDB identifier for the coupon**usageCount**numberrequiredNumber of times the coupon has been used**limitPerCustomer**numberrequiredMaximum number of times a customer can use this coupon (0 for unlimited)**altId**stringrequiredLocation Id**altType**stringrequiredType of entity**name**stringrequiredDisplay name of the coupon**code**stringrequiredRedemption code for the coupon**discountType**stringrequiredType of discount (percentage or amount)Available options`percentage``amount`**discountValue**numberrequiredValue of the discount (percentage or fixed amount)**status**stringrequiredCurrent status of the couponAvailable options`scheduled``active``expired`**startDate**stringrequiredDate when the coupon becomes active**endDate**stringEnd date when the coupon expires**applyToFuturePayments**booleanrequiredIndicates if the coupon applies to future recurring payments**applyToFuturePaymentsConfig**objectrequiredConfiguration for how the coupon applies to future payments**userId**stringUser ID associated with the coupon (if applicable)**createdAt**stringrequiredCreation timestamp**updatedAt**stringrequiredLast update timestamp**traceId**stringrequiredUnique identifier for tracing this API request

```json
{
  "_id": "67f6c132d9485f9dacd5f123",
  "usageCount": 12,
  "limitPerCustomer": 5,
  "altId": "79t07PzK8Tvf73d12312",
  "altType": "location",
  "name": "NEWT6",
  "code": "NEWT6",
  "discountType": "percentage",
  "discountValue": 25,
  "status": "scheduled",
  "startDate": "2025-04-30T18:30:00.000Z",
  "endDate": "2025-05-30T18:30:00.000Z",
  "applyToFuturePayments": true,
  "applyToFuturePaymentsConfig": {
    "type": "fixed",
    "duration": 3,
    "durationType": "months"
  },
  "userId": "q0m15dTLGeiGOXG123123",
  "createdAt": "2025-04-09T18:49:22.026Z",
  "updatedAt": "2025-04-09T18:49:22.026Z",
  "traceId": "c667b18d-8f5e-44cf-a914"
}
```
