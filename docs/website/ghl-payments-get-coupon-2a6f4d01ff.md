> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/get-coupon). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Fetch Coupon

**Endpoint:** `GET /payments/coupon`

The "Get Coupon Details" API enables you to retrieve comprehensive information about a specific coupon using either its unique identifier or promotional code. Use this endpoint to view coupon parameters, usage statistics, validity periods, and other promotional details.

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

Location Id

**altType**

string

required

Alt Type

Available options

`location`

**id**

string

required

Coupon id

**code**

string

required

Coupon code

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
