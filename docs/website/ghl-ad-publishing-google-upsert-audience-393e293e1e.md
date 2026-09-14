> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-audience). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert audience

**Endpoint:** `PUT /ad-publishing/google/audiences`

Create or update a Google Ads combined audience

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

**locationId**stringrequiredLocation identifier**resourceName**stringAudience resource name**name**stringrequiredAudience name**dimensions**objectAudience dimensions**exclusionDimension**objectExclusion dimensions

```json
{
  "locationId": "loc_abc123",
  "resourceName": "customers/123/audiences/456",
  "name": "My Audience",
  "dimensions": {
    "isAgeUnknown": false,
    "ageRanges": [
      {
        "minAge": 25,
        "maxAge": 34
      }
    ],
    "genders": [
      "MALE",
      "FEMALE"
    ]
  },
  "exclusionDimension": {
    "genders": [
      "UNDETERMINED"
    ]
  }
}
```

application/json

Google Ads mutate results for the created or updated audience — an array, not the audience itself

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "resourceName": "customers/6776452901/conversionActions/7086809727"
  }
]
```
