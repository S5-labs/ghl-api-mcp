> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/search-locations). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search

**Endpoint:** `GET /locations/search`

Search Sub-Account (Formerly Location)

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

The company/agency id on which you want to perform the search

**skip**

string

The value by which the results should be skipped. Default will be 0

`0`

**limit**

string

The value by which the results should be limited. Default will be 10

`10`

**order**

string

The order in which the results should be returned - Allowed values asc, desc. Default will be asc

`asc`

**email**

string

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**locations**object[]

```json
{
  "locations": [
    {
      "id": "ve9EPM428h8vShlRW1KT",
      "name": "Mark Shoes",
      "phone": "+1410039940",
      "email": "john.doe@mail.com",
      "address": "4th fleet street",
      "city": "New York",
      "state": "Illinois",
      "country": "US",
      "postalCode": "567654",
      "website": "https://yourwebsite.com",
      "timezone": "US/Central",
      "settings": {
        "allowDuplicateContact": false,
        "allowDuplicateOpportunity": false,
        "allowFacebookNameMerge": false,
        "disableContactTimezone": false
      },
      "social": {
        "facebookUrl": "https://www.facebook.com/",
        "googlePlus": "https://www.googleplus.com/",
        "linkedIn": "https://www.linkedIn.com/",
        "foursquare": "https://www.foursquare.com/",
        "twitter": "https://www.foutwitterrsquare.com/",
        "yelp": "https://www.yelp.com/",
        "instagram": "https://www.instagram.com/",
        "youtube": "https://www.youtube.com/",
        "pinterest": "https://www.pinterest.com/",
        "blogRss": "https://www.blogRss.com/",
        "googlePlacesId": "ChIJJGPdVbQTrjsRGUkefteUeFk"
      }
    }
  ]
}
```
