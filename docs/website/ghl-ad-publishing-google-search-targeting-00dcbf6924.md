> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-search-targeting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search targeting options

**Endpoint:** `GET /ad-publishing/google/targeting/search`

Search Google geo-locations for ad targeting

## Request

**Version**

string

required

API Version

Available options

`v3`

**type**

string

required

Search type

Available options

`geolocation`

`language`

**query**

string

Search query

**locationId**

string

required

Location identifier

application/json

Geo targets when type=geolocation, or language constants when type=language

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]object[]Array [**resourceName**stringrequiredGoogle Ads resource name**id**stringrequiredGeo target constant id**status**stringrequiredTarget status**name**stringrequiredLocation name**countryCode**stringrequiredTwo-letter ISO country code**targetType**stringrequiredGranularity of the target, e.g. Country, State, City, District, Postal Code**canonicalName**stringrequiredFully qualified name, comma separated from most to least specific**reach**stringrequiredApproximate addressable population, returned as a string rather than a number]

```json
[
  {
    "resourceName": "geoTargetConstants/9040245",
    "id": "9040245",
    "status": "ENABLED",
    "name": "Thane",
    "countryCode": "IN",
    "targetType": "City",
    "canonicalName": "Thane,Thane,Maharashtra,India",
    "reach": "3000000"
  }
]
```
