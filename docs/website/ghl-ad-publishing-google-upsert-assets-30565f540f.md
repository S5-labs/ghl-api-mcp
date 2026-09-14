> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-assets). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert assets

**Endpoint:** `POST /ad-publishing/google/assets`

Create or update Google Ads creative assets

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

**locationId**stringrequiredLocation identifier**type**stringrequiredAsset type to create or updateAvailable options`CALL``SITELINK`**payload**objectrequiredAsset payload — shape depends on the type field: CallAssetPayload (CALL) or SitelinkAssetPayload (SITELINK)

```json
{
  "locationId": "loc_abc123",
  "type": "CALL",
  "payload": {
    "phoneNumber": "+14155551234",
    "countryCode": "US"
  }
}
```

application/json

Resource name of the created or updated asset

- application/json

- Schema
- Example (auto)

**Schema**

**resourceName**stringrequiredResource name of the created or updated record

```json
{
  "resourceName": "customers/6776452901/conversionActions/7142718149"
}
```
