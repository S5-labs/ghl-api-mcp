> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Purchase number for location

**Endpoint:** `POST /phone-system/numbers/location/:locationId/purchase`

Purchase number for location. With `version: v3`, the HTTP 201 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 purchase fields live under `data`: `number`, `locationId`, `id`, and `underLcAccount` (renamed from under_ghl_account).

## Request

**version**

string

required

Send `v3` to use the v3 response contract (AIP). This is the supported version value for these endpoints.

Available options

`v3`

**locationId**

string

required

Location ID as string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**phoneNumber**stringrequiredphoneNumber to purchase**addressSid**stringrequiredaddressSid twilio address id**bundleSid**stringrequiredbundleSid twilio bundle id**countryCode**stringrequiredcountry for which the phone numbers are being requested**numberType**objectrequiredtype of phone number to be purchased**paymentIntentId**stringrequiredstripe payment intent id**stripeAccountId**stringrequiredstripe account id**paymentMethodId**stringrequiredstripe registered payment method id**locality**stringrequiredlocality of the user in which number is being purchased**region**stringrequiredregion of the user in which number is being purchased**fingerprintId**stringrequiredfingerprintId is request id which is unique for every purchase number request**skipLocationKYC**booleanrequiredSkip location-level KYC verification if agency-level compliance has already been verified

```json
{
  "phoneNumber": "830236932",
  "addressSid": "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "bundleSid": "BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "countryCode": "US",
  "numberType": "local",
  "paymentIntentId": "pi_3Oxxxxxxxxxxxxxxxxxxxx",
  "stripeAccountId": "acct_1Oxxxxxxxxxxxxxxxx",
  "paymentMethodId": "pm_1Oxxxxxxxxxxxxxxxx",
  "locality": "Austin",
  "region": "TX",
  "fingerprintId": "purchase-req-abc-123",
  "skipLocationKYC": false
}
```

application/json

Success envelope; v3 purchase details are in `data` (slim shape: number, locationId, id, underLcAccount).

- application/json

- Schema
- Example (auto)

**Schema**

**status**stringrequiredOutcome indicator from the shared success helper.Available options`success`**data**objectrequiredV3 purchase payload: purchased number, location, Twilio account id, and underLcAccount.**message**stringrequiredHuman-readable success message.**statusCode**numberrequiredHTTP status echoed in the response body.

```json
{
  "status": "success",
  "data": {
    "number": "+17745678902",
    "locationId": "tDtDnQdgm2LXpyiqYvZ6",
    "id": "twilio-account-123",
    "underLcAccount": false
  },
  "message": "Number purchase successful",
  "statusCode": 201
}
```
