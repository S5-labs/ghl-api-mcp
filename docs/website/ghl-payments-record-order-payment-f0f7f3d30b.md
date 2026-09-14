> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/record-order-payment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Record Order Payment

**Endpoint:** `POST /payments/orders/:orderId/record-payment`

The "Record Order Payment" API allows to record a payment for an order. Use this endpoint to record payment for an order and update the order status to "Paid".

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

Order ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredlocation Id / company Id based on altType**altType**stringrequiredAlt TypeAvailable options`location`**mode**stringrequiredmanual payment methodAvailable options`cash``card``cheque``bank_transfer``other`**card**objectDetails of Card if used for payment**cheque**objectDetails of the Cheque if used for payment**notes**stringAny note to be recorded with the transaction**amount**numberAmount to be paid against the invoice.**meta**objectMeta data to be recorded with the transaction**isPartialPayment**booleanIndicates if the order is intended to be a partial payment.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "mode": "card",
  "card": {
    "type": "mastercard",
    "last4": "1234"
  },
  "cheque": {
    "number": "129-129-129-912"
  },
  "notes": "This was a direct payment",
  "amount": 100,
  "meta": {},
  "isPartialPayment": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the request

```json
{
  "success": true
}
```
