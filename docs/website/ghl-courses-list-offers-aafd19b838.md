> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/list-offers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Offers

**Endpoint:** `GET /courses/offers`

List membership offers in the location. Requires a Location token with courses.readonly. Send Version: v3. Uses membership listView pagination (cursor encodes skip). Location-wide — membership does not filter by productId. Default-offer rows are not included.

## Request

**Version**

string

required

API Version

Available options

`v3`

**limit**

string

Page size (1-50)

**Possible values:** `non-empty`

**cursor**

string

Opaque cursor from the previous page (encodes skip)

**Possible values:** `non-empty`

**search**

string

Case-insensitive title search

**Possible values:** `non-empty`

**visibility**

string

published or draft

Available options

`published`

`draft`

**locationId**

string

required

Location id or sub-account id is required.

**Possible values:** `non-empty`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**offers**object[]required**nextCursor**stringnullablerequired

```json
{
  "offers": [
    {
      "id": "c3d4e5f6-7890-4123-cdef-123456789012",
      "title": "Founding members",
      "description": "Access to the core course",
      "type": "free",
      "source": "membership",
      "amount": 0,
      "currency": "USD",
      "priceDisplayOverride": null,
      "isLivePaymentMode": false,
      "interval": null,
      "intervalCount": null,
      "trialDays": 0,
      "setupFee": 0,
      "numberOfPayments": null,
      "visibility": "published",
      "accessDate": null,
      "daysOfAccess": null,
      "customJs": null,
      "customCss": null,
      "customHeader": null,
      "customFooter": null,
      "coupons": [],
      "posterImage": "https://cdn.example.com/offer.png",
      "paymentProductId": null,
      "paymentPriceId": null,
      "products": [
        {
          "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          "title": "Onboarding",
          "description": "Start here"
        }
      ],
      "createdAt": "2026-04-20T10:00:00.000Z",
      "updatedAt": "2026-04-20T10:00:00.000Z"
    }
  ],
  "nextCursor": "eyJza2lwIjoxNX0"
}
```
