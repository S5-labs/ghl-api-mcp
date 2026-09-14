> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-delete-conversion). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete conversion

**Endpoint:** `DELETE /ad-publishing/google/conversions/:conversionId`

Delete a Google Ads conversion action by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**conversionId**

string

required

Conversion identifier

**locationId**

string

required

Location identifier

application/json

Google Ads mutate results for the removed conversion action — an array, unlike the segment delete

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
