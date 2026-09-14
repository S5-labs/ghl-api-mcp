> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-installed-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Location where app is installed

**Endpoint:** `GET /oauth/installed-locations`

This API allows you fetch location where app is installed upon

## Request

**Version**

string

required

API Version

Available options

`v3`

**pageSize**

number

Max items per page (1-100). Replaces legacy `limit` parameter per AIP-158.

`20`

**pageToken**

string

Opaque token returned in a previous response to fetch the next page. Replaces legacy `skip` parameter per AIP-158.

**query**

string

Literal installed-location name search. Leading and trailing whitespace is ignored.

**Possible values:** `<= 100 characters`

**isInstalled**

boolean

Filters out location which are installed for specified app under the specified company

**restrictToUserLocations**

boolean

When true, restricts the list to locations the current user has access to (for restricted agency admins and account admins). When false or omitted, no user-based filter is applied for installed list; for backward compatibility, install list (isInstalled=false) is still filtered by user when this param is omitted.

**companyId**

string

required

Parameter to search by the companyId

**appId**

string

required

Parameter to search by the appId

**versionId**

string

VersionId of the app

**onTrial**

boolean

Filters out locations which are installed for specified app in trial mode

**planId**

string

Filters out location which are installed for specified app under the specified planId

**locationId**

string

locationId

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**items**object[]requiredList of locations with their installation status for the requested app**pagination**objectrequiredPagination metadata (AIP-158)**metadata**objectQuery metadata (filters and sort applied)**installToFutureLocations**booleanBoolean to control if user wants app to be automatically installed to future locations

```json
{
  "items": [
    {
      "_id": "0IHuJvc2ofPAAA8GzTRi",
      "name": "John Deo",
      "address": "47 W 13th St, New York, NY 10011, USA",
      "isInstalled": true
    }
  ],
  "pagination": {
    "totalRecords": 1231,
    "hasNextPage": true,
    "hasPrevPage": false,
    "nextPageToken": "eyJvZmZzZXQiOjIwfQ",
    "prevPageToken": "eyJvZmZzZXQiOjB9",
    "currentPageSize": 20,
    "estimatedTotalRecords": 1231
  },
  "metadata": {
    "filterApplied": {
      "companyId": "tDtDnQdgm2LXpyiqYvZ6",
      "isInstalled": true
    },
    "sortApplied": {
      "installedAt": "desc"
    }
  },
  "installToFutureLocations": true
}
```
