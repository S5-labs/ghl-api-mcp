> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List active numbers

**Endpoint:** `GET /phone-system/numbers/location/:locationId`

List active numbers. With `version: v3`, the HTTP 200 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 list payload is under `data`; `isUnderGhl` is renamed to `isUnderLc` per AIP naming convention.

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

**pageSize**

number

How many resources to return in each list page. The default is 50, and the maximum is 1000.

**Possible values:** `>= 1` and `<= 1000`

**page**

number

The page index. The default is 0.

**Possible values:** `>= 0`

**searchFilter**

string

Number search Filter

**skipNumberPool**

boolean

When true, exclude numbers assigned to number pools from the list.

`true`

**includeRcsSenderIds**

boolean

Include RCS Sender IDs

application/json

Success envelope; v3 list details are in `data` (including `isUnderLc` instead of legacy `isUnderGhl`).

- application/json

- Schema
- Example (auto)

**Schema**

**status**stringrequiredOutcome indicator from the shared success helper.Available options`success`**data**objectrequiredV3 list payload: numbers, pagination fields, isUnderLc (renamed from isUnderGhl), etc.**message**stringrequiredHuman-readable success message.**statusCode**numberrequiredHTTP status echoed in the response body.

```json
{
  "status": "success",
  "data": {
    "numbers": [
      {
        "phoneNumber": "+17745678902",
        "friendlyName": "Main line",
        "countryCode": "US"
      }
    ],
    "isUnderLc": true,
    "pageSize": 50,
    "page": 0,
    "accountStatus": "active",
    "total": 1
  },
  "message": "OK",
  "statusCode": 200
}
```
