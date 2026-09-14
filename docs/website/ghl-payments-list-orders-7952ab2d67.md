> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/list-orders). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Orders

**Endpoint:** `GET /payments/orders`

The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

LocationId is the id of the sub-account.

**altId**

string

required

AltId is the unique identifier e.g: location id.

**status**

string

Order status.

**paymentStatus**

string

Payment Status of the Order

Available options

`paid`

`unpaid`

`refunded`

`partially_paid`

**paymentMode**

string

Mode of payment.

**startAt**

string

Starting interval of orders.

**endAt**

string

Closing interval of orders.

**search**

string

The name of the order for searching.

**contactId**

string

Contact id for filtering of orders.

**funnelProductIds**

string

Funnel product ids separated by comma.

**sourceId**

string

Source id

**limit**

number

The maximum number of items to be included in a single page of results

`10`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredAn array of orders**totalCount**numberrequiredtotal orders count

```json
{
  "data": [
    {
      "_id": "653f5e0cde5a1314e62a837c",
      "altId": "3SwdhCu3svxI8AKsPJt6",
      "altType": "location",
      "contactId": "XPLSw2SVagl12LMDeTmQ",
      "contactName": "James Bond",
      "contactEmail": "james.bond@gohighlevel.com",
      "currency": "USD",
      "amount": "100",
      "subtotal": "100",
      "discount": "10",
      "status": "completed",
      "liveMode": "false",
      "totalProducts": "5",
      "sourceType": "funnel",
      "sourceName": "onestep",
      "sourceId": "kDj7BHej9Zyyq3QakJmz",
      "sourceMeta": "{ domain: \"app.gohighlevel.com\", pageId:  \"rBVhyYhMsbxbO8ZqOcei\", pageUrl:  \"/v2/preview/rBVhyYhMsbxbO8ZqOcei\", stepId:   \"5a772f62-3fbc-418b-af1b-be8929dd64c2\"}",
      "couponCode": "100PER",
      "createdAt": "2023-11-20T10:23:36.515Z",
      "updatedAt": "2024-01-23T09:57:04.846Z",
      "sourceSubType": "one_step_order_form",
      "fulfillmentStatus": "unfulfilled",
      "onetimeProducts": "1",
      "recurringProducts": "1",
      "createdBy": "user123"
    }
  ],
  "totalCount": 0
}
```
