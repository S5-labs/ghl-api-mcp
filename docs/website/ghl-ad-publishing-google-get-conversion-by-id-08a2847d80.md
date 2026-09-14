> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get conversion by ID

**Endpoint:** `GET /ad-publishing/google/conversions/:conversionId`

Retrieve a specific Google Ads conversion action by ID

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

The conversion action, including removed ones

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredGoogle Ads conversion action id**resourceName**stringrequiredGoogle Ads resource name**name**stringrequiredConversion action name**status**stringrequiredConversion action status. `REMOVED` actions are still readable by id.**type**stringrequiredConversion action typeAvailable options`UPLOAD_CLICKS``UPLOAD_CALLS``WEBPAGE``LEAD_FORM_SUBMIT`**category**stringrequiredConversion action categoryAvailable options`DEFAULT``PAGE_VIEW``PURCHASE``SIGNUP``LEAD``DOWNLOAD``ADD_TO_CART``BEGIN_CHECKOUT``SUBSCRIBE_PAID``PHONE_CALL_LEAD``IMPORTED_LEAD``SUBMIT_LEAD_FORM`**valueSettings**objectrequiredValue configuration**countingType**stringrequiredHow conversions are counted per clickAvailable options`ONE_PER_CLICK``MANY_PER_CLICK`**attributionModelSettings**objectrequiredAttribution configuration**includeInConversionsMetric**booleanrequiredWhether this action feeds the Conversions reporting metric**clickThroughLookbackWindowDays**stringrequiredClick-through lookback window in days, returned as a string**viewThroughLookbackWindowDays**stringrequiredView-through lookback window in days, returned as a string

```json
{
  "id": "7142742902",
  "resourceName": "customers/6776452901/conversionActions/7142742902",
  "name": "Offline purchase",
  "status": "ENABLED",
  "type": "UPLOAD_CLICKS",
  "category": "PURCHASE",
  "valueSettings": {
    "defaultValue": 0,
    "defaultCurrencyCode": "XXX",
    "alwaysUseDefaultValue": true
  },
  "countingType": "MANY_PER_CLICK",
  "attributionModelSettings": {
    "attributionModel": "GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN"
  },
  "includeInConversionsMetric": true,
  "clickThroughLookbackWindowDays": "90",
  "viewThroughLookbackWindowDays": "1"
}
```
