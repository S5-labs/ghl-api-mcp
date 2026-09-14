> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-conversion). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert conversion

**Endpoint:** `PUT /ad-publishing/google/conversions`

Create or update a Google Ads conversion action

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

**locationId**stringrequiredLocation identifier**conversionId**stringConversion identifier**name**stringrequiredConversion name**type**stringrequiredConversion action type. Only `UPLOAD_CLICKS` is supported — the conversion list endpoint reads back UPLOAD_CLICKS actions only, so a conversion created with any other type would never be returned.Available options`UPLOAD_CLICKS`**category**stringrequiredConversion action categoryAvailable options`DEFAULT``PAGE_VIEW``PURCHASE``SIGNUP``LEAD``DOWNLOAD``ADD_TO_CART``BEGIN_CHECKOUT``SUBSCRIBE_PAID``PHONE_CALL_LEAD``IMPORTED_LEAD``SUBMIT_LEAD_FORM`**valueSettings**objectrequiredValue settings that control how monetary value is attributed to conversions**countingType**stringrequiredHow conversions are counted per interactionAvailable options`ONE_PER_CLICK``MANY_PER_CLICK`**attributionModel**stringrequiredAttribution model used to credit conversionsAvailable options`GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN``GOOGLE_ADS_LAST_CLICK`**clickThroughWindow**numberrequiredClick-through conversion window in days

```json
{
  "locationId": "loc_abc123",
  "conversionId": "conv_456",
  "name": "Purchase Conversion",
  "type": "UPLOAD_CLICKS",
  "category": "PURCHASE",
  "valueSettings": {
    "defaultValue": "10.00",
    "defaultCurrencyCode": "USD",
    "alwaysUseDefaultValue": false
  },
  "countingType": "ONE_PER_CLICK",
  "attributionModel": "GOOGLE_ADS_LAST_CLICK",
  "clickThroughWindow": 30
}
```

application/json

Resource name of the created or updated conversion action

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
